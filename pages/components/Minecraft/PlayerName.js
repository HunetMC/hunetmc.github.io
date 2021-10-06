// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const uuid = props;
  
  const { data, error } = useSwr(
    uuid.uuid ? 'https://api.ashcon.app/mojang/v2/user/' + uuid.uuid : null,
    fetcher
  )
    
  if (error) {
    return <></>
  } else {
    if (!data) {
      return <p>取得中...</p>
    } else {
      return <>{data.username}</>
    }
  }
}

export default App;
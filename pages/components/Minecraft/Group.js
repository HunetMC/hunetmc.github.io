// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// Bootstrap
import Container from 'react-bootstrap/Group';

function App (props) {
  const uuid = props;
  
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/players/group/` + uuid.uuid : null,
    fetcher
  )
  
  if (error) {
    return <p>エラーが発生しました。</p>
  } else {
    if (data.toString() == "Staff") {
      return <Badge bg="info">Staff</Badge>
    } else {
      return <></>
    }  
  }
}

export default App;
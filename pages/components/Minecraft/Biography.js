// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/bio/` + uuid.uuid : null,
    fetcher
  )
  
  if (error) {
    return <></>
  } else {
      if (!data) {
        return <p>取得中...</p>
      } else {
      if (data.toString() == "[object Object]") {
        return <p>取得中...</p>
      } else {
        if (data.toString() == "") {
          return <p>ひとことは設定されていません...</p>
        } else {
          return <p>ひとこと: <span className="italic">{data.toString()}</span></p>
        }
      }
    }
  }
}

export default App;
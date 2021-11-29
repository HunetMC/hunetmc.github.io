// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.text())

// Bootstrap
import Badge from 'react-bootstrap/Badge';

function App (props) {
  const uuid = props;
  
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/player/` + uuid.uuid : null,
    fetcher
  )
  
  if (error) {
    return <></>
  } else {
    if (data === undefined || data === null || data === "") {
      return <></>
    } else {
      if (data == "staff") {
        return <Badge bg="info">Staff</Badge>
      } else {
        return <></>
      }
    }
  }
}

export default App;
// React
import React, { useState, useEffect } from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then(res => res.json())

// Card
import Card from 'react-bootstrap/Card';

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/player/` + uuid.uuid : null,
    fetcher
  )
  
  if (error) {
    console.log(data)
    return <></>
  } else {
      if (!data) {
        return (
          <div>
            <h6>ひとこと</h6>
            <Card>
              <Card.Body>まだ何も書かれていません。</Card.Body>
            </Card>
          </div>
        )
      } else {
        if (data.Bio == "") {
          return (
            <div>
              <h6>ひとこと</h6>
              <Card>
                <Card.Body>まだ何も書かれていません。</Card.Body>
              </Card>
            </div>
          )
        } else {
          return (
            <div>
              <h6>ひとこと</h6>
              <Card>
                <Card.Body>{data.toString()}</Card.Body>
              </Card>
            </div>
          )
        }
      }
    }
  }

export default App;
// React
import React, { useState, useEffect } from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then(res => res.text())

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
        return <p>ひとことは設定されていません...</p>
      } else {
        if (data == "") {
          return <p>ひとことは設定されていません...</p>
        } else {
          return <p>ひとこと: <span className="italic">{data.toString()}</span></p>
        }
      }
    }
  }

export default App;
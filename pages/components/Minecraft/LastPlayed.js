// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then(res => res.json())

// date-fns
import { formatDistance } from 'date-fns'
import { ja } from 'date-fns/locale'

function App (props) {
  const uuid = props;

    const { data, error } = useSwr(
        uuid.uuid ? `https://api.skura.tech/player/${uuid.uuid}` : null,
        fetcher
    )
    
    if (error) {
        return <></>
    } else {
      if (data === undefined || data === null || data === "") {
        return <></>
      } else {
            let timeago = formatDistance(
                new Date(data.Last * 1000),
                new Date(),
               { addSuffix: true, locale: ja }
            ) 

            return (
                <div style={{ 'display' : 'inline-block' }}>
                    <span>最終ログイン: {timeago}</span>
                </div>
            );
        }
    }
}

export default App;
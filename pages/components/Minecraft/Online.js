// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then(res => res.text())

// Component
import LastPlayed from './LastPlayed'

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/player/${uuid.uuid}` : null,
    fetcher
  )
  
  if (error) {
    return <></>
  } else {
    if (!data) {
      return <p>取得中...</p>
    } else {
      if (data.toString() == "true") {
        return (
          <>
            <div style={{ 'display' : 'inline-block', 'width' : '20px', 'height' : '20px', 'marginRight' : '5px', 'borderRadius' : '50%', 'backgroundColor' : '#40E675' }}></div>
            <div style={{ 'display' : 'inline-block', 'position' : 'relative', 'bottom' : '5px' }}>
              <span>オンライン</span>
            </div>
          </>
        ) 
        } else {
          return (
            <>
              <div style={{ 'display' : 'inline-block', 'width' : '20px', 'height' : '20px',  'marginRight' : '5px', 'borderRadius' : '50%', 'backgroundColor' : '#F84B4B' }}></div>
              <div style={{ 'display' : 'inline-block', 'position' : 'relative', 'bottom' : '5px' }}>
                <span>オフライン, </span>
                <LastPlayed uuid={uuid.uuid} style={{ 'display' : 'inline-block' }}/>
              </div>
            </>
          )
      }
    }
  }
}

export default App;
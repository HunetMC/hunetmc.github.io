// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

// Component
import LastPlayed from './LastPlayed'

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.skura.tech/players/online/${uuid.uuid}` : null,
    fetcher
  )
  
  if (error) {
    return (
      <>
        <Layout title="エラー - プレイヤー情報">
        <p className="text-2xl">エラーが発生しました。</p>
        </Layout>
      </>
    )
  } else {
    if (!data) {
      return <p>取得中...</p>
    } else {
      if (data.toString() == "true") {
        return <p>オンライン</p>
      } else {
        return <LastPlayed uuid={uuid.uuid} />
      }
    }
  }
}

export default App;
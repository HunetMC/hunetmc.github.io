// Component
import Group from './Group';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `https://api.ashcon.app/mojang/v2/user/${uuid.uuid}` : null,
    fetcher
  )
  
  if (error) {
    return (
      <></>
    )
  } else {
    if (!data) {
      return (
        <>読み込み中...</>
      )
    } else {
        return (
          <div>
            <h1 style={{ 'display' : 'inline-block' }}>{data.username}</h1>
            <h3 style={{ 'display' : 'inline-block', 'marginLeft' : '5px' }}><Group uuid={uuid.uuid} /></h3>
            <p style={{ 'marginBottom' : '-1px' }}>UUID: <code>{uuid.uuid}</code></p>
          </div>
        )
    }
  }
}

export default App;
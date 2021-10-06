// Component
import Group from './Group';

// Data fetching
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
  const uuid = props;
  const { data, error } = useSwr(
    uuid.uuid ? `/api/PlayerName/${uuid.uuid}` : null,
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
          </div>
        )
    }
  }
}

export default App;
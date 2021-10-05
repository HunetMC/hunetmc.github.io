// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
    const { data, error } = useSwr(
      'https://api.mcsrvstat.us/2/skura.tech',
      fetcher
    )
    
    if (error) {
      return (
        <>エラーが発生しました。</>
      )
    } else {
      if (!data) {
        return (
          <>読み込み中...</>
        )
      } else {
        return (
            <div>
            <Card style={{ 'margin-bottom': '5px' }}>
              <Card.Body>
                <Card.Text>
                    {data.players.online} 人がプレイしています。<br />
                    <code>skura.tech</code> から参加できます。
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        )
      }
    }
  }
  
  export default App;
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
        var status;
        if (!data.online) {
          status = "<span>サーバーはオフラインです</span>"
        } else {
          if (data.players.online == 0) {
            status = "<span>誰もログインしていません。</span>"
          } else {
            status = "<span><span style={{ 'color' : 'gray' }, { 'font-size' : '25px' }}>" + data.players.online + "</span>人がオンラインです。</span>"
          }
        }
        return (
            <div>
            <Card style={{ 'margin-bottom': '5px' }}>
              <Card.Body>
                <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: status }} />
                    アドレス: <code>skura.tech</code><br />
                    バージョン: 1.17.1
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        )
      }
    }
  }
  
  export default App;
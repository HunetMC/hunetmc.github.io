// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

function App (props) {
    const { data, error } = useSwr(
      '/api/TumblrPost',
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
        console.log(data.posts)
        const content = data.posts.map((d) => 
        <div>
            <Card style={{ width: '50%' }}>
              <Card.Body>
                <Card.Title>{d.title} ({d.date})</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{ __html: d.body }} />
              </Card.Body>
            </Card>
        </div>
        );
        return (
            <>
                {content}
            </>
        )
      }
    }
  }
  
  export default App;
// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

// Next.js
import Link from "next/link"

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
        const content = data.posts.map((d, _) => 
        <div>
            <Card style={{ 'margin-bottom': '5px' }}>
              <Card.Body>
                <Link href={d.url}>
                    <a>
                        <Card.Title>{d.title} ({d.date})</Card.Title>
                    </a>
                </Link>
                <Card.Text dangerouslySetInnerHTML={{ __html: d.body }} />
              </Card.Body>
            </Card>
        </div>
        );
        return (
            <>
                <h3>ニュース</h3>
                {content}
            </>
        )
      }
    }
  }
  
  export default App;
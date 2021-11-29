// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

// Next.js
import Link from "next/link"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

function App (props) {
    const { data, error } = useSwr(
      '/api/TumblrPost',
      fetcher
    )
    
    if (error) {
      return (
        <>
          <h3><FontAwesomeIcon icon={faNewspaper} width={30} />&nbsp;ニュース</h3>
          <p>エラーが発生しました。</p>
        </>
      )
    } else {
      if (!data) {
        return (
          <>
            <h3><FontAwesomeIcon icon={faNewspaper} width={30} />&nbsp;ニュース</h3>
            <p>読み込み中...</p>
          </>
        )
      } else {
        const content = data.posts.map((d) => 
        <div key={d.slug}>
            <Card style={{ 'marginBottom': '5px' }}>
              <Card.Body>
                <Link href={d.url}>
                    <a>
                        <Card.Title>{d.title}</Card.Title>
                    </a>
                </Link>
                <Card.Text>
                  <div dangerouslySetInnerHTML={{ __html: d.body }} />
                  <div style={{ 'textAlign' : 'right' }}>
                    <small>{d.date}</small>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        );
        return (
            <>
                <h3><FontAwesomeIcon icon={faNewspaper} width={30} />&nbsp;ニュース</h3>
                {content}
            </>
        )
      }
    }
  }
  
  export default App;
// Bootstrap
import Card from 'react-bootstrap/Card';

// Data fetching
import useSwr from 'swr'

// Data fetching implements
const fetcher = (url) => fetch(url).then((res) => res.json())

// Next.js
import Link from "next/link"

// Bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

// Components
import Layout from './components/Layout'

function App () {
    return (
        <Layout title="プレイヤー検索">
          <Container style={{ 'marginTop': '100px' }} className="mx-auto">
             <h1 className="text-center">プレイヤー検索</h1>
             <Form className="mx-auto" style={{ 'max-width' : '600px' }}>
              <Row className="align-items-center">
                <Col className="my-1">
                  <Form.Control size="lg" id="inlineFormInputName" placeholder="プレイヤー名を入力してください。" />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button size="lg" type="submit">検索</Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Layout>
        
    )
}
  
export default App;
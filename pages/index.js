// Components
import Layout from './components/Layout'
import News from './components/News'
import Status from './components/Status'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <Layout title="ホーム">
      <Container style={{ 'marginTop': '5px' }}>
        <Row>
          <Col xs={8}>
            <News />
          </Col>
          <Col>
            <Status />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

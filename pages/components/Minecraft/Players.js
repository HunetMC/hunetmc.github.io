// Components
import Online from './Online'
import Head from './Head'
import PlayerNameHolder from './PlayerNameHolder'
import Biography from './Biography'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App (props) {
  const uuid = props;
  
  return (
    <Container style={{ 'marginTop' : '5px', 'maxWidth' : '900px' }}>
      <Row>
        <Col>
            <Head uuid={uuid.uuid} />
        </Col>
        <Col xs={9}>
          <PlayerNameHolder uuid={uuid.uuid} />
          <Online uuid={uuid.uuid} />
          <Biography uuid={uuid.uuid} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
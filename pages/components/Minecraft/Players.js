// Components
import Online from './Online'
import Head from './Head'
import PlayerNameHolder from './PlayerNameHolder'
import Biography from './Biography'

function App (props) {
  const uuid = props;
  
  return (
    <div>
        <div>
            <Head uuid={uuid.uuid} />
        </div>
        <div>
          <p><PlayerNameHolder uuid={uuid.uuid} /></p>
          <p><Online uuid={uuid.uuid} /></p>
          <p><Biography uuid={uuid.uuid} /></p>
        </div>
    </div>
  )
}

export default App;
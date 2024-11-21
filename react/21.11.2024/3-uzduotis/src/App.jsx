import Header from './components/Header'
import data from './data/data.json'
import Card from  './components/Card'

function App() {

  return (
    <div>
      <Header/>

      {data.map((info) => (

      <Card 
      company={info.company}
      position={info.position}
      postedAt={info.postedAt}
      contract={info.contract}
      location={info.location}
      logo={info.logo}
      key={info.id}

      />
      ))}
    </div>
  )
}

export default App

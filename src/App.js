import './App.css'

import Header from './Componets/Header'
import Tvshow from './Componets/Tvshow'
import Mobile from './Componets/Mobile'
import Article from './Componets/Article'
import Kid from './Kid'
import AccordionList from './Componets/AccordionList'

import FooterList from './Componets/FooterList'
function App() {
  return (
    <div className='app ' style={{ background: 'grey' }}>
      <div>
        <Header />
      </div>
      <Tvshow />
      <Mobile />
      <Article />
      <Kid />
      <AccordionList />
      <FooterList />
    </div>
  )
}

export default App

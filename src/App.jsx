import { useState } from 'react'

import './App.css'
import Linn from './Linn'
import pariisImg from './assets/paris__7_by_joeclaffeyjr_dfgnddo.png'
import londonImg from './assets/london_pictures_iii_by_jenisei_d1z6dkf.jpg'
import berliinImg from './assets/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.png'

const pariis = {
  nimi: 'Pariis',
  pilt: pariisImg,
  kirjeldus: 'Pariis on Prantsusmaa pealinn'
}

const london = {
  nimi: 'London',
  pilt: londonImg,
  kirjeldus: 'London on Inglismaa pealinn'
}

const berliin = {
  nimi: 'Berliin',
  pilt: berliinImg,
  kirjeldus: 'Berliin on Saksamaa pealinn'
}

const linnad = [pariis, london, berliin]

function App() {
  const [count, setCount] = useState(0)

  const linnadeMenyy = linnad.map((linn, index) => {
    return(
      <div key={index}>{linn.nimi}</div>
    )
  })

  return (
   <div>
      <h1>Minu lemmik linnad</h1>
      <div className='linnadeMenyy'>{linnadeMenyy}</div>
      <Linn linn={pariis} />
      <Linn linn={london} />
      <Linn linn={berliin} />
   </div>
  )
}

export default App

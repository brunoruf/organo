import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';

/*
let oldCharacters = [
  {time: 'Item dois', nome:'Fulano', bordao:'Tamo junto', forca:'3', resistencia:'4', image:'http...'}
]
*/

export const teams = [
  {
    name: 'X-Men',
    primaryColor: '#aa0505',
    secondaryColor: '#4b0908',
  },
  {
    name: 'Avengers',
    primaryColor: '#626EDA',
    secondaryColor: '#924F9E',
  },
  {
    name: 'SpiderMan',
    primaryColor: '#DF1F2D',
    secondaryColor: '#2B3784',
  }
]

function App() {

  const [characters, setCharacters] = useState([])

  const createNewCharacter = (objeto) => {
    setCharacters([...characters, objeto])
  }
  
  return (
    <>
      <Banner />
      <div className='container'>
        <Form mainTitle="Título do Form" cardInfos={objeto => createNewCharacter(objeto)} teamList={teams.map(team => team.name)}/>
      </div>
      {teams.map(team => (<Team
      teamName={team.name}
      key={team.name}
      background={team.primaryColor}
      characters={characters.filter(character => character.time === team.name)}/>))}
    </>
  );
}

export default App;

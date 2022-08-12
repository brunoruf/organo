import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Form from './Components/Form';
import Team from './Components/Team';


let oldCharacters = [
  {time: 'X-Men', nome:'Wolverine', bordao:`I'm the best there is at what I do, but what I do best isn't very nice.`, forca:'4', resistencia:'5', image:'https://www.geekalerts.com/u/Wolverine-Art-Print.jpg'}, 
  {time: 'X-Men', nome:'Gambit', bordao:`You wanna play with Gambit? Here, pick a card!`, forca:'4', resistencia:'5', image:'https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/27/comics-gambit-remy-lebeau.jpg'}, 

]


export const teams = [
  {
    name: 'X-Men',
    primaryColor: '#222',
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

  const [characters, setCharacters] = useState([...oldCharacters])
  const createNewCharacter = (objeto) => {
    setCharacters([...characters, objeto])
  }

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
        {isModalVisible && <Form
        mainTitle="Título do Form"
        cardInfos={objeto => createNewCharacter(objeto)}
        teamList={teams.map(team => team.name)}
        onClick={() => setIsModalVisible(false)}
        closeModal={() => setIsModalVisible(false)}
        />}
      <Banner><button onClick={() => setIsModalVisible(true)}>NEW</button></Banner>
      {teams.map(team => (<Team
      teamName={team.name}
      key={team.name}
      background={team.primaryColor}
      characters={characters.filter(character => character.time === team.name)}/>))}
    </>
  );
}

export default App;

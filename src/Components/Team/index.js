import React from 'react'
import "./Time.css"
import CharacterCard from '../CharacterCard'

const Team = ({teamName, background, characters}) => {
  return (
    characters.length > 0 &&
    <section className='team-container' style={{background: background}}>
        <h3>{teamName}</h3>
        <div className='characters-list'>
          {characters.map(character => <CharacterCard
          key={character.nome}
          characterName={character.nome}
          characterQuote={character.bordao}
          characterStrenght={character.forca}
          characterResistance={character.resistencia}
          characterPicture= {character.image}
          />)}
        </div>
    </section>
  )
}

export default Team
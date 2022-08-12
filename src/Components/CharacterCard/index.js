import React from 'react'
import "./CharacterCard.css"

const CharacterCard = ({characterName, characterQuote, characterStrenght, characterResistance, characterPicture}) => {
  return (
        <div className='character-card-container block' style={{backgroundImage: `url("${characterPicture}")`}}>
            <div className='character-strenght'>{characterStrenght}</div>
            <div className='character-resistance'>{characterResistance}</div>
            <div className='character-name'>{characterName}</div>
            <div className='character-quote'>{characterQuote}</div>
            <div className='character-container-dark'></div>
        </div>
  )
}

export default CharacterCard
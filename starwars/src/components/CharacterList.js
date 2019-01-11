import React from 'react';
import Character from './Character';
import './StarWars.css';

function CharacterList(props) {
    const indexOfLastChar = props.currentPage * props.charPerPage;
    const indexOfFirstChar = indexOfLastChar - props.charPerPage;
    const currentChars = props.characterDataList.slice(indexOfFirstChar, indexOfLastChar);
    return (
        <div className="character-list-container">
            {currentChars.map((character, index) => {
                return <Character character={character} key={index}/>
            })}
        </div>
    );
}

export default CharacterList;
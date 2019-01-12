import React from 'react';
import Character from './Character';
import './StarWars.css';

function CharacterList(props) {
    const indexOfLastChar = props.currentPage * props.charPerPage; //grabs the current page number and amount of characters per page to use as a index
    const indexOfFirstChar = indexOfLastChar - props.charPerPage; //uses the index of the last character on a page and subtracts the amount of characters per page to get the first index
    //this variable holds the new array that will display the character data based off what page the user clicks on
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
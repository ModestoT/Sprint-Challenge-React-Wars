import React from 'react';
import Character from './Character';

function CharacterList(props) {
    return (
        <div className="character-list-container">
            {props.characterDataList.map((character, index) => {
                return <Character character={character} key={index}/>
            })}
        </div>
    );
}

export default CharacterList;
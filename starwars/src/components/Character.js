import React from 'react';

function Character (props){
    return (
        <div className="character-name">
            {props.character.name}
            <ul className="character-info">
                <li>{props.character.birth_year}</li>
                <li>{props.character.created}</li>
                <li>{props.character.edited}</li>
                <li>{props.character.eye_color}</li>
                <ul className="character-films">
                    {props.character.films.map((film, index) => {
                        return <li key={index}>{film}</li>
                    })}
                </ul>
                <li>{props.character.gender}</li>
                <li>{props.character.hair_color}</li>
                <li>{props.character.height}</li>
            </ul>
        </div>
    );
}

export default Character;
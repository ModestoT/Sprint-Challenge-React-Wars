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
                <li>{props.character.films}</li>
                <li>{props.character.eye_color}</li>
                <li>{props.character.eye_color}</li>
                <li>{props.character.eye_color}</li>
            </ul>
        </div>
    );
}

export default Character;
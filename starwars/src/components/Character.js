import React from 'react';
import './StarWars.css';

function Character (props){
    return (
        <div className="character">
            <div className="character-name">{props.character.name}</div>
            <ul className="character-info">
                <li>Birth Year: {props.character.birth_year}</li>
                <li>Eye Color: {props.character.eye_color}</li>
                <li>Gender: {props.character.gender}</li>
                <li>Hair Color: {props.character.hair_color}</li>
                <li>Height: {props.character.height}</li>
                <li>Mass: {props.character.mass}</li>
                <li>Skin Color: {props.character.skin_color}</li>
                <li>Created: {props.character.created}</li>
                <li>Edited: {props.character.edited}</li>
            </ul>
        </div>
    );
}

export default Character;
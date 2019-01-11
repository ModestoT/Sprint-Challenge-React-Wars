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
                <li>{props.character.homeworld}</li>
                <li>{props.character.mass}</li>
                <li>{props.character.skin_color}</li>
                <ul className="character-species">
                    {props.character.species.map((sp, index) => {
                        return <li key={index}>{sp}</li>
                    })}
                </ul>
                <ul className="character-starships">
                    {props.character.starships.map((ship, index) => {
                        return <li key={index}>{ship}</li>
                    })}
                </ul>
                <ul className="character-vehicles">
                    {props.character.vehicles.map((v, index) => {
                        return <li key={index}>{v}</li>
                    })}
                </ul>
            </ul>
        </div>
    );
}

export default Character;
import React from 'react';

import './StarWars.css';

function PageNumbers (props) {
    const pageNumbers = []; //array used to hold the number of page numbers the characters will take up
    
    //loop used to add as many page numbers as needed for all the character data
    for (let i = 1; i <= Math.ceil(props.characterDataList.length / props.charPerPage); i++){
      pageNumbers.push(i);
    }

    return (
        <div className="page-numbers">
            {pageNumbers.map(number => { //renders the needed amount of page numbers to the page
                return (
                    <li 
                        key={number}
                        id={number}
                        onClick={props.handlePage}
                        className={`page-list ${(number === 1) ? 'current-page' : null}`}
                    >
                        {number}
                    </li>
                );
            })}
        </div>
    );
}

export default PageNumbers;
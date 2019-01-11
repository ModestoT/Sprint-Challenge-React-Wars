import React from 'react';

import './StarWars.css';

function PageNumbers (props) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(props.characterDataList.length / props.charPerPage); i++){
      pageNumbers.push(i);
    }

    return (
        <div className="page-numbers">
            {pageNumbers.map(number => {
                return (
                    <li 
                        key={number}
                        id={number}
                        onClick={props.handlePage}
                        className="page-list"
                    >
                        {number}
                    </li>
                );
            })}
        </div>
    );
}

export default PageNumbers;
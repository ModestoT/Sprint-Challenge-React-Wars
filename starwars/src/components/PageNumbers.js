import React from 'react';

function PageNumbers (props) {
    const pageNumbers = [];
    
    for (let i = 0; i <= Math.ceil(this.state.starwarsChars.length / this.state.charPerPage); i++){
      pageNumbers.push(i);
    }
    
    return (
        <div>
            {pageNumbers.map(number => {
                return (
                    <li 
                        key={number}
                        id={number}
                        onClick={props.handlePage}
                    >
                        {number}
                    </li>
                );
            })}
        </div>
    );
}

export default PageNumbers;
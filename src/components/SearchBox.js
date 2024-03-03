import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div style={{paddingBottom: '10px'}}>
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Seach Robots"
                onChange={searchChange}
            />
        </div>
        
    )
}

export default SearchBox
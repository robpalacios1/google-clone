import React from 'react'

/***** Icons *****/
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

/** CSS */
import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input />
                <MicIcon />
            </div>
        </div>
    )
}

export default Search

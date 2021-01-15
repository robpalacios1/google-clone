import React from 'react'

/***** Icons *****/
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'

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

            <div className="search__buttons">
                <Button variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

export default Search

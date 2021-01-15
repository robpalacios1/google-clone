import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

/***** Icons *****/
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'

/** CSS */
import './Search.css'

const Search = () => {

    const [input, setInput] = useState('')
    const history = useHistory();

    const search = (event) => {
        event.preventDefault();
        history.push('/search')
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon"/>
                <input
                    value={input}
                    onChange={event => setInput(event.target.value)}
                />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button
                    onClick={search}
                    type='submit'
                    variant="outlined"
                >
                    Google Search
                </Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes} from '../reducer'

/***** Icons *****/
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core'

/** CSS */
import './Search.css'

const Search = ({hideButtons = false}) => {

    const [{}, dispatch] = useStateValue('');

    const [input, setInput] = useState('')
    const history = useHistory();

    const search = (event) => {
        event.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        // do something with input...
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

            {
                !hideButtons ? (
                    <div className="search__buttons">
                        <Button
                            onClick={search}
                            type='submit'
                            variant="outlined"
                        >
                            Google Search
                        </Button>
                        <Button
                            variant="outlined"
                        >
                            I'm Feeling Lucky
                        </Button>
                    </div>

                ):(

                    <div className="search__buttons">
                        <Button
                            className="search__buttonsHidden"
                            onClick={search}
                            type='submit'
                            variant="outlined"
                        >
                            Google Search
                        </Button>
                        <Button
                            className="search__buttonsHidden"
                            variant="outlined"
                        >
                            I'm Feeling Lucky
                        </Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search

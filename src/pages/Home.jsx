import React from 'react'

/***** Icons *****/
import DialpadIcon from '@material-ui/icons/Dialpad';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

/***** CSS *****/
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1>Iam the Homepage</h1>

            <div className="home__header">
                <div className="home__headerLeft">
                    <a href>About</a>
                    <a href>Store</a>
                </div>
                <div className="home__headerRight">
                    <a href>Gmail</a>
                    <a href>Images</a>
                    <DialpadIcon />
                    <AccountCircleIcon />
                </div>
            </div>

            <div classname="home__body">

            </div>
        </div>
    )
}

export default Home

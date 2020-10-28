import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {

     // const[token,setToken]=useState(null);

    const [{ user, token }, dispatch] = useDataLayerValue();


    useEffect(() => {

        const hash = getTokenFromUrl();

        window.location.hash = ""

        const _token = hash.access_token;

        console.log(_token)

        if (_token) {

            spotify.setAccessToken(_token)

            dispatch({
                type: 'SET_TOKEN',
                token: _token
            })

            console.log('I have a token:point',token)

        	// setToken(_token)

            spotify.getMe().then(user => {

                dispatch({
                    type: 'SET_USER',
                    user: user
                })
                console.log('This is line at 45', user);
            })


            // spotify.getUserPlaylists().then( (playlists) => {

            //     dispatch({

            //         type: 'SET_PLAYLISTS',  

            //         playlists:playlists
            //     })

            //     console.log(playlists)


            // })


            // spotify.getUserPlaylist('37i9dQZEVXcTMQQqg1CAFG').then(response => {
            //     dispatch({
            //         type: "SET_DISCOVER_WEEKLY",
            //         discover_weekly: response,
            //     })
            // })
        }

    },  [token, dispatch]);

    console.log(user)
    console.log(token)

    return ( <div className = "app" > 
    { 
        token ? ( <Player spotify={spotify} />) :(<Login />)
    } 
        </div>
    );
}

export default App;
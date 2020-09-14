import React from 'react';
import './../assets/Player.css';
import Sidebar from './../components/Sidebar.js';
import Body from './../components/Body';
import Footer from './../components/Footer';

function Player({spotify}) {
    return (
        <div className="player">
        <div className="player__body">
            <Sidebar />
            <Body spotify={spotify}/>
           
        </div>
        <Footer />
        </div>
    )
}

export default Player

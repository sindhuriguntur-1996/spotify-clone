import { PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import './../assets/Body.css';
import Header from './Header';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Songrow from './../components/Songrow';

function Body({spotify}) {
    const [{discover_weekly},dispatch]=useDataLayerValue();
    console.log("dw",discover_weekly)
    return (
        <div className="body">  
           <Header spotify={spotify} />
<div className="body__info">
    <img src={discover_weekly?.images[0].url} alt=""/>
    <div className="body__infoText">
        <strong>Playlist</strong>
        <h2>DiscoverWeekly</h2>
        <p>{discover_weekly?.description}</p>
    </div>
</div>

<div className="body__songs">
    <div className="body__icons">
        <PlayCircleFilled className="body__shuffle"/>
        <FavoriteIcon fontSize="large" />
        <MoreHorizIcon />

    </div>
    {discover_weekly?.tracks.items.map((item) => (
          <Songrow track={item.track} />
        ))}
    
</div>
        </div>
    )
}

export default Body

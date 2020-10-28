import React from 'react';
import "./Body.css"
import Header from "./Header"
import {useDataLayerValue} from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow'

function Body({spotify}) {

	const[{discover_weekly},dispatch]=useDataLayerValue();

	return(
		<div className="body">
		<Header spotify={spotify}/>

		<div className="body__info">
		<img src="https://newjams-images.scdn.co/v2/discover-weekly/pOdnPTRma6KZzKPNRN9oUA==/bmVuZW5lbmVuZW5lbmVuZQ==/default" alt="" />



	<div className="body__infoText">

	    <strong>PLAYLIST</strong>
	    <h2>Discover Weekly</h2>
	    <p>{discover_weekly?.description} </p>
	    
	 </div>
	   </div>

	   <div className="body__songs">
	   <div className="body__icons"> 

	   <PlayCircleFilledIcon className="body_shuffle"/>

	   <FavoriteIcon fontSize="large" />

	   <MoreHorizIcon />
	   </div>
	   {discover_weekly?.tracks.items.map(
	   	item=><SongRow track={item.track}  />


	   	)}

	   </div>
    </div>

	)
}

export default Body;
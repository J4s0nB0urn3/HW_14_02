import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null
  return (
    <div className='song-detail'>
      <li>{props.song['im:name'].label}</li>
      <h5>Artist: {props.song['im:artist'].label}</h5>
      <h5>Price: {props.song['im:price'].label}</h5>
      <h5>Official Link: <a href={props.song.link[0].attributes.href}>Click here</a></h5>
      <img src={props.song['im:image'][2].label} alt='cover image'/>
      <audio controls src={props.song.link[1].attributes.href}></audio><br/><br/>
    </div>
  )
}

export default SongDetail;

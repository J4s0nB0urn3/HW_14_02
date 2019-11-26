import React from 'react';
import SongDetail from './SongDetail';

const SongList = (props) => {
  const options = props.songs.map((song, index) => {
    return <SongDetail value={index} key={index} song={song}></SongDetail>
  })

  return (
    <ol className='o-list'>
        {options}
    </ol>
  )
}

export default SongList;

import React, {Component} from 'react';
import SongList from '../components/SongList';

class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({
      songs: data.feed.entry
    }))
    .catch(err => console.error);
  }

  render() {
    return (
      <div>
        <h3> The current UK top 20 songs </h3>
        <SongList
        songs = {this.state.songs}/>
      </div>
    )
  }
}

export default MusicBox;

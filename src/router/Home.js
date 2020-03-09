import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';

class Home extends React.Component{
state = {
  isLoading: true,
  movies: []
}

componentDidMount(){
  //setTimeout(this.change, 4000)
  this.getMovies();
}

getMovies=async()=>{
  const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  this.setState({movies: movies, isLoading: false});
}


//change=()=>{
  //this.setState({isLoading: false})}

render(){
  return(
    <div className='container'>
      {this.state.isLoading === true?
        <div className='loader'>
          <div className='loader_text'> loading...</div>
          
        </div> 
        :
        <div className= 'movies'>
          {this.state.movies.map(item=>{return(
          <Movie title={item.title} year={item.year} summary={item.summary} poster = {item.medium_cover_image} genres = {item.genres}></Movie>)
        })}
        </div>}
        </div>
  )
}

}

export default Home;
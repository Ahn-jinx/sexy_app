import React from 'react'
import './Movie.css'
import {Link} from 'react-router-dom'

function Movie(props){
    return (
    
    <Link className='movie' to = {{
        pathname : '/movie-detail',
        state : { title : props.title,
                poster : props.poster,
                year : props.year,
                genres : props.genres,
                summary : props.summary
        }
    }
    }>
    <div>
        <img className = 'movie_poster' src={props.poster} alt = {props.title} title = {props.title}></img>
        <div className = 'movie_data'>
            <div className = 'movie_title'>{props.title}</div>
            <div className = 'movie_year'>{props.year}</div>
            <ul className = 'movie_genre'>{props.genres.map(genre=>{return <li>{genre}</li>})}</ul>
            <p className = 'movie_summary'>{props.summary.slice(0,200)}</p>
        </div>
    </div>
    </Link>)

}

export default Movie;
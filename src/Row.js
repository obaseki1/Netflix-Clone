import React, { useState, useEffect } from 'react';
import axios from './axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"
const opts = {
    height: "390",
    width: '100%',
    playerVars: {
        autoplay: 1,
    }
}

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])

    const handleClick = (movie) => {
        console.log(movie.name)
        trailerUrl ?
            setTrailerUrl('')
            :
            movieTrailer(movie?.title || movie?.original_name || movie?.name || "")
                .then((url) => {
                    console.log('URL', url)
                    const params = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(params.get('v'))
                    console.log('TRAILER ',trailerUrl)
                }).catch((error) => {
                    console.log(error)
                })
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {
                    movies.map((movie) => {
                        return (
                            <img
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                className= {isLargeRow ? 'large-poster-img' : 'poster-img'}
                                src={`${base_url}${isLargeRow ?  movie.poster_path: movie.backdrop_path}`}
                                alt={movie.name} />
                        )
                    })
                }
            </div>
            {
                trailerUrl &&
                <YouTube videoId={trailerUrl} opts={opts} />
            }
            
        </div>
    )
}
export default Row
import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"


    useEffect(() => {
         async function fetchData() {
             const request = await axios.get(requests.fetchNetflixOriginals)
             setMovie(request.data.results[
                 Math.floor(Math.random() * request.data.results.length - 1)])
             return request;
         }
        fetchData()
        
        
    }, [])

    console.log('MOVIE', movie)
    return (
        <header className="banner" style={{ backgroundSize: 'cover', backgroundImage: `url(${base_url}${movie?.backdrop_path})`,backgroundPosition: 'center center'}}>
            <div className="banner-content">
                <h1 className="banner-title">{
                    movie?.name || movie?.original_name || movie?.title
                }</h1>
                <div className="button-div">
                    <div className="banner-btn play">Play</div>
                    <div className="banner-btn">More Info</div>
                </div>
                <h1 className="banner-description">
                    {movie.overview}
                </h1>
            </div>
            <div className="fade-bottom"/>
        </header>
    )
}

export default Banner

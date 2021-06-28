import React from 'react'
const base_url = "https://image.tmdb.org/t/p/original/"
function Poster({title, img}) {
    return (
        
            <img
                className="poster-img"
                src={`${base_url}${img}`}
                alt={title} />
            
     
    )
}

export default Poster

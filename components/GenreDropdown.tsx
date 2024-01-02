import { Genres } from '@/typings';
import React from 'react'; 

async function GenreDropdown() {

    const url = "https://api.themoviesdb.org/3/genre/movie/list?language=en";
    
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next : {
            //after making initial request it will cache it.
            //the second person to make this request gets the cached version of the request.
            //after 24 hours it'll remake the request.
            revalidate: 60 * 60 * 24 
        }
    }

    const response = await fetch(url, options);
    const data = (await response.json()) as Genres

    return(
        
        <div>Genre Dropdown</div>
    )
}

export default GenreDropdown; 
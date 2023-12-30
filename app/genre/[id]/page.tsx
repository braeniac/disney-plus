import React from 'react'; 

type Props = {
    params: {
        id: string;
    },
    searchParams: {
        genre: string;
    }
}

function GenrePage({ params: {id}, searchParams : {genre} }  : Props) {
    return(
        <div>
            <p>Genre Page</p>
        </div>
    )
}

export default GenrePage; 
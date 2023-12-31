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
            <p className='bg-yellow-300'>Genre Page</p>
        </div>
    )
}

export default GenrePage; 
import React from 'react'; 

type Props = {
    params: {
        term: string; 
    }
}

function SearchPage({ params : {term} } : Props ) {
    return(
        <div>
            <p>search page</p>
        </div>
    )
}

export default SearchPage;
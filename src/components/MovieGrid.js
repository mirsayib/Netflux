import * as React from 'react';

export default function MovieGrid({movies}) {
    return (
        <div className='container1'>
            <div className='media-cards'>
                {movies.map(item => (
                    <div className='media-card' key={item.id}>
                        <h2 className='media-card-title'>{item.title ? item.title : item.name}</h2>
                        <img src={'https://image.tmdb.org/t/p/original/' + item.poster_path} alt="" />
                        <p className='media-card-desc'>
                            {item.overview}
                        </p>
                        <div className='button'>
                            READ MORE
                        </div>

                    </div>
                ))}
                </div>
        </div>
    );
}

import * as React from 'react';

export default function MovieGrid({ data }) {

    return (
        <div className='container1'>
            <div className='media-cards'>
                {data.map(item => {
                    var img_path = ''
                    if(item.media_type === 'person'){
                        img_path = item.profile_path
                    }else{
                        img_path = item.poster_path
                    }
                    return (
                        <div className='media-card' key={item.id}>
                            <h2 className='media-card-title'>{item.title ? item.title : item.name}</h2>
                            <img src={'https://image.tmdb.org/t/p/original/' + img_path} alt="" />
                            <p className='media-card-desc'>
                                {item.overview ? item.overview : "Sorry! No Media Description Available...."}
                            </p>
                            <div className='button'>
                                READ MORE
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}

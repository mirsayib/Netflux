import * as React from 'react';

export default function PeopleGrid({ people }) {

    return (
        <div className='container1'>
            <div className="media-cards">
                {people.map(person => (
                    <div className='media-card' key={person.id}>
                        <h2 className='media-card-title'>{person.name}</h2>
                        <img src={'https://image.tmdb.org/t/p/original/' + person.profile_path} alt="" />
                        <div className='button'>
                            READ MORE
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

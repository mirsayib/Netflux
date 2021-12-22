import PeopleGrid from './PeopleGrid'
import SearchResults from './SearchResults'

const SearchPage = ({data, query, setQuery, setSuburl}) => {
    const imaged = data.filter(item => (item.poster_path || item.profile_path))
    const movies = imaged.filter(item => item.media_type === 'movie')
    const tv = imaged.filter(item => item.media_type === 'tv')
    const people = imaged.filter(item => item.media_type === 'person')

    return ( 
        <div className="Search__container">
            <p className="search__title"> Search For Anything Really</p>

            <input
                type="text" 
                className="search__input"
                value={query}
                onChange={e => {
                    if(e.target.value){
                        setSuburl(`search/multi?query=${e.target.value}&page=1&include_adult=true&`)
                    }else{
                        setSuburl(`search/multi?query=leo&page=1&include_adult=true&`)
                    } 
                    setQuery(e.target.value)
                    
                }}
            />

            <div className="search_results">
                
                {movies.length>0 && <div className="result_cat">
                    <div className='top-tag'>
                        <h1>Movies:</h1>
                    </div>
                    <hr />
                    <SearchResults data={movies}/>
                </div>}
                
                {tv.length>0 && <div className="result_cat">
                    <div className='top-tag'>
                        <h1>TV Shows:</h1>
                    </div>
                    <hr />
                    <SearchResults data={tv} />
                </div>}

                {people.length>0 && <div className="result_cat">
                    <div className='top-tag'>
                        <h1>People:</h1>
                    </div>
                    <hr />
                    <PeopleGrid people={people} />
                </div>}

            </div>
        </div> 
    );
}
 
export default SearchPage;
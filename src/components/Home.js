import MovieGrid from "./MovieGrid";
import GenreGrid from "./GenreGrid";
import SearchPage from "./SearchPage";
import { useState } from "react";
import PeopleGrid from "./PeopleGrid";
import Pagination from "./PageSelect";


const Home = ({data,  setSuburl, current, page, setPage}) => {
  const [query, setQuery] = useState('');
  
  console.log(data.data);
  return (
    <div className="homepage">
        {current === 'search' && !data.isPending && !data.error  && <SearchPage data = {data.data.results} query={query} setQuery={setQuery} setSuburl={setSuburl}/>}
        {data.error && <h1>{data.error}</h1>}
        {current === 'trending' && !data.isPending && !data.error && <MovieGrid movies={data.data.results}/>}
        {current === 'genres' && !data.isPending && !data.error && <GenreGrid genres={data.data.genres}/>}
        {current === 'movies' && !data.isPending && !data.error && <MovieGrid movies={data.data.results}/>}
        {current === 'tv' && !data.isPending && !data.error && <MovieGrid movies={data.data.results}/>}
        {current === 'people' && !data.isPending && !data.error && <PeopleGrid people={data.data.results}/>}
        
        {/* COMMENT A: When we click on a row of sidebar. data is fetched. say clicking on home fetches movies. now we click 
          on genres but since pending, error were set to success by previous fetch, genre will be shown even before fetch is
          complete but data passed is of previous fetch.
          to fix this, we setPending true every time a tab is clicked so it wont be shown
          before useFetch sets it false on completing the fetch
        */}

        {current !== 'genres' && !data.isPending && !data.error && <Pagination total_pages={data.data.total_pages} setPage={setPage} page={page}/>}

    </div>
  );
};

export default Home;

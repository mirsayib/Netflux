import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import MediaDetails from './components/MediaDetails';
import { useState } from 'react';
import useFetch from './hooks/useFetch';

const apikey = '005a6b28b82d4280e3d972f83d4b6d52';

function App() {
  const [suburl, setSuburl] = useState('trending/all/week?')
  const [current, setCurrent] = useState('movies')
  const [page, setPage] = useState(1)

  const [flag, setFlag] = useState(true)
  // when we click on home, pending is set true for reason given in comment A. After fetch is complete 
  // pending is set false so home can show. But when we click on it again, there is no url change
  // so after clicking when pending is set true. Useeffect cant change it back to false so homw wont show
  // so we use flag variable to change its state on each click and thus call use effect 

  const data = useFetch(`https://api.themoviedb.org/3/${suburl}api_key=${apikey}&page=${page}&language=en-US`, flag);

  return (
    <div className="App">
        <div className='sidebar-placeholder'></div>
        <Sidebar setSuburl={setSuburl} setCurrent={setCurrent} flag={flag} setFlag={setFlag} setIsPending={data.setIsPending} setPage={setPage}/>
        <div className='Content'>
          <Home data = {data} setSuburl={setSuburl} current={current} page={page} setPage={setPage}/>
        </div>
    </div>
  );
}

export default App;

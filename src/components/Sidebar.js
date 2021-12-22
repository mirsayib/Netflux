import React, { useState } from "react";
import '../App.css';
import { SidebarData } from "./SidebarData";
import logo from '../images/logo2.jpg'



const Sidebar = ({setSuburl, setCurrent, flag, setFlag, setIsPending, setPage}) => {
    const [row, setRow] = useState('Home')  
    const handleClickGenre = (event) => {
        setSuburl('genre/movie/list?')
        setCurrent('genres')
        setIsPending(true)  
        setFlag(!flag)
        setPage(1)    

    }

    const handleClickHome = (title) => {
        setCurrent('trending')
        setSuburl('trending/all/week?')
        setIsPending(true)
        setFlag(!flag)
        setPage(1)
    }
    const handleClickSearch = (title) => {
        setCurrent('search')
        setSuburl('search/multi?query=leo&include_adult=true&')
        setIsPending(true)
        setFlag(!flag)
        setPage(1)
    }
    const handleClickMov = (title) => {
        setCurrent('movies')
        setSuburl('trending/movie/week?')
        setIsPending(true)
        setFlag(!flag)
        setPage(1)
    }
    const handleClickTv = (title) => {
        setCurrent('tv')
        setSuburl('trending/tv/week?')
        setIsPending(true)
        setFlag(!flag)
        setPage(1)
    }
    const handleClickPeople = (title) => {
        setCurrent('people')
        setSuburl('trending/person/week?')
        setIsPending(true)
        setFlag(!flag)
        setPage(1)
    }

    const functionHash = {
        'Home' : handleClickHome,
        'Search': handleClickSearch,
        'Movies': handleClickMov,
        'TV Shows': handleClickTv,
        'People': handleClickPeople,
        'Genres': handleClickGenre
    }

    return ( <div className="Sidebar">
        <ul className="SidebarList">
            <li>
                <div className="sidebar-logo">
                    <img src={logo} alt="" />
                </div>
            </li>
            {SidebarData.map((val, key) => (
                <li key={key} 
                    className="row"
                    id={val.title === row ? 'active' : ''}
                    >
                        {" "}
                    <div id="icon" onClick={() => {
                        functionHash[val.title](val.title)
                        setRow(val.title)
                    }}>{val.icon}</div>
                        <div id="title" onClick={()=>{
                            functionHash[val.title](val.title)
                            setRow(val.title)
                            }}>
                            {val.title}
                        </div>
                </li>
            ))}
        </ul>
        
    </div> );
}
 
export default Sidebar;
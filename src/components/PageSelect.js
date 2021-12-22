const Pagination = ({total_pages, setPage, page}) => {
    

    return ( <div className="centered-pg">
        {total_pages >= 6 && <button disabled className="elipses">Current Page: {page}</button>}
        <div className="pagination">
            <button onClick={() => { setPage(page > 1 ? page - 1 : total_pages) }}>&laquo;</button>
            {total_pages >= 1 && <button id={page === 1 ? "active" : ""} onClick={(e) => { setPage(1) }}>1</button>}
            {total_pages >= 2 && <button id={page === 2 ? "active" : ""} onClick={(e) => { setPage(2) }}>2</button>}
            {total_pages >= 3 && <button id={page === 3 ? "active" : ""} onClick={(e) => { setPage(3) }}>3</button>}
            {total_pages >= 4 && <button id={page === 4 ? "active" : ""} onClick={(e) => { setPage(4) }}>4</button>}
            {total_pages >= 5 && <button id={page === 5 ? "active" : ""} onClick={(e) => { setPage(5) }}>5</button>}
            <button onClick={() => { setPage(page < total_pages ? page + 1 : 1) }}>&raquo;</button> 
        </div>
    </div> );
}
 
export default Pagination;
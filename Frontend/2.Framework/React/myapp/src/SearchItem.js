const SearchItem = ({search,setSearch})=>{

    return(
        <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
            id='search'
            type="text"
            value={search}
            role="searchbox"
            placeholder="Search"
            onChange={(e)=>setSearch(e.target.value)}
            ></input>
        </form>
    )
}

export default SearchItem;

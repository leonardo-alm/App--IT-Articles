import React, { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = {
      title: searchInputRef.current!.value
    }
    const queryString = createSearchParams(query);

    navigate({
      pathname: '/articles',
      search: `?${queryString}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} placeholder="search article"/>
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;

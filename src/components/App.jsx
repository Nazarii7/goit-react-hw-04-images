import { useState, useCallback } from 'react';

import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setPictures([]);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const updatePictures = useCallback(pictures => {
    setPictures(prevState => [...prevState, ...pictures]);
  }, []);
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery
        query={query}
        page={page}
        pictures={pictures}
        onClick={loadMore}
        updatePictures={updatePictures}
      />
      <ToastContainer />
    </>
  );
}

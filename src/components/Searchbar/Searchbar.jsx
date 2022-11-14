import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { TiZoomOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleNameChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.warning('Будь ласка, напишіть Ваш запит', {
        icon: '⏳',
      });
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button className={css.Button} type="submit">
          <TiZoomOutline size={26} />
        </button>

        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleNameChange}
          value={query}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;

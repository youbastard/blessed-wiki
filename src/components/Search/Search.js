import { h } from 'preact';

import Icon from 'assets/icons/search.svg';

const Search = () => (
  <div>
    <img src={Icon} />
    <input
      class="pa2 input-reset ba bg-transparent w-100 measure"
      type="search"
      name="search-tags"
      aria-label="search input"
    />
  </div>
);

export default Search;

import { h } from 'preact';

const Search = () => (
  <div class="relative">
    <input
      class="pa2 input-reset ba bg-transparent w-100 br-pill sans-serif"
      type="search"
      name="search-tags"
      placeholder="search"
      aria-label="search input"
    />
  </div>
);

export default Search;

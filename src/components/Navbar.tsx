import SearchInput from "./searchInput/SearchInput";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <h1>Movierama</h1>
      <SearchInput onSearch={onSearch} />
    </>
  );
};

export default Navbar;

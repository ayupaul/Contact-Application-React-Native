import {Searchbar} from 'react-native-paper';

export const Search = ({keyword, setKeyword}) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setKeyword}
      value={keyword}></Searchbar>
  );
};

import {TouchableOpacity, Text, Image, FlatList, View} from 'react-native';
import {Message} from '../common/Message';
import {useEffect, useState} from 'react';
import {Search} from '../common/SearchComponent/Search';
import colors from '../../assets/colors';
import {useFocusEffect} from '@react-navigation/native';
import {ItemComponent} from './ItemComponent';
let myNavigation;
const renderItem = ({item}) => {
  return (
    <ItemComponent
      name={item.name}
      image={item.image}
      item={item}
      myNavigation={myNavigation}
    />
  );
};

const handleEmpty = () => {
  return <Message />;
};
export const Contacts = ({contactData, navigation, route}) => {
  const isFavorite = route && route.params ? route.params.isFavorite : false;
  myNavigation = navigation;
  const [keyword, setKeyword] = useState('');
  const filteredData = contactData.filter(item => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
  const contactOrderedList = filteredData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  const favoriteData = contactOrderedList.filter(item => {
    return item.isFavorite === 1;
  });
  const header = () => {
    return <Search keyword={keyword} setKeyword={setKeyword}></Search>;
  };
  useFocusEffect(() => {
    console.log(isFavorite);
    if (isFavorite === true) {
      navigation.setOptions({
        headerTitle: 'Favourites',
      });
    } else {
      navigation.setOptions({
        headerTitle: 'Home',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  return (
    <View style={{paddingVertical: 20}}>
      <FlatList
        ListHeaderComponent={() => header(contactData)}
        ItemSeparatorComponent={() => (
          <View style={{height: 0.5, backgroundColor: colors.grey}}></View>
        )}
        ListEmptyComponent={handleEmpty}
        data={isFavorite === true ? favoriteData : contactOrderedList}
        renderItem={renderItem}
        ListFooterComponent={<View style={{height: 150}}></View>}></FlatList>
    </View>
  );
};

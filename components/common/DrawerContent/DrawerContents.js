import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../container/container';
import styles from './styles';
import Icon from '../Icons';
import colors from '../../../assets/colors';

export const DrawerContents = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Container style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <View style={styles.itemContainer}>
            <Icon
              type="entypo"
              name="home"
              size={21}
              color={colors.primary}></Icon>
            <Text style={[styles.text]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', {isFavorite: true});
          }}>
          <View style={styles.itemContainer}>
            <Icon
              type="feather"
              name="heart"
              size={21}
              color={colors.danger}></Icon>
            <Text style={[styles.text, styles.favoriteText]}>Favourites</Text>
          </View>
        </TouchableOpacity>
      </Container>
    </View>
  );
};

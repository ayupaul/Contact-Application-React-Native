import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import colors from '../../assets/colors';
import Icon from '../../components/common/Icons';

export const rightSwipeAction = ({myNavigation, item}) => {
  return (
    <View style={styles.rightSwipeContainer}>
      <TouchableOpacity
        style={styles.rightSwipeButton}
        onPress={() => myNavigation.navigate('Create Contact', {item: item})}>
        <Icon
          type="antDesign"
          name="edit"
          size={25}
          color={colors.white}></Icon>
      </TouchableOpacity>
    </View>
  );
};

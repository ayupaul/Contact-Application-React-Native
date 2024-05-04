import {Image, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import Icon from '../common/Icons';
import colors from '../../assets/colors';
import {Swipeable} from 'react-native-gesture-handler';
import {rightSwipeAction} from '../../actions/SwipeActions/rightSwipeAction';

export const ItemComponent = ({name, image, item, myNavigation}) => {
  return (
    <Swipeable
      renderRightActions={() => rightSwipeAction({myNavigation, item})}>
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <Image
            source={{uri: image}}
            style={{width: 45, height: 45, borderRadius: 100}}></Image>
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{name}</Text>
            </View>
          </View>
        </View>
        <Icon name="right" type="ant" size={18} color={colors.grey} />
      </View>
    </Swipeable>
  );
};

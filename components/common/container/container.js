import {ScrollView, View} from 'react-native';
import styles from './styles';
const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </ScrollView>
  );
};
export default Container;

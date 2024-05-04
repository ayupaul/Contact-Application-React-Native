import {TextInput, View} from 'react-native';
import colors from '../../../assets/colors';
import {useState} from 'react';
// import styles from '../container/styles';
import styles from './styles';
import {Text} from 'react-native';
export const Input = ({placeholder, value, onChangeText, label, style}) => {
  const [focused, setFocused] = useState(false);
  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {borderColor: getBorderColor()}]}>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

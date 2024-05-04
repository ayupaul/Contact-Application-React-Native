import {DrawerActions, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../../screens/Contacts/Home';
import Icon from '../common/Icons';
import {CreateContact} from '../../screens/CreateContact';
import {TouchableOpacity} from 'react-native';
export const StackComponent = () => {
  const navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Icon
              type="feather"
              name="menu"
              size={21}
              onPress={() =>
                navigation.dispatch(DrawerActions.openDrawer())
              }></Icon>
          ),
        })}
      />
      <Stack.Screen
        name="Create Contact"
        component={CreateContact}
        options={() => ({
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>
              <Icon type="ant" name="heart" size={21}></Icon>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

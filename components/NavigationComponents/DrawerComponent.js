import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackComponent} from './StackComponent';
import {DrawerContents} from '../common/DrawerContent/DrawerContents';
export const DrawerComponent = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={DrawerContents}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="My Home" component={StackComponent} />
    </Drawer.Navigator>
  );
};

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {DrawerComponent} from './components/NavigationComponents/DrawerComponent';


const App = () => {
  return (
    <NavigationContainer>
      <DrawerComponent />
    </NavigationContainer>
  );
};

export default App;

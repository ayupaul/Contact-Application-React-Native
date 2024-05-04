import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({
  name: 'myContactApp.db',
  location: 'default',
});

export default db;

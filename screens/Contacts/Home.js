import {useCallback, useEffect, useState} from 'react';
import createTable from '../../utils/createTable';
import {enablePromise} from 'react-native-sqlite-storage';
import {fetchContactData} from '../../actions/fetchContactData';
import {Contacts} from '../../components/ContactComponent/contacts';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/Icons';
import styles from './ContactStyle';
import {useFocusEffect} from '@react-navigation/native';
export const Home = ({navigation, route}) => {
  const [contactData, setContactData] = useState([]);

  enablePromise(true);
  const fetchContactDetails = async () => {
    try {
      const data = await fetchContactData();
      setContactData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const createMyTable = async () => {
      try {
        await createTable();
      } catch (err) {
        console.log(err);
      }
    };
    createMyTable();
    fetchContactDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //useFocusEffect is used here such that after performing any operation component gets render and update data gets fetched and useCallback is used such that there is only one single function reference it is used for performance optimization
  useFocusEffect(
    useCallback(() => {
      fetchContactDetails();
    }, []),
  );
  return (
    <>
      <Contacts
        contactData={contactData}
        navigation={navigation}
        route={route}></Contacts>
      <TouchableOpacity
        style={styles.floatingActionButton}
        onPress={() => {
          navigation.navigate('Create Contact', {});
        }}>
        <Icon name="plus" size={21} color="white" />
      </TouchableOpacity>
    </>
  );
};

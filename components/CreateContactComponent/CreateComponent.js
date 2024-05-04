import {Input} from '../common/Inputs/Input';
import {View, Image, Text, TouchableOpacity, Button} from 'react-native';
import styles from './styles';
import Container from '../common/container/container';
import {useEffect, useState} from 'react';
import {validateInput} from '../../actions/validateInput';
import {insertContacts} from '../../utils/insertContacts';
import {updateContacts} from '../../utils/updateContacts';
import {deleteContact} from '../../utils/deleteContact';
import {openImagePicker} from '../../actions/openImagePicker';
import Icon from '../common/Icons';
import colors from '../../assets/colors';
import {useFocusEffect} from '@react-navigation/native';
import {Constant} from '../common/Constant';
export const CreateContactComponent = ({navigation, route}) => {
  const initialContactDetail = {
    name: '',
    mobileNo: '',
    landlineNo: '',
    image: Constant.Image,
  };
  const {item} = route.params;
  const [inputErr, setInputErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const contactData = item ? item : initialContactDetail;
  const [contactDetail, setContactDetail] = useState(contactData);

  //handles contact submission
  const submitHandler = () => {
    setInputErr(validateInput(contactDetail));
    setIsSubmit(true);
  };

  //handles deletion
  const deleteHandler = async () => {
    try {
      await deleteContact(item.id);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  //handles text change operation
  const onChangeText = (text, fieldName) => {
    setContactDetail({...contactDetail, [fieldName]: text});
  };

  //handles toggling
  const toggleFavorite = async () => {
    const newFavoriteStatus = !contactDetail.isFavorite; // Toggle the favorite status
    // Update the local state
    setContactDetail({...contactDetail, isFavorite: newFavoriteStatus});

    // Update the database
    try {
      await updateContacts({...contactDetail, isFavorite: newFavoriteStatus});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const submitForm = async () => {
      if (Object.keys(inputErr).length === 0 && isSubmit === true) {
        setIsSubmit(false);
        if (item) {
          try {
            await updateContacts(contactDetail);
          } catch (err) {
            console.log(err);
          }
        } else {
          try {
            await insertContacts(contactDetail);
          } catch (err) {
            console.log(err);
          }
        }
        navigation.navigate('Home');
      }
    };

    submitForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputErr]);
  useEffect(() => {
    const toggleFavoriteIcon = () => {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={toggleFavorite}>
            <Icon
              type="ant"
              name="heart"
              size={21}
              color={
                contactDetail.isFavorite ? colors.danger : colors.grey
              }></Icon>
          </TouchableOpacity>
        ),
      });
    };

    toggleFavoriteIcon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, contactDetail]);
  useFocusEffect(() => {
    if (item) {
      navigation.setOptions({
        headerTitle: 'Update Contact',
      });
    } else {
      navigation.setOptions({
        headerTitle: 'Add Contact',
      });
    }
  });
  return (
    <View style={styles.container}>
      <Container>
        <Image
          source={{uri: contactDetail.image}}
          width={200}
          height={200}
          style={styles.imageView}
        />

        <TouchableOpacity>
          <Text
            style={styles.chooseText}
            onPress={() => openImagePicker(contactDetail, setContactDetail)}>
            Choose image
          </Text>
        </TouchableOpacity>

        <Input
          placeholder="Enter Name"
          value={contactDetail.name}
          contactDetail={contactDetail}
          onChangeText={text => onChangeText(text, 'name')}
          label="Name"
        />
        <Text style={styles.error}>{inputErr.name}</Text>

        <Input
          placeholder="Enter Mobile Number"
          value={contactDetail.mobileNo}
          label="Mobile Number"
          contactDetail={contactDetail}
          onChangeText={text => onChangeText(text, 'mobileNo')}
        />
        <Text style={styles.error}>{inputErr.mobileNo}</Text>

        <Input
          placeholder="Enter Landline Number"
          value={contactDetail.landlineNo}
          label="Landline Number"
          contactDetail={contactDetail}
          onChangeText={text => onChangeText(text, 'landlineNo')}
        />
        <Text style={styles.error}>{inputErr.landlineNo}</Text>

        <View style={{marginBottom: 10}}>
          <Button title="Submit" onPress={submitHandler} />
          {item && (
            <View style={{marginTop: 10}}>
              <Button title="Delete" onPress={deleteHandler} />
            </View>
          )}
        </View>
      </Container>
    </View>
  );
};

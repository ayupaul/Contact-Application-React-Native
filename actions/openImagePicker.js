import {launchImageLibrary} from 'react-native-image-picker';

export const openImagePicker = (contactDetail, setContactDetail) => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 1000,
    maxWidth: 1000,
  };
  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User canceled image picker');
    } else if (response.error) {
      console.log('Image Picker error', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setContactDetail({...contactDetail, image: imageUri});
    }
  });
};



import {CreateContactComponent} from '../../components/CreateContactComponent/CreateComponent';

export const CreateContact = ({route, navigation}) => {
  return (
    <CreateContactComponent
      navigation={navigation}
      route={route}></CreateContactComponent>
  );
};

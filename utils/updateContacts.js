import db from './db';
export const updateContacts = async data => {
  let query =
    'UPDATE contactsApp SET name=?, mobileNo=?, landlineNo=?, image=?,isFavorite=? WHERE id=?';
  let params = [
    data.name,
    data.mobileNo,
    data.landlineNo,
    data.image,
    data.isFavorite,
    data.id,
  ];

  try {
    await db.executeSql(query, params);
    console.log('Hiii');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

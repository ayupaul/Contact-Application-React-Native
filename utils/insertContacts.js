import db from './db';
export const insertContacts = async data => {
  let query =
    'INSERT INTO contactsApp (name,mobileNo,landlineNo,image,isFavorite) VALUES (?, ?,?,?,?)';
  let params = [
    data.name,
    data.mobileNo,
    data.landlineNo,
    data.image,
    data.isFavorite,
  ];

  try {
    await db.executeSql(query, params);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

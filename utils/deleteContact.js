import db from './db';

export const deleteContact = async id => {
  const query = 'DELETE FROM contactsApp WHERE id=?';
  let params = [id];
  try {
    await db.executeSql(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

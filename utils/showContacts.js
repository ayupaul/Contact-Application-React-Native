import db from './db';
export const showContacts = async setContacts => {
  let query = 'SELECT * FROM contactsApp';
  try {
    const results = await db.executeSql(query);
    const contactData = [];

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        contactData.push(result.rows.item(index));
      }
    });
    return contactData;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

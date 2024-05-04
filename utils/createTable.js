import db from './db';

const createTable = async () => {
  const query_create_contacts = `CREATE TABLE IF NOT EXISTS contactsApp(
        id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,
        mobileNo TEXT NOT NULL UNIQUE, landlineNo TEXT NOT NULL,image TEXT, isFavorite BOOLEAN 
    );`;
  try {
    await db.executeSql(query_create_contacts);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default createTable;

import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
// import path from 'node:path';


export const countContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const dbContacts = JSON.parse(data);
        const dbContactsLengs = dbContacts.length;

    console.log('length contacts in db.json: ', dbContactsLengs);
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());

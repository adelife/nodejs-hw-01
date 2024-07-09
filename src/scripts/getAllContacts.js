import { PATH_DB } from '../constants/contacts.js';
import * as  fs from "node:fs/promises";

export const getAllContacts = async () => {
    try {
      const dataContacts = await fs.readFile(PATH_DB, 'utf-8');
      const dbContacts = JSON.parse(dataContacts);
      return dbContacts;
    } catch (error) {
      console.error(error);
    }
};


console.log(await getAllContacts());

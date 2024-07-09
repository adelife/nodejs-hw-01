import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try{
        await fs.writeFile(PATH_DB, '[]', 'utf-8');
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let newData = JSON.parse(data);
        if (newData.length === 0) {
          console.log('All contacts has been deleted');
        } else {
          console.log('The contacts was not deleted');
        }      
    } catch (error) {
        console.error(error);
      }
    };


removeAllContacts();

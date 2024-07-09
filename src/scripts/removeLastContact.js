import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
    let data = await fs.readFile(PATH_DB, 'utf-8');
    let dbContacts = JSON.parse(data);
    if(dbContacts.length > 0) {
        await dbContacts.pop();
    }else {
        console.log("array is empty"); 
    }
    await fs.writeFile(PATH_DB, JSON.stringify(dbContacts, undefined, 4), 'utf-8');  
    console.log(' array contacts length :', dbContacts.length);  
}catch (error) {
    console.error( error);
};
};
removeLastContact();

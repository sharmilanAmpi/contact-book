import {v4 as uuid} from "uuid"; 

const contacts = [
  {
    id: 'DF34WF',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '10/30/1820',
    phone: '+94 773066934',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: 'KHJ68H',
    first_name: 'John',
    last_name: 'Corner',
    date_of_birth: '08/10/1910',
    phone: '+94 773425775',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: 'YA97KA',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '03/05/1850',
    phone: '+94 773066934',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: '657HBK',
    first_name: 'John',
    last_name: 'Corner',
    date_of_birth: '02/03/1987',
    phone: '+94 773425775',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202'
  },
  {
    id: '56TGJH',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '07/04/1897',
    phone: '+94 773066934',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202'
  },
];

export function fetchContacts() {
  return contacts;
};

export function fetchSelectedProfile(contactId) {
  return contacts.find(({id}) => id === contactId);
}

export function createContact(contact) {
  // TODO better to validate the form data
  const newContact = {...contact, id: uuid()};
  contacts.push(newContact);
  return newContact;
}

export function updateContact(id, contact) {
  contacts.map(c => c.id === id ? contact : c);
  return contact;
}
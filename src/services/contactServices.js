import {v4 as uuid} from "uuid"; 

// TODO Dummy date, need to remove and move to browser storage
let contacts = [{
  id: 'DF34WF-KHJ68H-DF34WF-DF34WF',
  first_name: "Enoch",
  last_name: "Dane",
  email: "edane0@chicagotribune.com",
  date_of_birth: "11/03/1990",
  phone: '+94 862533522',
  address: "00231 Eagan Parkway",
}, {
  id: 'KHJ68H-YA97KA-YA97KA-YA97KA',
  first_name: "Neils",
  last_name: "Caffin",
  email: "ncaffin1@sourceforge.net",
  date_of_birth: "10/06/1987",
  phone: '+94 773425775',
  address: "48239 Toban Street"
}, {
  id: 'KHJ68H-KHJ68H-YA97KA-YA97KA',
  first_name: "Evin",
  last_name: "Lille",
  email: "elille2@biblegateway.com",
  date_of_birth: "11/01/1989",
  phone: '+94 4734325775',
  address: "7163 Hayes Drive"
}, {
  id: '657HBK-657HBK-657HBK-657HBK',
  first_name: "Hodge",
  last_name: "Fitzroy",
  email: "hfitzroy3@exblog.jp",
  date_of_birth: "07/07/1989",
  phone: '+94 773425775',
  address: "96669 Walton Way"
}, {
  id: '56TGJH-56TGJH-56TGJH-56TGJH',
  first_name: "Humfrid",
  last_name: "Aspinell",
  email: "haspinell4@prweb.com",
  date_of_birth: "09/04/1986",
  phone: '+94 473026951',
  address: "1721 Pankratz Point"
}, {
  id: '56TGJH-56TGJH-56TGJH-56TGJH',
  first_name: "Humfrid",
  last_name: "Aspinell",
  email: "haspinell4@prweb.com",
  date_of_birth: "09/04/1986",
  phone: '+94 473026951',
  address: "1721 Pankratz Point"
}];

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
  contacts = contacts.map(c => c.id === id ? {...contact, id} : c);
  return contact;
}

export function getContact(contactId) {
  return contacts.find(({id}) => id === contactId);
}
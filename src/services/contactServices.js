const contacts = [
  {
    id: 'DF34WF',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: 'KHJ68H',
    first_name: 'John',
    last_name: 'Corner',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: 'YA97KA',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202',
  },
  {
    id: '657HBK',
    first_name: 'John',
    last_name: 'Corner',
    date_of_birth: '24th October 1978',
    phone: '+94 77 3425 775',
    email: 'arm_hadb@gmail.com',
    address: '1424  Harron Drive, Baltimore, Maryland, 21202'
  },
  {
    id: '56TGJH',
    first_name: 'Mike',
    last_name: 'Bostan',
    date_of_birth: '24th November 1989',
    phone: '+94 77 3066 934',
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
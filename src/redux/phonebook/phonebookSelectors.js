export const getContacts = store => store.phonebook.contacts;

export const getFilter = store => store.phonebook.filter;

export const getFiltredContacts = store => {
  return getContacts(store).filter(contact =>
    contact.name.toLowerCase().includes(getFilter(store).toLowerCase()),
  );
};

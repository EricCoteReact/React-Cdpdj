import React, { useState } from 'react';
import ContactApi from './contact-api/ContactApi';
import ContactTable from './ContactTable';
import { Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Contacts() {
  /** @type {[Contacts, Function]} ContactState - state hook of contacts */
  const [contacts, setContacts] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    refreshData();
    // if (ContactApi.subscribeChangeNotification) {
    //   ContactApi.subscribeChangeNotification(refreshData);
    // }

    // return () => {
    //   ContactApi.unsubscribeChangeNotification();
    // };
  }, []);

  // This is the old way of calling data
  // eslint-disable-next-line
  function refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));
  }

  async function refreshData() {
    try {
      setIsLoading(true);
      let data = await ContactApi.getAllContacts();
      setContacts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteContact(id) {
    await ContactApi.deleteContact(id);
    refreshData();
  }

  return (
    <>
      <h1>Contacts (using Hooks)</h1>
      {isLoading && <Spinner color='primary' />}
      <ContactTable contacts={contacts} onDeleteContact={deleteContact} />
      <Link to='/data/details'>
        <Button color='primary'>Create Contact</Button>
      </Link>
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }

import css from 'components/App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <div className={css.contactsContainer}>
      <div>
        <h1 className={css.contactsMainTitle}>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2 className={css.contactsTitle}>Your contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;

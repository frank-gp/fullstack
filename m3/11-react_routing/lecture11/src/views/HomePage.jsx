import ContactList from "../components/ContactList";

function HomePage({contacts}) {
  return (
    <div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default HomePage;

import { Link } from "react-router-dom";
import Contact from "./Contact";

function ContactList({ contacts }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Link key={contact.id} to={`/detail/${contact.id}`} >
          <Contact key={contact.id} contact={contact} />
        </Link>
      ))}
    </div>
  );
}

export default ContactList;

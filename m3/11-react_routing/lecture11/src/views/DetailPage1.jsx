import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  // const param = useParams();
  // console.log(param)

  const [contact, setContact] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data));

    return () => {
      setContact({});
    };
  }, [id]);

  console.log(contact);

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.website}</p>
      
    </div>
  );
}

export default DetailPage;

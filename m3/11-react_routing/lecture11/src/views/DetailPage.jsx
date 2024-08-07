import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContact(data);
        console.log(data); // Mueve el console.log aquí dentro
      })
      .catch((error) => console.error("Error:", error));

    // Cleanup function para limpiar el estado en el desmontaje del componente
    return () => {
      setContact({});
    };
  }, [id]);

  // Verificar si el objeto contact está vacío antes de acceder a sus propiedades
  const { name, email, phone, website } = contact;

  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
}

export default DetailPage;

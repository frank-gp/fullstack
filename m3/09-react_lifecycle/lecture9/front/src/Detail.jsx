import { useEffect, useState } from "react";
import "./Detail.css";

const Detail = ({ id, handleOnClose }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data[0]));

  }, [id]);

  return (
    <div className="modalDetail">
      {!character ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{character?.name}</h2>
          <img style={{ borderRadius: "100%" }} src={character?.image} alt={character?.name} />
          <p>{character?.house}</p>
          <p>{character?.dateOfBirth}</p>
          <p>{character?.actor}</p>
          <p>{character?.alive}</p>
        </>
      )}

      <button className="buttonDetail" onClick={handleOnClose}>
        Close
      </button>
    </div>
  );
};

export default Detail;

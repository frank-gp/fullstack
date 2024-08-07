import { useState } from "react";

const User = ({ handleUserButtonClick }) => {
  const [updateData, setUpdateData] = useState("Editando");

  //handle = maneja el evento
  const handleUpdate = () => {
    setUpdateData("Actualizando");
    handleUserButtonClick("Se actualizo el perfil");
  };

  return (
    <div>
      <button onClick={handleUpdate}>Actualizando perfil</button>
      <p>Estado del perfil: {updateData}</p>
    </div>
  );
};

// const User1 = () => {
//   return (
//     <div>
//       <h1>User</h1>
//     </div>
//   );
// };

export default User;

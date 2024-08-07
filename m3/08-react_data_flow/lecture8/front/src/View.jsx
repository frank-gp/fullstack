import  User  from "./User.jsx";

const View = () => {
  const handleUserButtonClick = (info) => {
      console.log(info)
      // setUpdateData('Actualizando')
  }

  return (
    <div>
      {/* <User1 /> */}
      <User handleUserButtonClick={handleUserButtonClick}/>
    </div>
  );
};

export default View;

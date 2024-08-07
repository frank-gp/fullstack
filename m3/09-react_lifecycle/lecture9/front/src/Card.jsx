const Card = ({ character: props, handleOnClick }) => {
    const { name, house, id } = props
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <h3>{house}</h3>
            <button onClick={() => handleOnClick(id)}>Ver detalle</button>
        </div>
    );
}

export default Card
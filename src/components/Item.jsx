import { useNavigate } from 'react-router-dom';

const Item = ({ id, name, price, img, category }) => {
    const navigate = useNavigate();

    const handleDetailClick = () => {
        navigate(`/item/${id}`);
    };

    return (
        <article className="CardItem" style={cardStyle}>
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" style={{ width: '150px' }} />
            </picture>
            <section>
                <p className="Info">Precio: ${price}</p>
                <p className="Info">Categoría: {category}</p>
            </section>
            <footer className="ItemFooter">
                <button onClick={handleDetailClick} className="ButtonDetail" style={buttonStyle}>
                    VER DETALLES
                </button>
            </footer>
        </article>
    );
};

const cardStyle = {
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
    width: '280px', 
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    width: '100%'
};

export default Item;
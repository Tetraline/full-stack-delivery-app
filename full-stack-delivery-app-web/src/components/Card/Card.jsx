import "./Card.scss";
const Card = ({ seller }) => {
  return (
    <div key={seller.name} className="card">
      <div className="card__seller-info">
        <h2>{seller.name}</h2>
        <p>{seller.description}</p>
      </div>
      <div className="card__distance-time-container">
        <p>{seller.distance}</p>
        <p>{seller.time}</p>
      </div>
    </div>
  );
};

export default Card;

import "./Card.scss";
const Card = ({ seller }) => {
  return (
    <div key={seller.id} className="card">
      <h2>{seller.name}</h2>
      <h3>{seller.category}</h3>
      <h4>{seller.distance}</h4>
      <h4>{seller.time}</h4>
    </div>
  );
};

export default Card;

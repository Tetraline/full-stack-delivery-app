import Card from "../../components/Card/Card";

const SellerList = ({ sellers }) => {
  const sellersJSX = sellers.map((seller) => (
    <Card key={seller.name} seller={seller} />
  ));

  return <>{sellersJSX}</>;
};

export default SellerList;

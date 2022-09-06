import Card from "../../components/Card/Card";

const SellerList = ({ sellers }) => {
  const sellersJSX = sellers.map((seller) => (
    <Card key={seller.id} seller={seller} />
  ));

  return <>{sellersJSX}</>;
};

export default SellerList;

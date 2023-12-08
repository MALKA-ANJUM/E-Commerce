import './Relatedproduct.css';
import data_products from "../Assets/data"
import Item from '../Item/Item';

const Relatedproducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <div className="relatedproducts-item">
        {data_products.map((item, i) => {
            return <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default Relatedproducts

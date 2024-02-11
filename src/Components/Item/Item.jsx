import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Item = (props) => {
  return (
    <div className='item col-12 col-md-6 col-lg-3 text-center text-md-start my-3'>
      <div>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} className='img-fluid'/></Link>
        <p>{props.name}</p>
        <div className="item-prices justify-content-center justify-content-md-start">
          <div className="item-price-new">
              ${props.new_price}
          </div>
          <div className="item-price-old">
              ${props.old_price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

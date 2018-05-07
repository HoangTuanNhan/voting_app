import React, {Component} from 'react';
import Product from '../components/Product.js';
class ProductList extends Component {
   render() {
     console.log(Data)
     return (
       <div className='ui items wrapper'>
           <Product/>
       </div>

     )
   }
 }
export default ProductList;

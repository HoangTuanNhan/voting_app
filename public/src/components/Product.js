import React, {Component} from 'react';

class Product extends Component {
    render() {
      return (
          <div className="item">
            <div className="image">
              <img src="/images/image-aqua.png"/>
            </div>
            <div className="content">
              <a className="header">
                <i className='large chevron circle up icon' />
                55
              </a>
              <div className="description">
                <p>On-demand sand castle construction expertise.</p>
              </div>
              <div className="extra">
              <span>Submitted by:</span>
                <img
                className='ui avatar image'
                src="/images/daniel.jpg"
                />
              </div>
            </div>
          </div>
      )
    }
}
export default Product;

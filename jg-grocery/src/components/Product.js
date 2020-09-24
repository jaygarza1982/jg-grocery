import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="col-md-6 col-lg-3 Product">
                <div className="ProductCard">
                    <div className="ProductCard__Name">{this.props.name}</div>
                    <div>{this.props.price}</div>
                    <div>{this.props.size}</div>
                    <button className="ProductCard__CartBtn btn btn-primary">Add to cart</button>
                </div>
            </div> 
        );
    }
}

export default Product;
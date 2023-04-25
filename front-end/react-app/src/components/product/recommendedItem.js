import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class RecommendedItem extends Component {
  render() {
    return (
      <div>
        <div className="p-4 bg-white product-container">
          <a href="product.html" className="product-refrence">
            <h4 className="text-brown">
              {this.props.recommendedItemDetails.productName}
            </h4>
          </a>
          <p className="text-red">
            {this.props.recommendedItemDetails.countLeft} left in stock
          </p>
          <a href="product.html">
            <img
              src={this.props.recommendedItemDetails.imgURL}
              alt="product picture"
              className="img-fluid"
            />
          </a>
          <div className="row">
            <div className="col-4">
              <h4 className="p-2 text-brown">
                {this.props.recommendedItemDetails.price}$
              </h4>
            </div>
            <div className="col-8 p-2">
              <button className="btn add-cart-button float-end" type="submit">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecommendedItem;

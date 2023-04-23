import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class RecommendedItem extends Component {
  render() {
    return (
      <div>
          <div class="p-4 bg-white product-container">
              <a href="product.html" class="product-refrence">
                  <h4 class="text-brown">{this.props.recommendedItemDetails.productName}</h4>
              </a>
              <p class="text-red">{this.props.recommendedItemDetails.countLeft} left in stock</p>
              <a href="product.html"><img src={this.props.recommendedItemDetails.imgURL} alt="product picture"
                      class="img-fluid"/></a>
              <div class="row">
                  <div class="col-4">
                      <h4 class="p-2 text-brown">{this.props.recommendedItemDetails.price}</h4>
                  </div>
                  <div class="col-8 p-2">
                      <button class="btn add-cart-button float-end" type="submit">
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

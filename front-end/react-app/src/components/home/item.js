import "../../assets/styles/home-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class Item extends Component {
  render() {
    if (this.props.availabaleFlag && !this.props.item.countLeft) {
      return;
    }
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="p-4 bg-white product-container">
          <a
            href={"commodities/" + this.props.item.productID}
            className="product-refrence"
          >
            <h4 className="text-brown">{this.props.item.productName}</h4>
          </a>
          <p className="product-stock-info">
            {this.props.item.countLeft} left in stock
          </p>
          <a href={"commodities/" + this.props.item.productID}>
            <img
              src={this.props.item.imgURL}
              alt="product picture"
              className="img-fluid"
            />
          </a>
          <div className="row">
            <div className="col-4">
              {!!this.props.item.countLeft && (
                <h4 className="p-2 text-brown">{this.props.item.price}$</h4>
              )}
            </div>
            <div className="col-8 p-2">
              {!this.props.item.countLeft ? (
                <button
                  className="btn add-cart-button float-end"
                  type="submit"
                  disabled
                >
                  add to cart
                </button>
              ) : (
                <button className="btn add-cart-button float-end" type="submit">
                  add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;

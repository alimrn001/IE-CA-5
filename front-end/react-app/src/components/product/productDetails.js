import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    return (
      <div>
                    <div class="padding">
                        <h2 class="product-title">{this.props.ProductDetails.productName}</h2>
                    </div>
                    <div class="d-flex justify-content-between padding">
                        <div class="in-stock text-red">{this.props.ProductDetails.countLeft} left in stock</div>
                        <div class="margin-right">
                            <img src={this.props.ProductDetails.starImgURL} alt="star" class="rating-star-img" />
                            <span class="rate-score">{this.props.ProductDetails.rateScore}</span>
                            <span class="rate-count">({this.props.ProductDetails.rateCount})</span>
                        </div>
                    </div>
                    <div class="padding">
                        <p>by <a href="#">{this.props.ProductDetails.companyName}</a></p>
                    </div>
                    <p class="text-brown padding">Category(s)</p>
                    <div class="padding">
                        <ul class="text-brown">
                            {
                                this.props.ProductDetails.categories.map( item => (
                                    <li> {item} </li>
                                )) 
                            }
                        </ul>
                    </div>
                    <div class="d-flex justify-content-between margin-right bg-white p-2 shadow-sm card-section">
                        <div class="text-brown padding-left margin-top">
                            <p class="font-800">{this.props.ProductDetails.price}</p>
                        </div>
                        <div class="">
                            <button class="btn add-cart-main-button" type="submit">
                                add to card
                            </button>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between margin-right p-2">
                        <div class="">
                            <p class="margin-bottom">rate now</p>
                            <p>
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                <img src={this.props.ProductDetails.starImgURL} class="rating-star-img-2" alt="" />
                                
                            </p>
                        </div>
                        <div class="">
                            <button class="btn rate-submit-button" type="submit">
                                submit
                            </button>
                        </div>
                    </div>
      </div>
    );
  }
}

export default ProductDetails;

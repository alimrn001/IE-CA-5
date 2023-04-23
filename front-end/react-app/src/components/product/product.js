import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import RecommendedItem from "./recommendedItem";
import "../../assets/styles/product-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "../../api/axios";
import imgURL from "../../assets/img/phone.png";
import starImgURL from "../../assets/img/star.png";
import ProductDetails from "./productDetails";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      cartItemsCount: 1,
      hasSeggestion: true, //change this to false to prevent from showing recommended items
      ProductDetailsEX: {
        productName: "Huawei nova 9",
        companyName: "Huawei",
        price: "300$",
        countLeft: 5,
        rateScore: 4.1,
        rateCount: 12,
        categories: ["Technology", "IT"],
        starImgURL: starImgURL,
      },
      recommendedItemEx: {
        productName: "Huawei nova 9",
        price: "300$",
        countLeft: 1,
        imgURL: imgURL,
      },
      recommendedItemEx2: {
        productName: "Galaxy S21 Ultra",
        price: "1000$",
        countLeft: 2,
        imgURL: imgURL,
      },
      recommendedItemEx3: {
        productName: "Huawei nova 9",
        price: "300$",
        countLeft: 1,
        imgURL: imgURL,
      },
      recommendedItemEx4: {
        productName: "Galaxy S21 Ultra",
        price: "1000$",
        countLeft: 2,
        imgURL: imgURL,
      },
    };
  }

  componentDidMount() {
    document.title = "Product"; //change it to product name later
    document.body.classList.add("bg-light");
  }

  render() {
    return (
      <div className="bg-light">
        <Nav
          username={this.state.username}
          cartItemsCount={this.state.cartItemsCount}
        />
        {/* <Nav username="#Marshal" cartItemsCount="1"/> */}
        <div className="container product-info-container">
          <div className="container-fluid justify-content-around">
            <div className="row d-flex">
              <div className="col-lg-6">
                <div>
                  <img
                    src={imgURL}
                    className="img-fluid m-3 shadow-sm main-product-img"
                    alt="pruduct picture"
                  />
                </div>
              </div>
              <div className="col-lg-6 product-details">
                <ProductDetails ProductDetails={this.state.ProductDetailsEX} />
              </div>
            </div>

            <div className="row comments-section bg-white m-5 p-4 shadow-sm">
              <div className=" bg-white">
                <div className="row pb-3">
                  <p className="h4 text-brown">
                    Comments <span className="text-gray">(2)</span>
                  </p>
                </div>

                <div className="row">
                  <p className="comment-text">This was awsome!!!!</p>

                  <pre className="comment-date">
                    <span>2023-03-20</span> . <span>#username</span>
                  </pre>
                  <p className="text-end">
                    <span className="text-brown">
                      Is this comment helpful?{" "}
                    </span>
                    1
                    <span>
                      <button type="submit" className="no-border">
                        <img
                          src="../assets/img/icons8-thumbs-up-48 1.png"
                          alt=""
                        />
                      </button>
                    </span>
                    1
                    <span>
                      <button type="submit" className="no-border">
                        <img
                          src="../assets/img/icons8-thumbs-up-48 2.png"
                          alt=""
                        />
                      </button>
                    </span>
                  </p>
                </div>

                <div className="row spacer"> </div>

                <div className="row">
                  <p className="comment-text">This was awfullllllllllll!!!!</p>
                  <pre className="comment-date">
                    <span>2023-03-20</span> . <span>#username</span>
                  </pre>
                  <p className="text-end">
                    <span className="text-brown">
                      Is this comment helpful?{" "}
                    </span>
                    1
                    <span>
                      <button type="submit" className="no-border">
                        <img
                          src="../assets/img/icons8-thumbs-up-48 1.png"
                          alt=""
                        />
                      </button>
                    </span>
                    1
                    <span>
                      <button type="submit" className="no-border">
                        <img
                          src="../assets/img/icons8-thumbs-up-48 2.png"
                          alt=""
                        />
                      </button>
                    </span>
                  </p>
                </div>

                <div className="row spacer"> </div>

                <div className="row mb-3">
                  <form action="" method="post">
                    <label for="opinion" className="form-label text-brown h4">
                      Submit your opinion
                    </label>
                    <div className="d-flex">
                      <div className="col-lg-11">
                        <textarea
                          className="form-control comment-text-input"
                          id="opinion"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                      <div className="col-lg-1">
                        <button
                          className="= btn comment-submit-button"
                          type="submit"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {this.state.hasSeggestion && (
              <h3 className="text-brown pb-5">You also might like...</h3>
            )}
            {this.state.hasSeggestion && (
              <div className="row mt-4 gy-4 product-container mb-5">
                <div className="col-lg-3 col-md-6">
                  <RecommendedItem
                    recommendedItemDetails={this.state.recommendedItemEx}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <RecommendedItem
                    recommendedItemDetails={this.state.recommendedItemEx2}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <RecommendedItem
                    recommendedItemDetails={this.state.recommendedItemEx3}
                  />
                </div>
                <div className="col-lg-3 col-md-6">
                  <RecommendedItem
                    recommendedItemDetails={this.state.recommendedItemEx4}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Product;

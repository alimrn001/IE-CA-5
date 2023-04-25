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
import Comments from "./comments";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      cartItemsCount: 1,
      hasSeggestion: true, //change this to false to prevent from showing recommended items
      ProductDetailsEX: {
        productImg: imgURL,
        productName: "Huawei nova 9",
        companyName: "Huawei",
        price: 300,
        countLeft: 5,
        rateScore: 4.1,
        rateCount: 12,
        categories: ["Technology", "IT"],
        starImgURL: starImgURL,
      },
      comments: [
        {
          commentText: "This was awsome!!!!",
          commentDate: "2023-03-20",
          commentUsername: "#username",
          commentLikes: 1,
          commentDislikes: 1
        },
        {
          commentText: "This was awfullllllllllll!!!!",
          commentDate: "2023-03-20",
          commentUsername: "#username",
          commentLikes: 1,
          commentDislikes: 1
        }
      ],
      recommendedItems: [
        {
          productName: "Huawei nova 9",
          price: 300,
          countLeft: 1,
          imgURL: imgURL,
        },
        {
          productName: "Galaxy S21 Ultra",
          price: 1000,
          countLeft: 2,
          imgURL: imgURL,
        },
        {
          productName: "Huawei nova 9",
          price: 300,
          countLeft: 1,
          imgURL: imgURL,
        },
        {
          productName: "Galaxy S21 Ultra",
          price: 1000,
          countLeft: 2,
          imgURL: imgURL,
        }
      ]

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
                    src={this.state.ProductDetailsEX.productImg}
                    className="img-fluid m-3 shadow-sm main-product-img"
                    alt="pruduct picture"
                  />
                </div>
              </div>
              <div className="col-lg-6 product-details">
                <ProductDetails ProductDetails={this.state.ProductDetailsEX} />
              </div>
            </div>

            <Comments comments={this.state.comments}/>

            {this.state.hasSeggestion && (
              <h3 className="text-brown pb-5">You also might like...</h3>
            )}
            {this.state.hasSeggestion && (
              
              <div className="row mt-4 gy-4 product-container mb-5">
            
              {this.state.recommendedItems.map((item) => (
                <div className="col-lg-3 col-md-6">
                  <RecommendedItem
                    recommendedItemDetails={item}
                  />
                </div>
              ))}
              </div>

            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;

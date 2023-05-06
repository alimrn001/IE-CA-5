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
      cartItemsCount: 0,
      hasSuggestion: true, //change this to false to prevent from showing recommended items
      ProductDetailsEX: {
        productImg: "",
        productName: "",
        providerName: "",
        providerId: 0,
        price: 0,
        countLeft: 0,
        rateScore: 0,
        rateCount: 0,
        categories: [],
        starImgURL: starImgURL,
      },

      comments: [],
      // comments: [
      //   {
      //     commentText: "This was awsome!!!!",
      //     commentDate: "2023-03-20",
      //     commentUsername: "#username",
      //     commentLikes: 1,
      //     commentDislikes: 1,
      //   },
      //   {
      //     commentText: "This was awfullllllllllll!!!!",
      //     commentDate: "2023-03-20",
      //     commentUsername: "#username",
      //     commentLikes: 1,
      //     commentDislikes: 1,
      //   },
      // ],
      recommendedItems: [],
    };
  }

  getBalootCommodity() {
    axios
      .get(`commodities/${this.props.match.params.productId}`)
      .then((resp) => {
        if (resp.status === 200) {
          let categories = [];
          let recommended = [];
          let comments = [];
          Object.keys(resp.data.commodity.categories).forEach((category) => {
            categories.push(resp.data.commodity.categories[category]);
          });
          Object.keys(resp.data.recommended).forEach((item) => {
            recommended.push(resp.data.recommended[item]);
          });
          Object.keys(resp.data.comments).forEach((comment) => {
            comments.push(resp.data.comments[comment]);
          });
          let username = resp.data.loggedInUsername;
          let cartSize = resp.data.cartSize;

          this.setState(
            {
              ProductDetailsEX: {
                productImg: resp.data.commodity.image,
                productName: resp.data.commodity.name,
                providerName: resp.data.providerName,
                providerId: resp.data.commodity.providerId,
                price: resp.data.commodity.price,
                countLeft: resp.data.commodity.inStock,
                rateScore: resp.data.commodity.rating,
                rateCount: resp.data.commodity.numOfRatings,
                categories: categories,
                starImgURL: starImgURL,
              },
              username: username,
              cartItemsCount: cartSize,
              recommendedItems: recommended,
              comments: comments,
            },
            () => {
              console.log(this.state);
            }
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "http://localhost:3000/login";
        } else if (error.response.status === 404) {
          window.location.href = "http://localhost:3000/notfound";
        } else if (error.response.status === 400) {
          window.location.href = "http://localhost:3000/badrequest";
        }
      });
  }

  componentDidMount() {
    console.log("id : ", this.props.match.params.productId);
    this.getBalootCommodity();
    const title = this.state.ProductDetailsEX.productName;
    document.title = title;
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

            <Comments comments={this.state.comments} />
            {this.state.hasSuggestion && (
              <h3 className="text-brown pb-5">You also might like...</h3>
            )}
            {this.state.hasSuggestion && (
              <div className="row mt-4 gy-4 product-container mb-5">
                {this.state.recommendedItems.map((item) => (
                  <div className="col-lg-3 col-md-6">
                    <RecommendedItem recommendedItemDetails={item} />
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

import React, { Component } from "react";
import Nav from "../product/nav";
import Footer from "../product/footer";
import img from "../../assets/img/phone.png";
import huaweiImg from "../../assets/img/image 5.png";
import "../../assets/styles/provider-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./item";
import ProviderDetails from "./providerDetail";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      cartItemsCount: 1,
      providersEx: {
        name: "Huawei",
        since: 1990,
        image: huaweiImg,
      },
      itemsEx: [
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          inStock: 0,
          image: img,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Nav
          username={this.state.username}
          cartItemsCount={this.state.cartItemsCount}
        />

        <div className="container">
          <div className="row mt-4 gy-4 ">
            <ProviderDetails providerDetails={this.state.providersEx} />
          </div>
          <h3 className="text-brown pb-5 mt-10p">All provided commodities</h3>

          <div className="row mt-4 gy-4 product-container mb-5">
            {this.state.itemsEx.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Provider;

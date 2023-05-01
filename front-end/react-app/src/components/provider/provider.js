import React, { Component } from "react";
import Nav from "../product/nav";
import Footer from "../product/footer";
import img from "../../assets/img/phone.png";
import huaweiImg from "../../assets/img/image 5.png";
import "../../assets/styles/provider-styles.css";
import Item from "./item";
import ProviderDetails from "./providerDetail";

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      cartItemsCount: 1,
      providersEx:{
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
          id: 2,
          name: "Galaxy S21 Ultra",
          price: 1000,
          instock: 2,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          instock: 1,
          image: img,
        },
        {
          id: 2,
          name: "Galaxy S21 Ultra",
          price: 1000,
          instock: 2,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          instock: 1,
          image: img,
        },
        {
          id: 2,
          name: "Galaxy S21 Ultra",
          price: 1000,
          instock: 2,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          instock: 1,
          image: img,
        },
        {
          id: 1,
          name: "Huawei nova 9",
          price: 300,
          instock: 0,
          image: img,
        },
      ]


    };
  }


  render() {
    return (
      <div >
        <Nav
          username={this.state.username}
          cartItemsCount={this.state.cartItemsCount}
        />

        


          <div className="container">
                <div className="row mt-4 gy-4 product-container">
                    <ProviderDetails providerDetails={this.state.providersEx} />
                </div>
          <h3 className="text-brown pb-5">All provided commodities</h3>

          <section className="container-fluid p-4">
            <div className="row mt-4 gy-4 product-container">

              {this.state.itemsEx.map( item => (
                <Item item={item} />
              ))}
            </div>
          </section>
            </div>

        <Footer />
      </div>
    );
  }
}

export default Provider;

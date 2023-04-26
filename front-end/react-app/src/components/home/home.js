import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../../assets/styles/home-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Item from "./item";
import imgURL from "../../assets/img/phone.png";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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
          },
          {
            productName: "Huawei nova 9",
            price: 300,
            countLeft: 1,
            imgURL: imgURL,
          },
          {
            productName: "Huawei nova 9",
            price: 300,
            countLeft: 0,
            imgURL: imgURL,
          }
      ]
    }
  }



  render() {
    return (
      <div>
            <Nav />

            <div class="container filter-section">
                <div class="container-fluid">
                    <div class="row selection-section p-2 shadow-sm">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <div>
                                    <h4 class="brown">Available commodities</h4>
                                </div>
                                <div class="padding-left">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <div class="slider round"></div>
                                    </label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between sorting-section">
                                <div class="d-flex">
                                    <div class="brown sort-by">
                                        <h5>sort by:</h5>
                                    </div>
                                    <div class="padding-left">
                                        <button type="submit" name="sort-action" value="sort-by-name"
                                            class="btn sellected">name</button>
                                        <button type="submit" name="sort-action" value="sort-by-price"
                                            class="btn sellected-2">price</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <section class="container-fluid p-4">

                    <div class="row mt-4 gy-4 product-container">

                        {
                        this.state.items.map(item => (
                            <Item item={item} />
                        ))
                        }

                    </div>

                </section>
            </div>
            <Footer />

      </div>
    );
  }
}

export default Home;

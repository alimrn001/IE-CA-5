import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import "../../assets/styles/home-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Item from "./item";
import imgURL from "../../assets/img/phone.png";
import Filter from "./filter";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabaleFlag: false,  
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
    this.setAvailabaleFlag = this.setAvailabaleFlag.bind(this);
  }
  setAvailabaleFlag() {
    this.state.availabaleFlag = !this.state.availabaleFlag;
    this.forceUpdate();
  }


  render() {
    return (
      <div>
            <Nav />

            <Filter setAvailabaleFlag={this.setAvailabaleFlag}/>

            <div className="container">
                <section className="container-fluid p-4">

                    <div className="row mt-4 gy-4 product-container">

                        {
                        this.state.items.map(item => (
                            <Item item={item} availabaleFlag={this.state.availabaleFlag}/>
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

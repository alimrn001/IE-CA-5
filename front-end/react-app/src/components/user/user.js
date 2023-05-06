import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HistoryTable from "./historyTable";
import Nav from "../product/nav";
import UserDetails from "./userDetails";
import phoneImg from "../../assets/img/phone.png";
import spaghettiImg from "../../assets/img/spaghetti.png";
import microphoneImg from "../../assets/img/microphone.png";
import cartImg from "../../assets/img/Vector (2).png";
import historyImg from "../../assets/img/Vector (3).png";
import Footer from "./footer";
import CartTable from "./cartTable";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { useModal } from 'react-hooks-use-modal';

import PopUp1 from "./popUp";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      AccountDetailsEX: {
        userName: " Marshal",
        EMail: " Marshal.Mathers@gmail.com",
        userBirthday: " 1972/10/17",
        userAddress: " 20785 Schultes Avenue, Warren, MI 48091",
        budget: 10000000
      },
      cartCommodities:[
        {
          commodityID: 313,
          img: phoneImg,
          productName: "Galexy S21",
          categories: ["Technology", "Phone"],
          price: 21000000,
          providerID: 1234,
          rating: 8.3,
          inStock: 17
        },
        {
          commodityID: 1234,
          img: phoneImg,
          productName: "Galexy S21",
          categories: ["Technology", "Phone"],
          price: 21000000,
          providerID: 313,
          rating: 8.3,
          inStock: 17
        },
        
      ],
      historyTableData: [
        {
            img: spaghettiImg,
            productName: "Mom's Spaghetti",
            categories: ["Food"],
            price: 60000,
            providerID: 313,
            rating: 10,
            inStock: 0,
            quantity: 3
        },
        {
            img: microphoneImg,
            productName: "Dre's Microphone",
            categories: ["Technology"],
            price: 4200000,
            providerID: 4321,
            rating: 8.5,
            inStock: 22,
            quantity: 1
        }
      ],
      cartCommoditiesCount: [
      {
          commodityID: 1234,
          cartItemsCount: 1
      },
      {
        commodityID: 313,
        cartItemsCount: 1
      }



      ]
      
    };
    this.updateCartCommoditiesCount = this.updateCartCommoditiesCount.bind(this);

  }

  updateCartCommoditiesCount(commodityID, count){
    this.state.cartCommoditiesCount.forEach( item => {
      if(item.commodityID == commodityID){
        item.cartItemsCount = count;
        console.log(item.cartItemsCount);
      }
    })

    // console.log(this.state.cartCommoditiesCount[0].cartItemsCount);
    // this.state.cartCommoditiesCount.map(item => {
    //   if(item.commodityID === commodityID){
    //     return item.cartItemsCount;
    //   }
    // })
  }
  // componentDidUpdate(){
  //   this.updateCartCounts();
  // }


  render() {
    return (
      <div>
        <Nav
          username={this.state.username}
          cartItemsCount={this.state.cartCommodities.length}
        />
        <div class="container body-container">
            <UserDetails AccountDetails={this.state.AccountDetailsEX} />
            <h3 class="text-brown"><img src={cartImg} class="cart-img" alt="" /> Cart</h3>
            <CartTable 
              cartCommodities={this.state.cartCommodities}
              updateItemCount={this.updateCartCommoditiesCount}
            />
            <div class="row">
              <PopUp1 
                cartCommodities={this.state.cartCommodities}
                cartCommoditiesCount={this.state.cartCommoditiesCount}
              />
            </div>

            <h3 class="text-brown mt-20"><img src={historyImg} class="cart-img" alt="" /> History</h3>
            <HistoryTable historyTableData={this.state.historyTableData}/>

        </div>

          <Footer />
      </div>
    );
  }
}

export default User;

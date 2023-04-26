import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HistoryTable from "./historyTable";
import Nav from "../product/nav";
import UserDetails from "./userDetails";
import spaghettiImg from "../../assets/img/spaghetti.png";
import microphoneImg from "../../assets/img/microphone.png";
import cartImg from "../../assets/img/Vector (2).png";
import historyImg from "../../assets/img/Vector (3).png";
import Footer from "./footer";



class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "username",
      cartItemsCount: 1,
      AccountDetailsEX: {
        userName: " Marshal",
        EMail: " Marshal.Mathers@gmail.com",
        userBirthday: " 1972/10/17",
        userAddress: " 20785 Schultes Avenue, Warren, MI 48091",
        budget: 10000000
      },
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
      ]

    };
  }


  render() {
    return (
      <div>
        <Nav
          username={this.state.username}
          cartItemsCount={this.state.cartItemsCount}
        />
        <div class="container body-container">
            <UserDetails AccountDetails={this.state.AccountDetailsEX} />


            <h3 class="text-brown"><img src={cartImg} class="cart-img" alt="" /> Cart</h3>

            <div class="row">
            <div class="table-responsive custom-table-responsive">
                <table class="table custom-table">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Price</th>
                    <th scope="col">Provider ID</th>
                    <th scope="col">Rating</th>
                    <th scope="col">In Stock</th>
                    <th scope="col">In Cart</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="spacer">
                    <td colspan="100"></td>
                    </tr>

                    <tr>
                    <th scope="row"><a href="product.html"><img src="../assets/img/phone.png" class="cart-product-img" /></a>
                    </th>
                    <td>Galexy S21</td>
                    <td>Technology, Phone</td>
                    <td>$21000000</td>
                    <td>1234</td>
                    <td>
                        <p class="text-yellow">8.3</p>
                    </td>
                    <td>
                        <p class="text-red">17</p>
                    </td>
                    <td>
                        <div class="counter-btn d-flex justify-content-around">
                        <div><button class="counter-btn-item">-</button></div>
                        <div><button class="counter-btn-item">1</button></div>
                        <div><button class="counter-btn-item">+</button></div>
                        </div>
                        {/* <!-- <input placeholder="1" type="number" value="" min="1" class="form-control"/> --> */}
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>

            <div class="row">
            <div>
                <button class="btn pay-button vertical-center" type="submit">
                Pay now!
                </button>
            </div>
            </div>

            <h3 class="text-brown mt-20"><img src={historyImg} class="cart-img" alt="" /> History</h3>

            <HistoryTable historyTableData={this.state.historyTableData}/>
            {/* <div class="table-responsive">
            <table class="table custom-table">
                <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Categories</th>
                    <th scope="col">Price</th>
                    <th scope="col">Provider ID</th>
                    <th scope="col">Rating</th>
                    <th scope="col">In Stock</th>
                    <th scope="col">Quantity</th>
                </tr>
                </thead>

                <tbody>
                <tr class="spacer">
                    <td colspan="100"></td>
                </tr>

                <tr>
                    <th scope="row"><a href="product.html"><img src="../assets/img/spaghetti.png" class="cart-product-img" /></a>
                    </th>
                    <td>
                    <p>Mom's Spaghetti</p>
                    </td>
                    <td>
                    <p>Food</p>
                    </td>
                    <td>
                    <p>$60000</p>
                    </td>
                    <td>
                    <p>313</p>
                    </td>
                    <td>
                    <p class="text-yellow">10</p>
                    </td>
                    <td>
                    <p class="text-red">0</p>
                    </td>
                    <td>
                    <p>3</p>
                    </td>
                </tr>

                <tr class="spacer">
                    <td colspan="100"></td>
                </tr>

                <tr>
                    <th scope="row"><a href="product.html"><img src="../assets/img/microphone.png" class="cart-product-img" /></a>
                    </th>
                    <td>
                    <p>Dre's Microphone</p>
                    </td>
                    <td>
                    <p>Technology</p>
                    </td>
                    <td>
                    <p>$4200000</p>
                    </td>
                    <td>
                    <p>4321</p>
                    </td>
                    <td>
                    <p class="text-yellow">8.5</p>
                    </td>
                    <td>
                    <p class="text-red">22</p>
                    </td>
                    <td>
                    <p>1</p>
                    </td>
                </tr>

                </tbody>
            </table>
            </div> */}

        </div>

          <Footer />

      </div>
    );
  }
}

export default User;

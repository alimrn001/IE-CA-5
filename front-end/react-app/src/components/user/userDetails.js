import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import accountImg from "../../assets/img/Vector (4).png";
import mailImg from "../../assets/img/Vector (5).png";
import calenderImg from "../../assets/img/Vector (6).png";
import locationImg from "../../assets/img/Vector (7).png";


class UserDetails extends Component {

  render() {
    return (
        <div class="row">
        <div class="container user-detail">
            <div class="row">
            <div class="col-6">

                <p><img src={accountImg} class="user-info-item" alt="" />{this.props.AccountDetails.userName}</p>
                <p><img src={mailImg} class="user-info-item" alt="" /> {this.props.AccountDetails.EMail}</p>
                <p><img src={calenderImg} class="user-info-item" alt="" /> {this.props.AccountDetails.userBirthday}</p>
                <p><img src={locationImg} class="user-info-item" alt="" /> {this.props.AccountDetails.userAddress}</p>

            </div>
            <div class="col-6">
                <div class="container">
                <div class="row budget">
                    <h1 class="">${this.props.AccountDetails.budget}</h1>
                </div>
                </div>
                <form action="" method="post">
                <div class="row form-outline">
                    <input type="number" class="form-control amount-inbox" id="creditAmount" min="0" placeholder="$Amount"
                    required>
                    </input>
                </div>
                <div class="row">
                    <button class="btn add-credit-button" type="submit">
                    Add more credit
                    </button>
                </div>
                </form>

            </div>
            </div>
        </div>
        </div>
    );
  }
}

export default UserDetails;

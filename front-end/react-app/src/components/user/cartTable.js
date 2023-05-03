import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartTableRow from "./cartTableRow";

class CartTable extends Component {


  render() {
    return (
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
                    {
                        this.props.cartCommodities.map(
                            (item) => (
                                <CartTableRow 
                                    item={item} 
                                    getItemCount={this.props.getItemCount}
                                    increaseItemCount={this.props.increaseItemCount}
                                    decreaseItemCount={this.props.decreaseItemCount}
                                />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
  }
}

export default CartTable;

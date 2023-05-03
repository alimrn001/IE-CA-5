import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class CartTableRow extends Component {
    render() { 
        return (
            <React.Fragment>
                    <tr class="spacer">
                        <td colspan="100"></td>
                    </tr>

                    <tr>
                        <th scope="row"><a href="product.html"><img src={this.props.item.img} class="cart-product-img" /></a>
                        </th>
                        <td>{this.props.item.productName}</td>
                        <td>{this.props.item.categories}</td>
                        <td>${this.props.item.price}</td>
                        <td>{this.props.item.providerID}</td>
                        <td>
                            <p class="text-yellow">{this.props.item.rating}</p>
                        </td>
                        <td>
                            <p class="text-red">{this.props.item.inStock}</p>
                        </td>
                        <td>
                            <div class="counter-btn d-flex justify-content-around">
                                <div><button class="counter-btn-item" onClick={() => this.props.decreaseItemCount(1234)}>-</button></div>
                                <div><button class="counter-btn-item">{this.props.getItemCount(1234)}</button></div>
                                <div><button class="counter-btn-item" onClick={() => this.props.increaseItemCount(1234)}>+</button></div>
                            </div>
                            {/* <!-- <input placeholder="1" type="number" value="" min="1" class="form-control"/> --> */}
                        </td>
                    </tr>
            </React.Fragment>
        );
    }
}
 
export default CartTableRow;
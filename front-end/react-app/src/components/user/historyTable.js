import React, { Component } from "react";
import "../../assets/styles/user-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HistoryTableRow from "./historyTableRow";

class HistoryTable extends Component {

  render() {
    return (
        <div class="table-responsive">
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
                    {/* {
                        this.props.historyTableData.map(
                            item => (
                                    <tr class="spacer">
                                        <td colspan="100"></td>
                                    </tr>
                            )
                        )
                    }
                    {
                        this.props.historyTableData.map(
                            
                            item => (
                                <div>
                                    <HistoryTableRow item = {item} />


                                </div>
                                <tr>
                                <th scope="row"><a href="product.html"><img src={item.img} class="cart-product-img" /></a>
                                </th>
                                <td>
                                <p>{item.productName}</p>
                                </td>
                                <td>
                                <p>{item.categories}</p>
                                </td>
                                <td>
                                <p>${item.price}</p>
                                </td>
                                <td>
                                <p>{item.providerID}</p>
                                </td>
                                <td>
                                <p class="text-yellow">{item.rating}</p>
                                </td>
                                <td>
                                <p class="text-red">{item.inStock}</p>
                                </td>
                                <td>
                                <p>{item.quantity}</p>
                                </td>
                            </tr>
                            )
                        )
                    } */}
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
        </div>
    );
  }
}

export default HistoryTable;

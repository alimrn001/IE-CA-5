import React, { Component } from "react";

import "../../assets/styles/provider-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


class ProviderDetail extends Component {

  render() {
    return (
      <div className="mt-100 d-flex align-items-center justify-content-center" >
        <div>
            <img
              src={this.props.providerDetails.image}
              alt="provider picture"
            />
            <p className="text-brown">since {this.props.providerDetails.since}</p>
            <h3 className="text-brown">{this.props.providerDetails.name}</h3>
        </div>
      </div>
    );
  }
}

export default ProviderDetail;

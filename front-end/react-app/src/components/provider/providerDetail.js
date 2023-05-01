import React, { Component } from "react";

import "../../assets/styles/provider-styles.css";


class ProviderDetail extends Component {

  render() {
    return (
      <div className="mt-100" >

            <img
              src={this.props.providerDetails.image}
              alt="provider picture"
              className="provider-img"
            />

      </div>
    );
  }
}

export default ProviderDetail;

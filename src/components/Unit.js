import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./cart/Item";

class Unit extends Component {
  render() {
    this.props.cartUpdated();

    let sub = 0;

    this.props.cart.map((item) => (sub = item.product.price * item.quantity));

    const book =
      this.props.cart.length > 0 ? (
        <div>
          <div className="card-body">
            {this.props.cart.map((item) => {
              return (
                <div key={item.product.id}>
                  <Item item={item} />
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="card-footer">
            <div className="row align-center">
              <div className="col-11">
                <h4 className="align-right">
                  Net{" "}
                  <strong>
                    {new Intl.NumberFormat("th-TH", {
                      style: "currency",
                      currency: "THB",
                      maximumSignificantDigits: 3
                    }).format(sub)}
                  </strong>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-body">
          <p></p>
        </div>
      );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-header">
            {/* {this.props.cart.length > 0 ? (
              <span className="label label-info">
                items: (${total.toFixed(2)})
              </span>
            ) : null} */}
            {book}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    cartUpdated: () => {
      return true;
    }
  };
};

export default connect(mapStateToProps)(Unit);

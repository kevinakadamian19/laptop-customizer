import React, {Component} from 'react'
import './Cart.css'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.currentSelected.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.currentSelected.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
        });
        return (
            <div>{summary}</div>
        )
    }
}

export default Cart

import React, {Component} from 'react'
import './MainSummary.css'
import Cart from './Cart/Cart'
import SummaryTotal from './SummaryTotal/SummaryTotal'

class MainSummary extends Component {
    render() {
      
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <Cart 
                    features={this.props.features}
                    currentSelected={this.props.currentSelected}
                />
                <SummaryTotal 
                    features={this.props.features}
                    currentSelected={this.props.currentSelected}
                />
          </section>
        )
    }
}

export default MainSummary
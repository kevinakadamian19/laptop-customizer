import React, {Component} from 'react'
import './MainForm.css'
import FeatureItems from './FeatureItems/FeatureItems'

class MainForm extends Component {
    render() {
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <FeatureItems
                    features={this.props.features}
                    onUpdate={this.props.onUpdate}
                    currentSelected={this.props.currentSelected}
                />
            </form>
        )
    }
}



export default MainForm


import React, {Component} from 'react';
import Options from "../Options/Options";



class Features extends Component {
    
    render() {

        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <Options 
                    features={this.props.features} 
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate}
                />
            </section>
        )
    }
}


export default Features;
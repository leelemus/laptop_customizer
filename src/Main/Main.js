import React, {Component} from 'react';
import Features from '../Features/Features';
import Summary from '../Summary/Summary';
import './Main.css';

class Main extends Component {
    render() {
        return(
            <main>
                <Features 
                    features={this.props.features} 
                    selected={this.props.selected}
                    handleUpdate={this.props.handleUpdate}
                />
                <Summary 
                    selected={this.props.selected}
                />
            </main>
        )
    }
}

export default Main;
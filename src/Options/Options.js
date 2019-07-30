import React, {Component} from 'react';
import Items from '../Items/Items';

class Options extends Component {
    render() {
        const features = Object.keys(this.props.features)
          .map(key => {
            const options = this.props.features[key].map((item, index) => {

              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;

              return (
                  <Items 
                  key = {index}
                  index = {index}
                  item = {item}
                  featureName = {key}
                  featureClass = {featureClass}
                  handleUpdate={this.props.handleUpdate}
                  />
              )
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });  
        return features;
    }
}

export default Options;

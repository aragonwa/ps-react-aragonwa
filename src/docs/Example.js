import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showCode: false};
  }

  // Static class property: no bind in constructor
  toggleCode = event => {
    event.preventDefault();
    // https://facebook.github.io/react/docs/react-component.html#setstate
    this.setState(prevState => {
      return {showCode: !prevState.showCode};
    });
  }

  render() {
    const {showCode} = this.state;
    const {code, description, name} = this.props.example;
    // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${this.props.componentName}/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />
        <p>
          <a href="#" onClick={this.toggleCode}>
            {showCode ? "Hide": "Show"} Code
          </a>
          {showCode && code}
        </p>
      </div>
    )
  }
}

Example.PropTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired
}

export default Example;
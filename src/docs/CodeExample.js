import React from 'react';
import PropTypes from 'prop-types';
// replace with prism http://bit.ly/react-prism
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

class CodeExample extends React.Component {
  componentDidMount() {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.element);
  }

  render(){
    return (
      <pre ref={ref => {this.element = ref}}>
        <code>
          {/* Render child */}
          {this.props.children}
        </code>
      </pre>
    )
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
import React from 'react';

function HelloWorld({message}) {
  return <div>Hi {message}</div>
}
 
HelloWorld.propTypes = {
  message: PropTypes.string
}

export default HelloWorld;
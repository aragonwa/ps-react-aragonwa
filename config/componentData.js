module.exports = [{"name":"HelloWorld","description":"A super lame component that says Hello with a custom message","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\nimport PropTypes from \"prop-types\";\n\n/** A super lame component that says Hello with a custom message */\nfunction HelloWorld({message}) {\n  return <div>Hi {message}</div>\n}\n \nHelloWorld.propTypes = {\n  /** Message to display */\n  message: PropTypes.string\n}\n\nHelloWorld.defaultProps = {\n  message: 'World'\n}\n\n\nexport default HelloWorld;","examples":[{"name":"ExampleHelloWorld","description":"Custom Message","code":"import React from 'react';\nimport HelloWorld from 'ps-react/HelloWorld';\n\n/** Custom Message */\nexport default function ExampleHelloWorl(){\n  return <HelloWorld message=\"Pluralsight viewers!\" />\n}"}]}]
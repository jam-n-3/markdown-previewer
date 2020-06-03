import React from 'react';
import './App.css';
const ReactMarkdown = require('react-markdown')


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '# Heading\n\n## Subheading\n\n[Link](https://example.com/)\n\n`let x = 0`\n' + 
      ' \n```\n{"firstName": "John", "lastName": "Smith", "age": 25}\n```\n- List Item\n ' +
      '\n> Quote\n\n![alt text for image](example.jpg)\n\n**Bold Text**'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {this.setState({value: event.target.value});}

  render() {
    return (
      <div className="App">
        <textarea id="editor" onChange={this.handleChange} value={this.state.value} />
        <p id="preview"><ReactMarkdown source={this.state.value} /></p>
      </div>
    );
  }
}

export default App;

/*
    ./client/components/App.jsx
*/
import React from 'react';
import Page from './home.html';
var htmlDoc = {__html: Page};
export default class App extends React.Component {
  render() {
    return (<div style={{textAlign: 'center'}} dangerouslySetInnerHTML={htmlDoc} />)
  }
}

import React, { Component } from 'react';
import CommentBox from './comment_box';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <CommentBox />
      </div>
    );
  }
}

import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';

class App extends Component {
  render(){
    return(
      <div className='app-wrap '>
        <div className='top clearfix'>
          <PostBody />
        </div>
        <div className='bottom clearfix'>
          <CommentBox />
        </div>
      </div>
    )
  }
}

export default App;

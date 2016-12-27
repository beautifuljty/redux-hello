import React, { Component } from 'react';
import store from '../store.js';

class CommentBox extends Component {
  constructor(){
    super();
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.refs.commentForm.reset();
    // let content = this.refs.content.value;
    // let comments = this.state.comments;
    // comments.push(content);
    // this.setState({comments});
  }
  render(){
    let commentList = this.state.comments.map((item,i) => {
      return(
        <div key={i} className='comment'>
          {item}
        </div>
      )
    })
    return(
      <div className='comment-box'>
        {commentList}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)} >
          <input type='text' className='input' ref='content'/>
          <button type='submit' className='submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default CommentBox;

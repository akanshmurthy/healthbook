/* global React */

(function(root) {
  'use strict';
  root.StatusForm = React.createClass({
    getInitialState: function () {
      return {body: ""};
    },
    handleChange: function(e) {
      this.setState({ body: e.target.value});
    },
    createPost: function (e) {
      e.preventDefault();
      var data = {post: this.state};
      root.StatusFormUtil.post(data);
      this.setState({body: ""});
    },
    render: function () {
      return(
        <form className='new-post' onSubmit={this.createPost}>
         <div>
           <label htmlFor='post_body'>Body:</label>
           <input
             type='text'
             id='post_body'
             onChange={this.handleChange}
           />
         </div>
         <button>Create Post</button>
         <br />
       </form>
      );
    }
  });
}(this));

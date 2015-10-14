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
        <div className="row">
          <div className="col-xs-4">
            <form className="new-post" onSubmit={this.createPost}>
             <div className="form-group">
               <label htmlFor="post_body">Body:</label>
               <input
                 type="text"
                 id="post_body"
                 onChange={this.handleChange}
                 className="form-control"
               />
             </div>
             <button type="submit" className="btn btn-primary">Create Post</button>
             <br />
           </form>
         </div>
       </div>
      );
    }
  });
}(this));

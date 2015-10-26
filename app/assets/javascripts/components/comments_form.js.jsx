/* global React */

(function(root) {
  'use strict';
  root.CommentsForm = React.createClass({
    getInitialState: function () {
      return {body: "", post_id: this.props.post};
    },
    handleChange: function(e) {
      this.setState({ body: e.target.value});
    },
    createComment: function(e) {
      e.preventDefault();
      var data = {comment: this.state};
      root.CommentUtil.add(data);
      this.setState({body: ""});
    },
    render: function () {
      return(
        <div className="row">
          <div id="comments-form">
            <form className="form-inline pull-right" onSubmit={this.createComment}>
             <div className="form-group">
               <label className="sr-only" htmlFor="field_name"></label>
               <input
                 type="text"
                 id="field_name"
                 onChange={this.handleChange}
                 className="form-control"
                 placeholder="Add comment"
                 value={this.state.body}
               />
             </div>
             <button type="submit" className="btn">Submit</button>
             <br />
           </form>
         </div>
       </div>
      );
    }
  });
}(this));

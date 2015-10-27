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
      root.NotificationUtil.create({notification: {body: window.CURRENT_USERNAME + "just commented on your post", notifier_id: window.CURRENT_USER_ID, notifyee_id: this.props.user}})
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
             <button type="submit" className="btn btn-default">Submit</button>
             <br />
           </form>
         </div>
       </div>
      );
    }
  });
}(this));

/* global React */

(function(root) {
  'use strict';
  root.MedicalProfileForm = React.createClass({
    getInitialState: function () {
      return {field_name: "", field_value: ""};
    },
    handleNameChange: function(e) {
      this.setState({ field_name: e.target.value});
    },
    handleValueChange: function(e) {
      this.setState({ field_value: e.target.value});
    },
    createPost: function(e) {
      e.preventDefault();
      var data = {post: this.state};
      root.MedicalPostUtil.post(data);
      this.setState({field_name: "", field_value: ""});
    },
    render: function () {
      return(
        <div className="row">
          <div className="col-xs-4">
            <form className="new-post" onSubmit={this.createPost}>
             <div className="form-group">
               <label htmlFor="field_name">Name:</label>
               <input
                 type="text"
                 id="field_name"
                 onChange={this.handleNameChange}
                 className="form-control"
                 placeholder="Name of column"
               />
             <label htmlFor="field_value">Value:</label>
               <input
                 type="text"
                 id="field_value"
                 onChange={this.handleValueChange}
                 className="form-control"
                 placeholder="Value of column"
               />
             </div>
             <button type="submit" className="btn btn-primary">Create Entry</button>
             <br />
           </form>
         </div>
       </div>
      );
    }
  });
}(this));

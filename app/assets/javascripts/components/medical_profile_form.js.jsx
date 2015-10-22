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
          <div id="medical-post">
            <form className="form-inline" onSubmit={this.createPost}>
             <div className="form-group">
               <label className="sr-only" htmlFor="field_name"></label>
               <input
                 type="text"
                 id="field_name"
                 onChange={this.handleNameChange}
                 className="form-control"
                 placeholder="Name of column"
                 value={this.state.field_name}
               />
             <label htmlFor="field_value"></label>
               <input
                 type="text"
                 id="field_value"
                 onChange={this.handleValueChange}
                 className="form-control"
                 placeholder="Value of column"
                 value={this.state.field_value}
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

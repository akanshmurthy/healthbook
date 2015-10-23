/* global React */

(function(root) {
  'use strict';
  root.Resources = React.createClass({
    getInitialState: function () {
      return {string: "", doctors: []};
    },
    handleChange: function(e) {
      e.preventDefault();
      this.setState({string: e.target.value});
    },
    searchDocs: function(e) {
      e.preventDefault();
      root.ResourcesUtil.get(this.state.string);
      this.setState({string: ""});
    },
    _onChange: function () {
      this.setState({doctors: ResourcesStore.getDoctors()});
    },
    componentDidMount: function () {
      root.ResourcesStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.ResourcesStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return(
        <div>
          <div id="htapWidgetAskdoc" data-color="rgb(238, 245, 250)" style={{height: 600, width: 300}}></div>
          <div id="betterdoctor">Find doctors near you!
            <form onSubmit={this.searchDocs}>
             <div className="form-group">
               <label htmlFor="post_body">Type in a condition.</label>
               <br/>
               <br/>
               <input
                 type="text"
                 id="post_body"
                 onChange={this.handleChange}
                 className="form-control"
                 placeholder="Condition"
                 value={this.state.string}
               />
             </div>
             <button type="submit" className="btn btn-primary pull-right">Find doctors</button>
             <br />
           </form>
           {this.state.doctors.map(function(doctor){
             return <li key={doctor.uid}>{doctor.profile.first_name}</li>;
           })}
          </div>
        </div>
      );
    }
  });
}(this));

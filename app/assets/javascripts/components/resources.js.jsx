/* global React */

(function(root) {
  'use strict';
  root.Resources = React.createClass({
    getInitialState: function () {
      return {string: "", lat: "", lng: "", doctors: []};
    },
    handleChange: function(e) {
      e.preventDefault();
      this.setState({string: e.target.value});
    },
    searchDocs: function(e) {
      e.preventDefault();
      root.ResourcesUtil.get(this.state.string, this.state.lat, this.state.lng);
      this.setState({string: ""});
    },
    _onChange: function () {
      this.setState({doctors: ResourcesStore.getDoctors()});
    },
    componentDidMount: function () {
      root.ResourcesStore.addChangeListener(this._onChange);
      navigator.geolocation.getCurrentPosition(function(result){
        var lat = result.coords.latitude.toFixed(2);
        var lng = result.coords.longitude.toFixed(2);
        this.setState({lat: lat, lng: lng});
      }.bind(this));
    },
    componentWillUnmount: function () {
      root.ResourcesStore.removeChangeListener(this._onChange);
    },
    render: function () {
      return(
        <div>
          <div id="htapWidgetAskdoc" className="pull-left" data-color="rgb(238, 245, 250)" style={{height: 600, width: 300}}></div>
          <div id="betterdoctor" className="pull-right">
          <form id="doctorform" onSubmit={this.searchDocs}>
           <div className="form-group">
             <label htmlFor="post_body">Find doctors near you! </label>
             <br/>
             <br/>
             <input
               type="text"
               id="post_body"
               onChange={this.handleChange}
               className="form-control"
               placeholder="Type in a condition"
               value={this.state.string}
             />
           </div>
           <button type="submit" className="btn btn-primary">Find doctors</button>
           <br />
         </form>

          <ul className="list-group">
           {this.state.doctors.map(function(doctor){
             return <li className="list-group-item" key={doctor.uid}> {doctor.profile.first_name} {doctor.profile.last_name}, {doctor.practices[0].name}</li>
           })}
          </ul>
        </div>

        </div>
      );
    }
  });
}(this));

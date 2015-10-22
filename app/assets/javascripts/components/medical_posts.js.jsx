/* global React */

(function(root) {
  'use strict';
  root.MedicalPosts = React.createClass({
    getInitialState: function () {
      return({medicalPosts: []});
    },
    _onChange: function () {
      this.setState({medicalPosts: root.MedicalProfileStore.all()});
    },
    componentDidMount: function () {
      root.MedicalPostUtil.get();
      root.MedicalProfileStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.MedicalProfileStore.removeChangeListener(this._onChange);
    },
    delete: function(id) {
      root.MedicalPostUtil.destroy(id);
    },
    render: function () {
      var that = this;
      return(
         <ul className="list-group">
           {that.state.medicalPosts.map(function(el){
             return <li key={el.id} className="list-group-item">
                      {el.field_name}: {el.field_value}
                      <h6>{jQuery.timeago(el.created_at)}</h6>
                      <a href="/#/profile" onClick={that.delete.bind(that, el.id)}>Delete</a>
                    </li>;
           })}
         </ul>
      );
    }
  });
}(this));

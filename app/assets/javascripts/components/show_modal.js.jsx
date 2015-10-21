/* global React, ReactRouter */
(function(root) {
  'use strict';
  root.ShowModal = React.createClass({
    $modal: function(){
      return $(React.findDOMNode(this.refs.modal));
    },
    componentDidMount: function () {
      this.$modal().on("hidden.bs.modal", ModalActions.clearModal);
      this.$modal().modal('show');
    },
    render: function () {
      return(
        <div ref='modal' className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">More info</h4>
              </div>
              <div className="modal-body">
                <h1>{ this.props.field1 }</h1>
                <h3>{ this.props.field2 }</h3>
              </div>
              <div className="modal-footer">
                <button type="button" data-dismiss="modal" className="btn btn-default">Close</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
}(this));

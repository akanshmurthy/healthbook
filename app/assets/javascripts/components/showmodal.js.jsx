/* global React */

(function(root) {
  'use strict';
  root.ShowModal = React.createClass({
    getInitialState: function(){
      var post = StatusFormStore.findPostById(this.props.params.id) || {id: this.props.params.id, body: 'loading...'};
      return {post: post};
    },
    mixins: [ReactRouter.History],
    returnToIndex: function(){
      this.history.pushState(null, "");
    },
    $modal: function(){
      return $(React.findDOMNode(this.refs.modal));
    },
    postUpdated: function(){
      var post = StatusFormStore.findPostById(this.props.params.id);
      this.setState({post: post});
    },
    componentDidMount: function () {
        this.$modal().on("hidden.bs.modal", this.returnToIndex);
        StatusFormStore.addSinglePostReceivedListener(this.postUpdated);
        StatusFormUtil.getSingle(this.props.params.id);
        //fetch using an API util a single post
        //listen to the change listener
        //upon change, update state with new post from store
        this.$modal().modal('show');
    },
    render: function () {
      var post = this.state.post;
      return(
        <div ref='modal' className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                <h1>POST ID: {post.id}</h1>
                <h3>POST body: {post.body}</h3>
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

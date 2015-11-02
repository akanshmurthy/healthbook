/* global React */

(function(root) {
  'use strict';
  root.MedicalFiles = React.createClass({
    getInitialState: function () {
      return({title: "", urls: root.MedicalFileStore.urls()});
    },
    handleClick: function(e) {
      e.preventDefault();
      var that = this;
      cloudinary.openUploadWidget({ cloud_name: window.CLOUDINARY_OPTIONS.cloud_name, upload_preset: window.CLOUDINARY_OPTIONS.upload_preset},
      function(error, result) {
        if (result) {
          root.MedicalFileUtil.post({title: that.state.title, url_string: result[0].url});
          that.setState({title: ""})
        }
      });

    },
    handleInput: function (e) {
      this.setState({title: e.target.value})
    },
    _onChange: function () {
      this.setState({urls: root.MedicalFileStore.urls()});
    },
    componentDidMount: function () {
      root.MedicalFileUtil.fetch();
      root.MedicalFileStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
      root.MedicalFileStore.removeChangeListener(this._onChange);
    },
    delete: function(id) {
      root.MedicalFileUtil.destroy(id);
    },
    render: function () {
      var that = this;
      return(
        <div>
          <br/>
          <form className="form-inline">
           <div className="form-group">
             <label className="sr-only" htmlFor="title"></label>
             <input
               type="text"
               id="title"
               onChange={this.handleInput}
               className="form-control"
               placeholder="Name of file"
               value={this.state.title}
             />
           </div>
           <button type="submit" className="btn btn-default" onClick={this.handleClick} id="upload_widget_opener">
             Upload file!
          </button>
         </form>
          <ul className="list-group">
          {this.state.urls.reverse().map(function(url){
            return(
              <li key={url.id} className="list-group-item">
                        <span className="glyphicon glyphicon-file"/>
                        <a href={url.url_string}>{url.title}</a>
                        <h6>{jQuery.timeago(url.created_at)}</h6>
                        <a onClick={that.delete.bind(that, url.id)}>Delete</a>
              </li>
            );
          })}
          </ul>
        </div>
      );
    }
  });
}(this));

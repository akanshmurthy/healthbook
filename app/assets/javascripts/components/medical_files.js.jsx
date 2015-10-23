/* global React */

(function(root) {
  'use strict';
  root.MedicalFiles = React.createClass({
    getInitialState: function () {
      return({title: "", urls: root.MedicalFileStore.urls()});
    },
    handleClick: function () {
      var that = this;
      cloudinary.openUploadWidget({ cloud_name: window.CLOUDINARY_OPTIONS.cloud_name, upload_preset: window.CLOUDINARY_OPTIONS.upload_preset},
      function(error, result) {
        if (result) {
          root.MedicalFileUtil.post({title: this.state.title, url_string: result[0].url});
        }
      });
    },
    handleSubmit: function (e) {

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
    render: function () {
      return(
        <div>
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
           <br />
         </form>
          <div onClick={this.handleClick} id="upload_widget_opener" className="uploaded-file">
            Click here to upload!
          </div>
          {this.state.urls.map(function(url){
            return(<div key={url.id} className="child-url">{url.title}</div>)
          })}
        </div>
      );
    }
  });
}(this));

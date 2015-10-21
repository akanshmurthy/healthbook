var ModalManager = React.createClass({
  getInitialState: function(){
    return { modalData: ModalContentStore.modalData() };
  },
  componentDidMount: function(){
    ModalContentStore.addChangeListener(this.modalChanged);
  },
  modalChanged: function(){
    this.setState({ modalData: ModalContentStore.modalData() });
  },
  render: function(){
    var modal = "";
    if (this.state.modalData.visible){
      modal = <ShowModal field1={this.state.modalData.field1} field2={this.state.modalData.field2} />
    }
    return (
      <div>{modal}</div>
    );
  }
});

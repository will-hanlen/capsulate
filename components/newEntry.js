class NewEntry extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      date: new Date().toISOString().slice(0, 10),
      imagePreviewHidden: true,
      imagePreviewSource: "",
      imageButtonPrompt: "Upload Photo",
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePhotoChange(event) {
    this.setState({imagePreviewSource: URL.createObjectURL(event.target.files[0])})
    this.setState({imagePreviewHidden: false})
    this.setState({imageButtonPrompt: "Change Photo"})
  }

  handleTextChange(event) {
    this.setState({text: event.target.value})
  }

  handleDateChange(event) {
    this.setState({date: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    alert("This React form doesn't upload to anywhere yet. There is no database. However, state is handled by this React form in the way that it should be for a production application.")
  }

  render() {

    return (
      <>
          <form className="vertical-flex" onSubmit={this.handleSubmit}>

              <img className="photoCard r0" hidden={this.state.imagePreviewHidden} src={this.state.imagePreviewSource} />

              <label tabIndex="0" className="card r4" htmlFor="file">{this.state.imageButtonPrompt}</label>
              <input id="file" type="file" onChange={this.handlePhotoChange}/>


              <textarea className="card r3" id="text-area" required autoFocus placeholder="Write your entry here..." onChange={this.handleTextChange} tabIndex="0" autoFocus />

              <input className="card r2" type="date" required value={this.state.date} onChange={this.handleDateChange}/>
              <input className="card r0" id="submit" type="submit" value="Upload"/>

          </form>


        <style jsx>{`
          form {
            width: 100%;
          }

          textarea {
            width: 100%;
            height: 15rem;
            line-height: inherit;
          }

          input[type="file"] {
            display: none;
          }

          textarea {
            resize: none;
            font-size: 1rem;
          }

        `}</style>
      </>
    )
  }


}

export default NewEntry

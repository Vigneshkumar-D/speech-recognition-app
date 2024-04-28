import { Button, Flex, Spin, message } from "antd";
import { Component } from "react";
import './speech-recognition.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Spinner } from 'react-bootstrap/Spinner';

class SpeechRecognition extends Component {
    constructor(props) {
      super(props);
      this.state = { transcript: '', isRecordingStarted: false, isRecordingStopped: false };
      this.recognition = new window.webkitSpeechRecognition();
      this.recognition.continuous = true;  
      this.recognition.interimResults = true; 
    }
  
    componentDidMount() {
      this.recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('');
        this.setState({ transcript });
      };
    }
  
    handleStart = () => {     
      this.setState((prevState) => ({isRecordingStarted: !prevState.isRecordingStarted}), () => {
        if(this.state.isRecordingStarted){
            message.success("Recording started...!")
            this.recognition.start();
          }else{
            message.error("Recording already started!")
          }
      }) 
      this.setState({isRecordingStopped: false})
    }
  
    handleStop = () => {
        this.setState((prevState) => ({isRecordingStopped: !prevState.isRecordingStopped}), () => {
            if(this.state.isRecordingStopped){
                message.error("Recording stopper...!");
                this.recognition.stop();
              }else{
                message.error("Recording already stopped!")
              }
          })
          this.setState({isRecordingStarted: false})
    }

    handleSubmit = () => {
        
    }
  
    render() {
      return (
        <div className="main-container">
            <div className="title-con">
                <h1 className="title">Speech Recognition App</h1>
            </div>
          <div className="sub-container">
            <Button className="start-btn" onClick={this.handleStart}>Start</Button>
            <Button className ="stop-btn" onClick={this.handleStop}>Stop</Button>            
          </div>
          <div className="speech-text-con">
            {
                this.state.isRecordingStarted && 
                <button class="btn btn-primary spinner" style={{paddingBottom: "2px", paddingTop:'2px'}} type="button" disabled>
                    <span class="spinner-grow spinner-grow-sm" style={{ color:'',width: ".6rem", height: ".6rem"}} role="status" aria-hidden="true">  </span>
                    <span class="spinner-grow" style={{width: "1.3rem", color:'', height: "1.3rem"}} role="status" aria-hidden="true">  </span>                                        
                    &nbsp;  
                    Recording... 
                </button>
            }
          
            <p className="speech-text">{this.state.transcript}</p>
          </div>
          <Button onClick={this.handleSubmit} className="submit-btn" type="primary">Submit</Button>
        </div>
      );
    }
  }
  export default SpeechRecognition
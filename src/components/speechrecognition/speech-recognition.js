import { Button, Flex, Spin, message } from "antd";
import { Component } from "react";
import './speech-recognition.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      const fetchData = async () => {
          const baseUrl = 'http://localhost:4000/save-speech';
          try {
              const response = await fetch(
                baseUrl,
                  {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ transcript: this.state.transcript }) 
                  }
              );
  
              if (!response.ok) {
                  message.error('Failed to save speech: Error occurred');
                  return;
              }
  
              const blob = await response.blob();
              const url = window.URL.createObjectURL(new Blob([blob]));
  
              const downloadButton = document.getElementById('download');
              downloadButton.onclick = () => {
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', 'Transcripts.xlsx');
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
              };
  
              console.log('Speech saved successfully');
          } catch (error) {
              console.error('Error saving speech:', error.message);
              message.error('Failed to save speech: Error occurred');
          }
      };
      fetchData();
  };
  
  
  
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
                <button className="btn btn-primary spinner" style={{paddingBottom: "2px", paddingTop:'2px'}} type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" style={{ color:'',width: ".6rem", height: ".6rem"}} role="status" aria-hidden="true">  </span>
                    <span className="spinner-grow" style={{width: "1.3rem", color:'', height: "1.3rem"}} role="status" aria-hidden="true">  </span>                                        
                    &nbsp;  
                    Recording... 
                </button>
            }
            <p className="speech-text">{this.state.transcript}</p>
          </div>
          <div className="btn-con">
            <Button onClick={this.handleSubmit} className="submit-btn" type="primary">Submit</Button>
            <Button id="download" className="submit-btn" type="primary">Download</Button>
            </div>
        </div>
      );
    }
  }
  export default SpeechRecognition
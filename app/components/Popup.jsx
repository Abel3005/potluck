import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            time: 'start',
            title: 'Welcome to Quizz',
            text: '이것은 요즘 MZ 세대를 따라잡기 위한 줄임말 퀴즈입니다. <br /><br /> 쓸모 없을 것 같지만 쓸모 있을 수도 있는 사람이 받았으면 좋겠네요 <br /><br /> 올해도 고생많았고 내년에도 화이팅합시다!' ,
            buttonText: '퀴즈 시작' 
        };
        
        this.popupHandle = this.popupHandle.bind(this);
    }
    
    popupHandle() {
        let { time } = this.state;
        
        if(time === 'start'){
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });
            
            this.props.startQuiz();
        } else {            
            location.reload();// restart the application
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            text: 'You have completed the quiz. <br /> You got: <strong>' + this.props.score + '</strong> out of <strong>' +this.props.total +'</strong> questions right.'
        })
    }
    
    createMarkup(text) {
        return {__html: text};
    }
    
    
    render() {
       
        let { title, text, buttonText } = this.state;
        
        let { style } = this.props;
        
        return (
            <div className="popup-container" style={style}>
                <div className="container">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="popup">
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                            <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup

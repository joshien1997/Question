import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView,
} from 'react-native';
import Question from './Question';
import Answer from './Answer';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestion: true,
            questionList: [],
        }
    }
    onKeyPressQuestion = () => {
        this.setState({
            showQuestion: false,
        });
    }
    dataFromQuestionComp = (questions) => {
        debugger;
        this.setState({
            questionList: questions,
        });
    }
    render() {
        const { showQuestion, questionList } = this.state;
        let a = questionList.map((element, index) => {
            return (
                <Text style={{marginLeft: 20, color: 'red', fontSize: 15}} key={index}>{element}</Text>
            );
        })
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                }}
            >
                <ScrollView>
                    {showQuestion ? <Question onKeyPressQuestion={this.onKeyPressQuestion} dataFromQuestionComp= {this.dataFromQuestionComp} /> : null}
                    <View>{a}</View>
                    <Answer />
                </ScrollView>
                
            </View>
        );
    }
}

export default App;

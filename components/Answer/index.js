import React, { Component } from 'react';
import {
    View,
    Text,
    CheckBox,
    TextInput,
} from 'react-native';
import styles from './style/index.css';
class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: '',
        }
    }
    onChangeText = (text) => {
        debugger;
        this.setState({
          answer: text,
        });
    }
    onChange = () => {
        this.setState({
            answer: '',
        });
    }
    render() {
        const { answer } = this.state; 
        return (
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <CheckBox style={{marginLeft: 30}} value={false} onChange={this.onChange}/>
                <TextInput
                    style={styles.inputArea}
                    placeholder='Nhập câu trả lời'
                    multiline={true}
                    underlineColorAndroid='transparent'
                    onChangeText={this.onChangeText}
                    value={answer}
                />
            </View>
        );
    }
}

export default Answer;

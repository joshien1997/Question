
import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style/index.css';
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      questions: [],
    }
  }
  onChangeText = (text) => {
    debugger;
    this.setState({
      question: text
    });
  }
  onAdd = () => {
    debugger;
    let newArray = this.state.questions.slice();
    newArray.push(this.state.question);
    this.setState({
      questions: newArray,
      question: '',
    });
    this.props.onKeyPressQuestion();
    this.props.dataFromQuestionComp(newArray);
  }
  render() {
    const { question } = this.state;
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{ flexDirection: 'row' }}
        >
          <TextInput
            style={styles.inputArea}
            placeholder='Nhập câu hỏi......'
            multiline={true}
            underlineColorAndroid='transparent'
            onChangeText={this.onChangeText}
            value={question}
          />
          <View style={styles.buttonAdd}>
            <Button
              title='Add'
              color='#0080FF'
              onPress={this.onAdd}
            >
              <Text>Add</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

Question.propTypes = {
  onKeyPressQuestion: PropTypes.func,
  dataFromQuestionComp: PropTypes.func,
}

export default Question;

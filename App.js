
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      questions: [],
    }
  }
  onChangeText = (question) => {
    this.setState({
      question: question
    });
  }
  onAdd = () => {
    debugger;
    const newArray = this.state.questions.slice();
    newArray.push(this.state.question);
    this.setState({
      questions: newArray,
      question: '',
    });
  }
  render() {
    let a = this.state.questions.map((q, index) => {
      <Text key={index}>{q}</Text>
    });
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <TextInput
            style={{
              flex: 80,
              margin: 10,
              height: 50,
              borderColor: '#0080FF',
              borderWidth: 1,
              borderRadius: 10,
            }}
            placeholder='Nhập câu hỏi......'
            multiline={true}
            underlineColorAndroid='transparent'
            onChangeText={this.onChangeText}
            value={this.state.question}
          />
          <View
            style={{
              flex: 20,
              height: 100,
              margin: 10,
            }}
          >
            <Button
              title='Add'
              color='#0080FF'
              onPress={this.onAdd}
            >
              <Text>Add</Text>
            </Button>
          </View>
        </View>
        <View>{a}</View>
      </View>
    );
  }
}

export default App;

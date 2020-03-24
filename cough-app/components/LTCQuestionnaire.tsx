import React from 'react';
import { View, TextInput, Image } from 'react-native';

class LTCQuestionnaire extends React.Component {
    state = {
      email: '',
      password: '',
    }

    handleChangeAge = (text) => {
        this.setState({ age: text });
    }

    handleChangeHeight = (text) => {
        this.setState({ height: text });
    }

    render() {
        <>        
        return (
            <TextInput
                // style={styles.textInput}
                placeholder="{I18n.t('Age')}"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={text => this.handleChangeAge(text)}
            />

            <TextInput
                // style={styles.textInput}
                placeholder="{I18n.t('Height')}"
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={text => this.handleChangeHeight(text)}
            />
        )
        </>
    }
}

export default LTCQuestionnaire
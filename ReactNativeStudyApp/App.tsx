/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputField from './components/InputField';
import Checkbox from './components/Checkbox';


function App(): React.JSX.Element {

  const [isAutoLogin, setIsAutoLogin] = useState(false);
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.loginViewStyle}>
        <View style={styles.titleStyle}>
          <Text>95VISIT</Text>
          <Text>방문 예약 서비스</Text>
        </View>
        <View style={styles.loginFormStyle}>
          <InputField title={"아이디"} touched={true} errorText="" placeholder='아이디를 입력해주세요.' />
          <InputField title={"비밀번호"} touched={true} errorText="" placeholder='비밀번호를 입력해주세요.' />
          <View>
            <Checkbox isChecked={isAutoLogin} onChange={(value) => {
              console.log(value);
              setIsAutoLogin(value);
            }} />
          </View>
          <Button title='로그인' />
        </View>
      </View>
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: '#e9ecef',
    justifyContent: "center",
    alignItems: "center",
  },
  loginViewStyle: {
    width: 240,
    height: 140,
  },
  titleStyle: {
    height: 60,
    alignItems: "center"
  },
  loginFormStyle: {
    backgroundColor: "#fff",
    padding: 20
  }
});

export default App;
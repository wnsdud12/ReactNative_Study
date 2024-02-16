import { TextInputProps, View, TextInput, Text, StyleSheet } from "react-native";

interface InputFieldProps extends TextInputProps {
  title?: string;
  touched?: boolean;
  errorText?: string;
}

function InputField({ title, touched, errorText, ...props }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={"#aaa"}
        {...props}
      />
      {touched && errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  input: {

  },
  error: {

  }
});

export default InputField;
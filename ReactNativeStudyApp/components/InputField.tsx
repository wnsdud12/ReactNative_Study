import { TextInputProps, View, TextInput, Text, StyleSheet } from "react-native";

interface InputFieldProps extends TextInputProps {
  title?: string;
  touched?: boolean;
  errorText?: string;
}

function InputField({ title, touched, errorText, ...props }: InputFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <TextInput
        style={styles.input}
        {...props}
      />
      {touched && errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#666"
  },
  input: {
    marginTop: 5,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4
  },
  error: {

  }
});

export default InputField;
// Checkbox.tsx
import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface CheckboxProps {
  isChecked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  children?: React.ReactNode;
}

const Checkbox = (props: CheckboxProps) => {
  const { isChecked, disabled, onChange, children } = props;

  const onPressedHandler = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      height: 13,
      width: 13,
      borderRadius: 2,
      backgroundColor: isChecked ? 'blue' : "white",
      borderWidth: 1,
      borderColor: isChecked ? "blue" : "black",
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      opacity: 0.7
    },
    label: {
      marginLeft: 8,
    },
  });
  return (
     <TouchableOpacity activeOpacity={0.7} onPress={onPressedHandler} style={styles.container}>
      <Icon name={isChecked ? "check" : ""} size={11} color="white" style={styles.checkbox}/>
      <Text style={styles.label}>자동로그인</Text>
    </TouchableOpacity>
  );
}

export default Checkbox;


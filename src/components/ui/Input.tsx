import React, {useState} from 'react';
import {TextInput, View, Text, TextInputProps, ViewStyle} from 'react-native';
import {Colors} from '../../utils/Colors';
import InputStyle from '../../styles/InputStyle';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string | undefined | null;
  borderColor?: string;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  error,
  disabled = false,
  onFocus = () => {},
  onBlur = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle: ViewStyle = {
    pointerEvents: disabled ? 'none' : 'auto',
  };

  const inputContainerStyle: ViewStyle = {
    borderColor: error
      ? Colors.errorColor
      : isFocused
      ? Colors.primary
      : Colors.disabled,
    borderWidth: isFocused || error ? 2 : 1,
  };

  return (
    <View testID="parent" style={containerStyle}>
      {error && (
        <Text testID="errorText" style={InputStyle.errorText}>
          {error}
        </Text>
      )}
      <View
        testID="inputContainer"
        style={[InputStyle.inputContainer, inputContainerStyle]}>
        <TextInput
          testID="textInput"
          style={InputStyle.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            onBlur();
            setIsFocused(false);
          }}
          editable={!disabled}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;

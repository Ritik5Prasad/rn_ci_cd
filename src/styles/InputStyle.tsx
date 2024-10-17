import {StyleSheet} from 'react-native';
import {Colors} from '../utils/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../utils/Fonts';

const InputStyle = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 80,
    marginVertical: 10,
    backgroundColor: Colors.card,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: FONTS.Regular,
    fontSize: RFValue(14),
    color: Colors.white,
    height: 50,
  },

  errorText: {
    color: Colors.errorColor,
    fontFamily: FONTS.Medium,
    marginHorizontal: 8,
    fontSize: RFValue(10),
  },
});
export default InputStyle;

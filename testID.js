import { Platform } from 'react-native';

const testID = id => {
  return Platform.OS === 'android' ? { accessible: true, accessibilityLabel: id } : { testID: id };
};

export default testID;

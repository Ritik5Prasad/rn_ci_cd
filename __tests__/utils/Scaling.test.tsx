
import { Dimensions } from 'react-native';
import { screenHeight, screenWidth } from '../../src/utils/Scaling';

describe('Scaling utility', () => {
  it('should return correct screen width and height', () => {
    const { width, height } = Dimensions.get('window');
    
    expect(screenWidth).toBe(width);
    expect(screenHeight).toBe(height);
  });
});

import { View } from 'react-native';
import React from 'react';

export default ({color, height})=><View style={{
    backgroundColor: color || '#eee',
    height: height || 1,
    width: '100%',
  }}
/>
import React from 'react';
import {View, Text} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';

export default ({state, dispatch}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Text
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        跳转Detail
      </Text>
      <Text
        onPress={() => {
          dispatch(action.add());
        }}>
        点我试试 a:{state.a}
      </Text>
    </View>
  );
};

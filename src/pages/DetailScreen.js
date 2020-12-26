import React from 'react';
import {View, Text} from 'react-native';
import {action} from '../store';
import {useNavigation} from '@react-navigation/native';

export default ({state, dispatch}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Detail</Text>
      <Text
        onPress={() => {
          navigation.goBack();
        }}>
        跳回Home
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

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import colors from '../assets/colors';

const Items = ({navigation}) => {
  return (
    <SafeAreaView className="container px-7 h-full bg-white">
      <Text>Items</Text>
      <CustomButton
        navigation={navigation}
        bgColor={colors.primary}
        textColor={colors.textWhite}
        goto={'Greeting'}
        content={'Greeting'}
      />
    </SafeAreaView>
  );
};

export default Items;

const styles = StyleSheet.create({});

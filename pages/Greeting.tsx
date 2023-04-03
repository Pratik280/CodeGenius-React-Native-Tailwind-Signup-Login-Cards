import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import colors from '../assets/colors';
import Heading from '../components/Heading';

const Greeting = ({navigation}) => {
  return (
    <SafeAreaView className="container px-7 bg-white h-full">
      <View className="flex justify-center items-center mt-24">
        <Image
          source={require('./../assets/hero.png')}
          style={{width: 400, height: 300}}
        />
      </View>
      <Heading content="CodeGenius" />
      <Text className="text-sm opacity-60 text-textDark tracking-tight">
        Where You Unlock Your Coding Potential With Our Wide Range of Expert-Led
        Courses!
      </Text>
      <View className="mt-6">
        <CustomButton
          navigation={navigation}
          bgColor={colors.primary}
          textColor={colors.textWhite}
          goto={'Login'}
          content={'Login'}
        />
        <CustomButton
          navigation={navigation}
          bgColor={colors.bgGray}
          textColor={colors.textDark}
          goto={'Signup'}
          content={'Singup'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Greeting;

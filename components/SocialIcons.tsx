import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SocialIcons = () => {
  return (
    <View className="flex flex-row items-center justify-center">
      <TouchableOpacity className="bg-zinc-200 px-16 py-2 rounded-lg mx-2">
        <Image
          source={require('./../assets/google.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <TouchableOpacity className="bg-zinc-200 px-16 py-2 rounded-lg mx-2">
        <Image
          source={require('./../assets/facebook.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialIcons;

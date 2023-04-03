import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import colors from '../assets/colors';
import SocialIcons from '../components/SocialIcons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView className="container px-7 bg-white h-full">
      <View className="mt-36">
        <Heading content="Welcome Back" />
      </View>
      <View className="mt-4">
        <TextInput
          onChangeText={setEmail}
          placeholder={'Email'}
          placeholderTextColor={colors.textDark}
          value={email}
          className="bg-zinc-200 py-3 rounded-xl pl-5"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={'Password'}
          placeholderTextColor={colors.textDark}
          value={password}
          className="bg-zinc-200 py-3 rounded-xl pl-5 mt-3"
        />
        <TouchableOpacity
          className="flex items-end mt-2"
          onPress={() => navigation.goBack()}>
          <Text className="font-bold text-textDark">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        navigation={navigation}
        bgColor={colors.primary}
        textColor={colors.textWhite}
        goto={'Greeting'}
        content={'Login'}
      />
      <View className="mt-10">
        <Text className="text-center text-textDark">Or Continue With</Text>
        <View className="mt-2">
          <SocialIcons />
        </View>
        <View className="flex flex-row items-center justify-center mt-44">
          <Text className="text-textDark">Does'nt have a accout?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text className="underline text-textDark">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

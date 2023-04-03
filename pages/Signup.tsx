import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import colors from '../assets/colors';
import SocialIcons from '../components/SocialIcons';

const Signup = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView className="container px-7 h-full bg-white">
      <View className="mt-24">
        <Heading content="Create Account" />
      </View>
      <View className="mt-4">
        <TextInput
          onChangeText={setFirstName}
          placeholder={'First Name'}
          placeholderTextColor={colors.textDark}
          value={firstName}
          className="bg-zinc-200 py-3 rounded-xl px-5 text-textgray"
        />
        <TextInput
          onChangeText={setLastName}
          placeholder={'Last Name'}
          placeholderTextColor={colors.textDark}
          value={lastName}
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
          // style={{color: '#000000'}}
        />
        <TextInput
          onChangeText={setEmail}
          placeholder={'Email'}
          placeholderTextColor={colors.textDark}
          value={email}
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={setPassword}
          placeholder={'Password'}
          placeholderTextColor={colors.textDark}
          value={password}
          className="bg-zinc-200 py-3 rounded-xl px-5 mt-3 text-textgray"
        />
        <TouchableOpacity
          className="flex items-end mt-2"
          onPress={() => navigation.goBack()}>
          <Text className="font-bold text-textgray">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <CustomButton
        navigation={navigation}
        bgColor={colors.primary}
        textColor={colors.textWhite}
        goto={'Greeting'}
        content={'Signup'}
      />
      <View className="mt-10">
        <Text className="text-center text-textgray">Or Continue With</Text>
        <View className="mt-2">
          <SocialIcons />
        </View>
        <View className="flex flex-row items-center justify-center mt-24">
          <Text className="text-textgray">Already have a accout?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="underline text-textgray">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

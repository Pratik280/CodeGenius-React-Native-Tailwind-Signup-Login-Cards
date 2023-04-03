import {Text} from 'react-native';
import React from 'react';

export default function Heading(props) {
  return (
    <Text className="text-4xl font-extrabold text-textDark">
      {props.content}
    </Text>
  );
}

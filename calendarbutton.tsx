import React from 'react';
import {NativeModules, Button} from 'react-native';
import CalendarModule from './CalendarModule';

//const {CalendarModule} = NativeModules;

const CalendarButton = () => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModule.createCalendarEvent('TESTNAME', 'TESTLOCATION');
    CalendarModule.showToast('Native Module was called');
  };

  return (
    <Button
      title="Click to show toast message"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default CalendarButton;
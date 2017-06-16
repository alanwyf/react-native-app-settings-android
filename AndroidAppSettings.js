import React from 'react';
import {
  NativeModules
} from 'react-native';

const RCTAppSettings = NativeModules.AndroidAppSettings;

const AndroidAppSettings = {
  open: function (): void {
    RCTAppSettings.open();
  },

};

module.exports = AndroidAppSettings;

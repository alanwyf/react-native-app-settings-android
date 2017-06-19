import React from 'react';
import {
  NativeModules
} from 'react-native';

const RCTAppSettings = NativeModules.AndroidAppSettings;

const AndroidAppSettings = {
  open: function (): void {
    RCTAppSettings.open();
  },
  openGPS: function (): void {
    RCTAppSettings.openGPS();
  },
};

module.exports = AndroidAppSettings;

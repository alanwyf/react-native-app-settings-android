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
  fineGPS: function (): boolean {
    return RCTAppSettings.fineGPS;
  },
};

module.exports = AndroidAppSettings;

/**
 * @format
 */

import 'react-native-get-random-values';
import React from 'react';
import {AppRegistry} from 'react-native';
import {AppWrapper} from './app/AppWrapper';
import {name as appName} from './app.json';

const App = () => <AppWrapper />;

AppRegistry.registerComponent(appName, () => App);

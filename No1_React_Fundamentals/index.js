/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Cafe from './MyState';
import PizzaTranslator from './HandlingTextInput';

AppRegistry.registerComponent(appName, () => PizzaTranslator);

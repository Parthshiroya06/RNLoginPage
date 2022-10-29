import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {formItems} from '@constants';
import I18n from './i18n';

const localizetion = params => {
  return I18n.t(params);
};

export default localizetion;

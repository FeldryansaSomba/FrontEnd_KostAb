import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Title = ({title, fontfamily = 'Montserrat-Bold', fontsize = 22}) => {
  return <Text style={styles.text(fontfamily, fontsize)}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: (fontfamily, fontsize) => ({
    fontFamily: fontfamily,
    fontSize: fontsize,
    color: '#313D6A',
    alignSelf: 'center',
  }),
});

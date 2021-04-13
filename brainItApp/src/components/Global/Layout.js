import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {primaryColor} from '../../colors';

const Layout = ({children}) => {
  return (
    <>
      <StatusBar
        translucent={false}
        backgroundColor={primaryColor}
        barStyle={'light-content'}
      />
      <SafeAreaView forceInset={{top: 'always'}} style={styles.mainWrapper}>
        {children}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: primaryColor,
  },
});

export default Layout;

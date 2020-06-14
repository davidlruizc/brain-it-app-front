import React, { useState } from 'react';
import {
  ViroVRSceneNavigator
} from 'react-viro';

const InitialVRScene = require('../../HelloWorldScene');
const UNSET = "UNSET";
const defaultNavigatorType = UNSET;

const sharedProps = {
  apiKey: "API_KEY_HERE",
}

const VREnvironment = () => {
  const [navigatorType, setNavigatorType] = useState(defaultNavigatorType);
  const [sharedProps, setSharedProps] = useState(sharedProps);

  const exitViro = () => {
    setNavigatorType(UNSET);
  };

  return (
    <ViroVRSceneNavigator
      {...sharedProps}
      initialScene={{scene: InitialVRScene}}
      onExitViro={exitViro}/>
  );
};

export default VREnvironment;

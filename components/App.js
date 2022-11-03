// new

import React from 'react';
import { Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}

export default YourApp;

// old

import { Welcome } from './Welcome.js';

const e = React.createElement;

// const domContainer = document.querySelector('#app');
// const root = ReactDOM.createRoot(domContainer);
// root.render(<div>Hello!</div>);

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Welcome));
// root.render(e(LikeButton));
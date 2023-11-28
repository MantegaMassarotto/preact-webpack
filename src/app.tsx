import React, { useRef } from 'react';
import { NativeBaseProvider, Text, Box } from 'native-base';

import { createContext } from 'preact';

import Animated, {
  useAnimatedScrollHandler,
  useAnimatedRef,
} from 'react-native-reanimated';

import { IStackProps, Stack } from 'native-base';

import { useContext } from 'preact/hooks';

import { effect } from '@preact/signals';
import Scroll from './Scroll';

import { scroll } from './signals/scroll';

// const scroll = signal(0);

const App: React.FC = () => {

  effect(() => {
    console.log('SCROLL', scroll.value);
  })

  return (
    <NativeBaseProvider>
      <>
        <Scroll />
      </>
    </NativeBaseProvider>
  );
};

// function Scroll(scroll) {
//   const scrollRef = useRef<any>();

//   // const username = useContext(Username); // "Bob"

//   const scrollHandler = useAnimatedScrollHandler({
//     onScroll: (e) => {
//       console.log(e);
//       if (!scrollRef.current) {
//         return;
//       }

//       scroll.value = e.contentOffset.y;
//       // const scrollBottomedOut = scrolledTopOrBottom(scrollRef.current).bottom;

//       console.log(e.contentOffset.y);
//     },
//   });

//   return (
//     <Animated.ScrollView
//       style={{ height: 500 }}
//       ref={scrollRef}
//       onScroll={scrollHandler}
//       scrollEventThrottle={16}
//     >
//       {[...Array(100)].map((_, i) => (
//         <Text
//           style={{
//             fontSize: 40,
//             padding: 10,
//             textAlign: 'center',
//           }}
//           key={i}
//         >
//           {i}
//         </Text>
//       ))}
//     </Animated.ScrollView>
//   );
// }

function Header() {
  // const aref = useAnimatedRef<Animated.ScrollView>();
  // access the current username from context:
  // const scroll = useContext(AppState); // "Bob"
  // console.log(scroll);
  return <span>HEADER</span>;
}

export default App;

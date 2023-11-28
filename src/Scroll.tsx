import Animated, { useAnimatedScrollHandler } from 'react-native-reanimated';
import React, { useRef } from 'react';
import { Text } from 'native-base';

import { scroll } from './signals/scroll';

const Scroll: React.FC = () => {
  const scrollRef = useRef<any>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      // console.log(e);
      if (!scrollRef.current) {
        return;
      }

      scroll.value = e.contentOffset.y;
      // const scrollBottomedOut = scrolledTopOrBottom(scrollRef.current).bottom;

      // console.log(e.contentOffset.y);
    },
  });

  return (
    // const username = useContext(Username); // "Bob"

    <Animated.ScrollView
      style={{ height: 500 }}
      ref={scrollRef}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {[...Array(100)].map((_, i) => (
        <Text
          style={{
            fontSize: 40,
            padding: 10,
            textAlign: 'center',
          }}
          key={i}
        >
          {i}
        </Text>
      ))}
    </Animated.ScrollView>
  );
};

export default Scroll;

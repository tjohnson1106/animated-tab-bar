import React, { PureComponent } from "react";
import { SafeAreaView, Dimensions, StyleSheet, Animated, View } from "react-native";
import { Svg } from "expo";
import * as shape from "d3-shape";

import StaticTabBar, { tabHeight as height } from "./StaticTabBar";

interface TabBarProps {}

const tabs = [
  { name: "grid" },
  { name: "list" },
  { name: "refresh-cw" },
  { name: "box" },
  { name: "user" }
];

const { width } = Dimensions.get("window");

const tabWidth = width / tabs.length;
const { Path } = Svg;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const left = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([{ x: 0, y: 0 }, { x: width, y: 0 }]);

const tab = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)
  .curve(shape.curveBasis)([
  { x: width, y: 0 },
  { x: width + 5, y: 0 },
  { x: width + 10, y: 10 },
  { x: width + 15, y: height },
  { x: width + tabWidth - 15, y: height },
  { x: width + tabWidth - 10, y: 10 },
  { x: width + tabWidth - 5, y: 0 },
  { x: width + tabWidth, y: 0 }
]);

const right = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: width + tabWidth, y: 0 },
  { x: width * 2, y: 0 },
  { x: width * 2, y: height },
  { x: 0, y: height },
  { x: 0, y: 0 }
]);

const d = `${left} ${tab} ${right}`;

class TabBar extends PureComponent<TabBarProps> {
  state = {};
  render() {
    return (
      <>
        <View {...{ ...{ height, width } }}>
          <AnimatedSvg width={width * 2} {...{ height }}>
            <Path fill="white" {...{ d }} />
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabBar {...{ tabs }} />
          </View>
        </View>
        <SafeAreaView style={styles.safeArea} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white"
  }
});

export default TabBar;

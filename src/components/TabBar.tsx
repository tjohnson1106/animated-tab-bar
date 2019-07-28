import React, { PureComponent } from "react";
import { View, SafeAreaView, Dimensions } from "react-native";
import { Svg } from "expo";
import * as shape from "d3-shape";

interface TabBarProps {}

const tabs = [
  { name: "grid" },
  { name: "list" },
  { name: "refresh-cw" },
  { name: "box" },
  { name: "user" }
];
const tabWidth = width / tabs.length;
const width = Dimensions.get("window");
const height = 64;
const { Path } = Svg;

const left = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([{ x: 0, y: 0 }, { x: width, y: 0 }]);

const right = shape
  .line()
  .x((d) => d.x)
  .y((d) => d.y)([
  { x: width + tabWidth, y: 0 },
  { x: width * 2, y: 0 },
  { x: width * 2, y: height },
  { x: 0, y: 0 }
]);

const d = `${left} ${tab} ${right}`;

class TabBar extends Component<TabBarProps> {
  state = {};
  render() {
    return <View>{}</View>;
  }
}

export default TabBar;

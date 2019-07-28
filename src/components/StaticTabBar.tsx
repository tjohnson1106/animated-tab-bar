import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface Tab {
  name: string;
}

interface StaticTabBarProps {
  tabs: Tab[];
}

export const tabHeight = 64;

class StaticTabBar extends Component<StaticTabBarProps> {
  state = {};
  render() {
    const { tabs } = this.props;
    return (
      <View style={styles.root}>
        {tabs.map(({ name }, key) => (
          <TouchableWithoutFeedback {...{ key }}>
            <View style={styles.tab}>
              <Icon size={25} {...{ name }} />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row"
  },
  tab: {
    flex: 1,
    height: tabHeight,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default StaticTabBar;

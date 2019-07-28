import React, { Component } from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Animated } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

interface Tab {
  name: string;
}

interface StaticTabBarProps {
  tabs: Tab[];
  value: Animated.Value;
}

export const tabHeight = 64;

class StaticTabBar extends Component<StaticTabBarProps> {
  onPress = (index: number) => {
    const { value, tabs } = this.props;
    const tabWidth = width / tabs.length;
    Animated.spring({
      toValue: -width + tabWidth + index,
      useNativeDriver: true
    }).start();
  };

  render() {
    const { tabs } = this.props;
    return (
      <View style={styles.root}>
        {tabs.map(({ name }, key) => (
          <TouchableWithoutFeedback onPress={() => this.onPress(key)} {...{ key }}>
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

import { Component } from "react";
import { Button, Text, StyleSheet, View, TextInput } from "react-native-web";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };

  increment() {
    this.setState({ count: this.state.count + this.state.step });
  }
  decrement() {
    if (this.state.count - this.state.step > 0) {
      this.setState({ count: this.state.count - this.state.step });
    } else {
      this.setState({ count: 0 });
    }
  }
  alteraStep(e) {
    this.setState({ step: parseInt(e.nativeEvent.text) });
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text>Step:</Text>
        <TextInput
          value={this.state.step.toString()}
          onChange={(e) => this.alteraStep(e)}
          inputMode="numeric"
          keyboardType="numeric"
          style={styles.stepInput}
        />
        <Text>Contador:</Text>
        <Text style={styles.countText}>{this.state.count}</Text>
        <Button
          style={styles.countButton}
          onPress={() => this.increment()}
          title="+"
        />
        <Button
          style={styles.countButton}
          onPress={() => this.decrement()}
          title="-"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    margin: 2,
  },
  stepInput: {
    color: "darkred",
    fontWeight: "bolder",
  },
  countText: {
    color: "darkred",
    fontWeight: "bolder",
  },
});

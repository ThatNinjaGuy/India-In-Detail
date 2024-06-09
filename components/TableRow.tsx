import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ElectionData {
  constituencyName: string;
  state: string;
  winner: string;
  winnerVotes: number;
  winnerVotePercent: number;
  winnerMarginVotes: number;
  marginVotePercent: number;
  firstRunnerUp: string;
  firstRunnerUpVotes: number;
  firstRunnerUpVotePercent: number;
  firstRunnerUpMarginVotes: number;
  firstRunnerUpMarginVotePercent: number;
  secondRunnerUp: string;
  secondRunnerUpVotes: number;
  secondRunnerUpVotePercent: number;
  secondRunnerUpMarginVotes: number;
  secondRunnerUpMarginVotePercent: number;
}

const TableRow = ({ item }: { item: ElectionData }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.constituencyName}</Text>
      <Text style={styles.cell}>{item.state}</Text>
      <Text style={styles.cell}>{item.winner}</Text>
      <Text style={styles.cell}>{item.winnerVotes}</Text>
      <Text style={styles.cell}>{item.winnerVotePercent}</Text>
      <Text style={styles.cell}>{item.winnerMarginVotes}</Text>
      <Text style={styles.cell}>{item.marginVotePercent}</Text>
      <Text style={styles.cell}>{item.firstRunnerUp}</Text>
      <Text style={styles.cell}>{item.firstRunnerUpVotes}</Text>
      <Text style={styles.cell}>{item.firstRunnerUpVotePercent}</Text>
      <Text style={styles.cell}>{item.firstRunnerUpMarginVotes}</Text>
      <Text style={styles.cell}>{item.firstRunnerUpMarginVotePercent}</Text>
      <Text style={styles.cell}>{item.secondRunnerUp}</Text>
      <Text style={styles.cell}>{item.secondRunnerUpVotes}</Text>
      <Text style={styles.cell}>{item.secondRunnerUpVotePercent}</Text>
      <Text style={styles.cell}>{item.secondRunnerUpMarginVotes}</Text>
      <Text style={styles.cell}>{item.secondRunnerUpMarginVotePercent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    width: 150,
    textAlign: "center",
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default TableRow;

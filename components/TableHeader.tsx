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

const TableHeader = ({
  sortColumn,
}: {
  sortColumn: (column: keyof ElectionData) => void;
}) => {
  return (
    <View style={styles.tableHeader}>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("constituencyName")}
      >
        Constituency
      </Text>
      <Text style={styles.headerCell} onPress={() => sortColumn("state")}>
        State
      </Text>
      <Text style={styles.headerCell} onPress={() => sortColumn("winner")}>
        Winner
      </Text>
      <Text style={styles.headerCell} onPress={() => sortColumn("winnerVotes")}>
        Winner Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("winnerVotePercent")}
      >
        Winner Vote %
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("winnerMarginVotes")}
      >
        Winner Margin Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("marginVotePercent")}
      >
        Margin Vote %
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("firstRunnerUp")}
      >
        1st Runner Up
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("firstRunnerUpVotes")}
      >
        1st Runner Up Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("firstRunnerUpVotePercent")}
      >
        1st Runner Up Vote %
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("firstRunnerUpMarginVotes")}
      >
        1st Runner Up Margin Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("firstRunnerUpMarginVotePercent")}
      >
        1st Runner Up Margin Vote %
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("secondRunnerUp")}
      >
        2nd Runner Up
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("secondRunnerUpVotes")}
      >
        2nd Runner Up Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("secondRunnerUpVotePercent")}
      >
        2nd Runner Up Vote %
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("secondRunnerUpMarginVotes")}
      >
        2nd Runner Up Margin Votes
      </Text>
      <Text
        style={styles.headerCell}
        onPress={() => sortColumn("secondRunnerUpMarginVotePercent")}
      >
        2nd Runner Up Margin Vote %
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f1f1f1",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerCell: {
    fontWeight: "bold",
    width: 150,
    textAlign: "center",
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
});

export default TableHeader;

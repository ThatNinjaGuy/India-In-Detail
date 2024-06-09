import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  View,
  TextInput,
} from "react-native";
import TableHeader from "@/components/TableHeader";
import TableRow from "@/components/TableRow";
import useElectionData from "@/components/useElectionData";

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

export default function TabOneScreen() {
  const data = useElectionData();
  const [sortedData, setSortedData] = useState<ElectionData[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const sortColumn = (column: keyof ElectionData) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };

  const filterData = (text: string) => {
    setSearchText(text);
    const filtered = data.filter(
      (item) =>
        item.state.toLowerCase().includes(text.toLowerCase()) ||
        item.constituencyName.toLowerCase().includes(text.toLowerCase())
    );
    setSortedData(filtered);
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Text style={styles.title}>Election Results 2024</Text>
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={filterData}
          placeholder="Search by state or constituency"
        />
        <TableHeader sortColumn={sortColumn} />
        <ScrollView>
          <FlatList
            data={sortedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <TableRow item={item} />}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

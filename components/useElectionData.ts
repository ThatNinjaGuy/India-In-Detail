import { useEffect, useState } from "react";
import { ELECTION_DATA } from "./data";

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

const formatNumber = (num: number) => {
  //   return num ? parseFloat(num.toFixed(2)) : num;
  return num;
};

const useElectionData = () => {
  const [data, setData] = useState<ElectionData[]>([]);

  useEffect(() => {
    const loadData = () => {
      const formattedData = ELECTION_DATA.map((item: any) => ({
        constituencyName: item["Constituency Name"],
        state: item["State"],
        winner: item["Winner"],
        winnerVotes: formatNumber(item["Winner Votes"]),
        winnerVotePercent: formatNumber(item["Winner Vote %"]),
        winnerMarginVotes: formatNumber(item["Winner Margin Votes"]),
        marginVotePercent: formatNumber(item["Margin Vote %"]),
        firstRunnerUp: item["1st Runner Up"],
        firstRunnerUpVotes: formatNumber(item["1st Runner Up Votes"]),
        firstRunnerUpVotePercent: formatNumber(item["1st Runner Up Vote %"]),
        firstRunnerUpMarginVotes: formatNumber(
          item["1st Runner Up Margin Votes"]
        ),
        firstRunnerUpMarginVotePercent: formatNumber(
          item["1st Runner Up Margin Vote %"]
        ),
        secondRunnerUp: item["2nd Runner Up"],
        secondRunnerUpVotes: formatNumber(item["2nd Runner Up Votes"]),
        secondRunnerUpVotePercent: formatNumber(item["2nd Runner Up Vote %"]),
        secondRunnerUpMarginVotes: formatNumber(
          item["2nd Runner Up Margin Votes"]
        ),
        secondRunnerUpMarginVotePercent: formatNumber(
          item["2nd Runner Up Margin Vote %"]
        ),
      }));
      setData(formattedData);
    };

    loadData();
  }, []);

  return data;
};

export default useElectionData;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Papa from "papaparse";

// interface ElectionData {
//   constituencyName: string;
//   state: string;
//   winner: string;
//   winnerVotes: number;
//   winnerVotePercent: number;
//   winnerMarginVotes: number;
//   marginVotePercent: number;
//   firstRunnerUp: string;
//   firstRunnerUpVotes: number;
//   firstRunnerUpVotePercent: number;
//   firstRunnerUpMarginVotes: number;
//   firstRunnerUpMarginVotePercent: number;
//   secondRunnerUp: string;
//   secondRunnerUpVotes: number;
//   secondRunnerUpVotePercent: number;
//   secondRunnerUpMarginVotes: number;
//   secondRunnerUpMarginVotePercent: number;
// }

// const formatNumber = (num: number) => {
//   return num ? parseFloat(num.toFixed(2)) : num;
// };

// const useElectionData = () => {
//   const [data, setData] = useState<ElectionData[]>([]);

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const response = await axios.get(
//           "http://127.0.0.1:8080/election_results2024.csv"
//         );
//         const csvData = response.data;

//         Papa.parse<ElectionData>(csvData, {
//           header: true,
//           dynamicTyping: true,
//           complete: (results) => {
//             const formattedData = results.data.map((item: any) => ({
//               constituencyName: item["Constituency Name"],
//               state: item["State"],
//               winner: item["Winner"],
//               winnerVotes: formatNumber(item["Winner Votes"]),
//               winnerVotePercent: formatNumber(item["Winner Vote %"]),
//               winnerMarginVotes: formatNumber(item["Winner Margin Votes"]),
//               marginVotePercent: formatNumber(item["Margin Vote %"]),
//               firstRunnerUp: item["1st Runner Up"],
//               firstRunnerUpVotes: formatNumber(item["1st Runner Up Votes"]),
//               firstRunnerUpVotePercent: formatNumber(
//                 item["1st Runner Up Vote %"]
//               ),
//               firstRunnerUpMarginVotes: formatNumber(
//                 item["1st Runner Up Margin Votes"]
//               ),
//               firstRunnerUpMarginVotePercent: formatNumber(
//                 item["1st Runner Up Margin Vote %"]
//               ),
//               secondRunnerUp: item["2nd Runner Up"],
//               secondRunnerUpVotes: formatNumber(item["2nd Runner Up Votes"]),
//               secondRunnerUpVotePercent: formatNumber(
//                 item["2nd Runner Up Vote %"]
//               ),
//               secondRunnerUpMarginVotes: formatNumber(
//                 item["2nd Runner Up Margin Votes"]
//               ),
//               secondRunnerUpMarginVotePercent: formatNumber(
//                 item["2nd Runner Up Margin Vote %"]
//               ),
//             }));
//             setData(formattedData);
//           },
//         });
//       } catch (error) {
//         console.error("Error reading file: ", error);
//       }
//     };

//     loadData();
//   }, []);

//   return data;
// };

// export default useElectionData;

# Election Results Mobile App

This is a React Native mobile application that displays election results. The app reads data from a local JSON file and presents it in a scrollable table format with sorting and filtering functionalities.

## Features

- Display election results in a scrollable table format
- Sort results by different columns
- Filter results by state or constituency name

## Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn
- Expo CLI
- Genymotion (for Android emulator)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/election-results-mobile-app.git
cd election-results-mobile-app
```

## Install Dependencies

```bash
npm install
# or
yarn install
```

## Running the App

Start the Expo development server:

```bash
npx expo start
```

## Directory Structure

election-results-mobile-app
├── assets
│   └── data
│       └── election_results2024.json
├── components
│   ├── TableHeader.tsx
│   ├── TableRow.tsx
│   └── useElectionData.ts
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md

## File Descriptions

- `assets/data/election_results2024.json`: Contains the election results data in JSON format.
- `components/TableHeader.tsx`: Component for rendering the table header with sortable columns.
- `components/TableRow.tsx`: Component for rendering each row of election data.
- `components/useElectionData.ts`: Custom hook for loading and formatting election data from the JSON file.
- `App.tsx`: Main entry point of the application.
- `tsconfig.json`: TypeScript configuration file.

## Sample Data

`assets/data/election_results2024.json`:

```json
[
    {
        "Constituency Name": "AJMER",
        "State": "RAJASTHAN",
        "Winner": "Bharatiya Janata Party",
        "Winner Votes": 747462,
        "Winner Vote %": 62.23,
        "Winner Margin Votes": 329991,
        "Margin Vote %": 27.47,
        "1st Runner Up": "Indian National Congress",
        "1st Runner Up Votes": 417471,
        "1st Runner Up Vote %": 34.76,
        "1st Runner Up Margin Votes": 412527,
        "1st Runner Up Margin Vote %": 34.35,
        "2nd Runner Up": "Bahujan Samaj Party",
        "2nd Runner Up Votes": 4944,
        "2nd Runner Up Vote %": 0.41,
        "2nd Runner Up Margin Votes": 571,
        "2nd Runner Up Margin Vote %": 0.05
    }
    // Add more entries as needed
]
```

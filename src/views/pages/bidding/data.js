const dataCountries = [
  { countryName: "Australia", countryId: 1 },
  { countryName: "Canada", countryId: 2 },
  { countryName: "New Zealand", countryId: 3 },
];

const dataStates = [
  { stateName: "New South Wales", stateId: 1, countryId: 1 },
  { stateName: "Queensland", stateId: 2, countryId: 1 },
  { stateName: "North Island", stateId: 3, countryId: 2 },
  { stateName: "South Island", stateId: 4, countryId: 2 },
  { stateName: "British Columbia", stateId: 5, countryId: 3 },
  { stateName: "Alberta", stateId: 6, countryId: 3 },
];

const dataCities = [
  { cityName: "Sydney", cityId: 1, stateId: 1 },
  { cityName: "Newcastle", cityId: 2, stateId: 1 },
  { cityName: "Broken Hill", cityId: 3, stateId: 1 },
  { cityName: "Wollongong", cityId: 4, stateId: 1 },
  { cityName: "Brisbane", cityId: 5, stateId: 2 },
  { cityName: "Gold Coast", cityId: 6, stateId: 2 },
  { cityName: "Cairns", cityId: 7, stateId: 2 },
  { cityName: "Townsville", cityId: 8, stateId: 2 },
  { cityName: "Auckland", cityId: 9, stateId: 3 },
  { cityName: "Waikato", cityId: 10, stateId: 3 },
  { cityName: "Taranaki", cityId: 11, stateId: 3 },
  { cityName: "Wellington", cityId: 12, stateId: 3 },
  { cityName: "Canterbuy", cityId: 13, stateId: 4 },
  { cityName: "Christchurch", cityId: 14, stateId: 4 },
  { cityName: "Southland", cityId: 15, stateId: 4 },
  { cityName: "Marlborough", cityId: 16, stateId: 4 },
  { cityName: "Vancouver", cityId: 17, stateId: 5 },
  { cityName: "Victoria", cityId: 18, stateId: 5 },
  { cityName: "Kelowna", cityId: 19, stateId: 5 },
  { cityName: "Surrey", cityId: 20, stateId: 5 },
  { cityName: "Calgary", cityId: 21, stateId: 6 },
  { cityName: "Edmonton", cityId: 22, stateId: 6 },
  { cityName: "Lethbridge", cityId: 23, stateId: 6 },
  { cityName: "Airdrie", cityId: 24, stateId: 6 },
];

export { dataCountries, dataStates, dataCities };

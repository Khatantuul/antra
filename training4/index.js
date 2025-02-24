const countries = [
    { id: 1, name: "USA", population: 331002651, continent: "North America" },
    { id: 2, name: "Canada", population: 37742154, continent: "North America" },
    { id: 3, name: "Mexico", population: 128932753, continent: "North America" },

    { id: 4, name: "India", population: 1380004385, continent: "Asia" },
    { id: 5, name: "China", population: 1439323776, continent: "Asia" },
    { id: 6, name: "Japan", population: 126476461, continent: "Asia" },
    { id: 7, name: "Indonesia", population: 273523615, continent: "Asia" },
  
    { id: 8, name: "Brazil", population: 212559417, continent: "South America" },
    { id: 9, name: "Argentina", population: 45195774, continent: "South America" },
    { id: 10, name: "Colombia", population: 50882891, continent: "South America" },

    { id: 11, name: "Germany", population: 83783942, continent: "Europe" },
    { id: 12, name: "France", population: 65273511, continent: "Europe" },
    { id: 13, name: "Italy", population: 60461826, continent: "Europe" },
    { id: 14, name: "Spain", population: 46733038, continent: "Europe" },
  
    { id: 15, name: "Nigeria", population: 206139589, continent: "Africa" },
    { id: 16, name: "Ethiopia", population: 114963588, continent: "Africa" },
    { id: 17, name: "Egypt", population: 102334404, continent: "Africa" },
    { id: 18, name: "South Africa", population: 59308690, continent: "Africa" },
  
    { id: 19, name: "Australia", population: 25499884, continent: "Oceania" },
    { id: 20, name: "New Zealand", population: 4822233, continent: "Oceania" },
  ];

  //filter
  const countriesInAsia = countries.filter((country)=>country.continent === 'Asia')
  console.log(countriesInAsia);
  
  //map
  const countryNames = countries.map((country)=>country.name)
  console.log(countryNames);
  
  //find
  const largestPopulation = countries.find((country) => country.population > 1400000000);
  console.log(largestPopulation);
  
  //forEach
  countries.forEach((country)=>{
    console.log(`${country.name} is located in ${country.continent}`);
  })

  //some
  const hasLessThan100Millpeople = countries.some((country)=>country.population <= 100_000_000)
  console.log(hasLessThan100Millpeople);

  //every
  const everyCountryHas500Mill = countries.every((country)=>country.population > 500_000_000)
  console.log(everyCountryHas500Mill);
  
  //reduce
  const allPopulationOfOceania = countries.reduce((acc,country) => {
    if(country.continent === 'Oceania'){
        acc += country.population
    }
    return acc;
  },0)
  console.log(allPopulationOfOceania);
  
  //includes
  const hasAustria = countries.map((country)=>country.name).includes('Austria')
  console.log(hasAustria);
  
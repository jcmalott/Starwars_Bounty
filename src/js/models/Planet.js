import axios from 'axios';

export default class Planet {
  constructor() {
  };

  async getPlanets() {
    try {
      const results = await axios('https://swapi.dev/api/planets/');
      this.planets = (results.data.results);
    } catch(error) {
      console.log(error);
      alert(error);
    }
  }
}

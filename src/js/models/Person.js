import axios from 'axios';

export default class Person {
  constructor() {

  };

  async getPerson(id) {
    try {
      const result = await axios(`https://swapi.dev/api/people/${id}`);
      console.log(result);
    } catch(error) {
      console.log(error);
      alert(error);
    }
  }
}

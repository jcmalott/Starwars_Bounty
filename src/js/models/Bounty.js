import axios from 'axios';
import uniqid from 'uniqid';

export default class Bounty {
  constructor() {
    this.sith = ['Darth Vader'];
  };

  async getProfiles() {
    try {
      const results = await axios('https://swapi.dev/api/people/');

      // delete any results that contain a sith
      this.sith.forEach(name => {
        const index = results.data.results.findIndex(result => result.name === name);
        if(index !== -1){
          results.data.results.splice(index, 1);
        }
      });

      this.addBounties(results.data.results);
    } catch(error) {
      console.log(error);
      alert(error);
    }
  }

  addBounties(profiles) {
    const newProfiles = [];

    profiles.forEach((profile, i) => {
      if(profile){
        const objProfile = {
          id: i,
          name: profile.name,
          eyeColor: profile.eye_color,
          gender: profile.gender,
          hairColor: profile.hair_color,
          height: profile.height,
          skinColor: profile.skin_color
        };

        newProfiles.push(objProfile);
      }
    });

    this.profiles = newProfiles;
  }
}

import Bounty from './models/Bounty';
import BountyList from './models/BountyList';
import Planet from './models/Planet';
import Person from './models/Person';
import * as bountyView from './views/bountyView';

import {DOMStrings, renderLoader, clearLoader} from './views/base';

const state = {};

// at all dimensions container loads correctly

// EXTRA:
// Accepted contract list
// - accepted contract wheel
// - once selected brings you to that profile
// store in local storage

const controlBounty = async (id = 0) => {
  state.bounty = new Bounty();
  state.planet = new Planet();

  try {
    await state.bounty.getProfiles();
    await state.planet.getPlanets();
    if(id < state.bounty.profiles.length) {
      bountyView.displayProfile(state.bounty.profiles[id], (state.bountyList.checkList(id) !== -1), state.planet.planets[id].name);
    } else {
      console.log('Warning');
      bountyView.displayWarning(true);
    }
    clearLoader();
  } catch(error) {
    console.log(error);
    alert(error);
  }
};

DOMStrings.btnContainer.addEventListener('click', event => {
  const btn = event.target.closest('.btn_arrow');
  if(btn) {
    const gotoProfile = parseInt(btn.dataset.goto);
    bountyView.deleteProfile();
    bountyView.displayProfile(state.bounty.profiles[gotoProfile], (state.bountyList.checkList(gotoProfile) !== -1), state.planet.planets[gotoProfile].name);
  }
});

DOMStrings.btnAccept.addEventListener('click', () => {
  let id = window.location.hash.replace('#', '');
  if(id.length === 0) id = 0;

  const isInList = state.bountyList.checkList(parseInt(id, 10));
  if(isInList === -1) {
    console.log('add bounty');
    state.bountyList.addBounty(parseInt(id, 10));
    bountyView.updateContractBtn(true);
  } else {
    console.log('remove bounty');
    state.bountyList.removeBounty(isInList);
    bountyView.updateContractBtn(false);
  }
});

// load contract on refresh
// save and load list on refresh
window.addEventListener('load', (event) => {
  const id = window.location.hash.replace('#', '');

  // localStorage.clear();
  state.bountyList = new BountyList();
  state.bountyList.readStorage();
  controlBounty((id.length === 0) ? 0 : parseInt(id, 10));

});

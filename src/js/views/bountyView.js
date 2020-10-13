import {DOMStrings} from './base';

export const displayProfile = (profile, isBounty, planetName) => {
  displayProfileContainer();
  displayPicture(profile.name);

  const profileName = `<p>${profile.name}</p>`;
  const profileInfo = `
    <ul class="info_profile_info">
      <li><p>${formatHeight(profile.height)} ft</p></li>
      <li><p>${profile.hairColor}</p></li>
      <li><p>${profile.skinColor}</p></li>
      <li><p>${profile.eyeColor}</p></li>
      <li><p>${profile.gender}</p></li>
      <li><p>${planetName}</p></li>
    </ul>
  `;

  displayButtons(profile.id);
  updateContractBtn(isBounty);

  DOMStrings.profileName.insertAdjacentHTML('afterbegin', profileName);
  DOMStrings.profileInfo.insertAdjacentHTML('beforeend', profileInfo);
};

const displayPicture = (name) => {
  const namePic = name.toLowerCase().replaceAll(' ', '_');
  DOMStrings.profileImage.setAttribute('src', `img/profile_pics/${namePic}.png`);
};

const displayProfileContainer = (isDisplayed) => {
  DOMStrings.bountyCard.style.visibility = 'visible';
};

export const deleteProfile = () => {
  DOMStrings.profileInfo.innerHTML = '';
  const element = document.querySelector('.info_name_container p');
  element.parentElement.removeChild(element);
  DOMStrings.btnContainer.innerHTML = '';
};

const formatHeight = (height) => {
  const mmToFoot = 30.48;
  return (height/mmToFoot).toFixed(2);
};

const displayButtons = (id, max = 8) => {
  let button;

  if(id === 0) {
    button = createButton('right', id);
  } else if(id < max) {
    button = `
      ${createButton('left', id)}
      ${createButton('right', id)}
    `;
  } else if(id === max) {
    button = createButton('left', id);
  }

  DOMStrings.btnContainer.insertAdjacentHTML('afterbegin', button);
};

const createButton = (type, id) => {
  const urlID = (type === 'left' ? id - 1 : id + 1 );
  const markup = `
    <a class="profile_info_url" href="#${urlID}">
      <div class="btn_arrow arrow_container_${type}" data-goto=${(type === 'left' ? id - 1 : id + 1 )}>
        <img class="arrow_img_${type}" src="img/arrow.png" alt="left arrow"/>
      </div>
    </a>
  `;

   return markup;
};

export const updateContractBtn = (isBounty) => {
  DOMStrings.btnAcceptContainer.classList.remove(isBounty ? 'greenHover' : 'redHover');
  DOMStrings.btnAcceptContainer.classList.add(isBounty ? 'redHover' : 'greenHover');

  DOMStrings.btnAcceptContainer.classList.remove(isBounty ? 'red_border' : 'green_border');
  DOMStrings.btnAcceptContainer.classList.add(isBounty ? 'green_border' : 'red_border');
  DOMStrings.btnAccept.textContent = `${isBounty ? 'Remove' : 'Accept'} Contract!`;
};

export const displayWarning = (isDisplayed) => {
  DOMStrings.noContract.style.visibility = isDisplayed ? 'visible' : 'hidden';
};

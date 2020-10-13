export const DOMStrings = {
 profileContainer: document.querySelector('.info_profile_container'),
 bountyContainer: document.querySelector('.card_info_container'),
 profileName: document.querySelector('.info_name_container'),
 profileImage: document.querySelector('.profile_img'),
 profileInfo: document.querySelector('.info_profile'),
 profileUnderline: document.querySelector('.info_underline'),
 bountyCardContainer: document.querySelector('.profile_container'),
 bountyCard: document.querySelector('.bounty_card'),
 btnContainer: document.querySelector('.btn_container'),
 btnAcceptContainer: document.querySelector('.bounty_btn_accept_container'),
 btnAccept: document.querySelector('.btn_accept'),
 noContract: document.querySelector('.no_contract'),
 profileHeadings: document.querySelector('.info_profile_headings'),
 loader: document.querySelector('.loader')
};

export const clearLoader = () => {
  const element = DOMStrings.loader;
  if(element) element.parentElement.removeChild(element);
};

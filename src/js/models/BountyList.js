export default class BountyList {
  constructor() {
    this.list = [];
  };

  addBounty(id) {
   const objBounty = {
     id: id
   };

   this.list.push(objBounty);
   this.persistData();
  };

  removeBounty(index) {
    this.list.splice(index, 1);
    this.persistData();
  };

  checkList(id) {
    return this.list.findIndex(obj => obj.id === id);
  };

  persistData() {
    localStorage.setItem('bountyList', JSON.stringify(this.list));
  };

  readStorage() {
    const storage = JSON.parse(localStorage.getItem('bountyList'));
    if(storage) this.list = storage;
  };
}

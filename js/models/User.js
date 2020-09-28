class User{
  constructor(){
    this.users = [{
      id:1,
      username:"victorjake",
      password:"kingstone123"
    }];

  }

  fetchAll(){
    return JSON.parse(this.db.localStorage.getItem('users'));
  }

  fetchOne(id){
    let query = this.fetchAll();
    let rowItem = query.filter(item=>item.id == id)
    return rowItem[0];
  }

  update(dataNew){
    let id = dataNew.id;
    let exception = this.getException(id);
    exception.push(dataNew);
    return localStorage.setItem(JSON.stringify(exception))

  }

  delete(id){
    return this.getException(id)
  }

  create(newData){
    let alldata = JSON.parse(localStorage.getItem('users'))
    alldata.push(newData)
  }

  getException(id){
    let query =   this.fetchAll();
    let exception = query.filter(item=>item.id != id);
    return exception;

  }
}

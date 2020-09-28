//mimic the data base
class Record{
  constructor(){
    this.db = localStorage;
    this.db.setItem('records',JSON.stringify([]))
  }

  fetchAll(){
    return JSON.parse(this.db.localStorage.getItem('records'));
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
    let alldata = JSON.parse(localStorage.getItem('records'))
    alldata.push(newData)
  }

  getException(id){
    let query =   this.fetchAll();
    let exception = query.filter(item=>item.id != id);
    return exception;

  }
}

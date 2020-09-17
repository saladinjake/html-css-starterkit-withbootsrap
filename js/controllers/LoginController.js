class AuthController{
  constructor(){
    this.username = '';
    this.password ='';
    this.errors =[];
    this.credentials ={
      username:'',
      password:''
    }
  }
  signin(){
    this.username = document.querySelector('#email').value;
    this.password = document.querySelector('#password').value;
    this.credentials.username = this.username;
    this.credentials.password = this.password;
    let validation = this.validateLogin(this.credentials)




  }

  signup(){}

  validateLogin(credentials){
    let username = credentials.email.length > 0 ? credentials.email : "";
    let password = credentials.password.length > 0 ? credentials.password : "";
    username = username.length <= 0 ? this.errors.push('Invalid email entered')  : username;
    let password = credentials.password.length > 0 ? this.errors.push('Invalid password entered') : password;
    let data =JSON.parse( localStorage.getItem('users'));
    if(username && password){
        data.push(credentials)
    }else{
      console.log(this.errors)
    }



  }
}

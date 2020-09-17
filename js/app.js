let AppName =  {}

AppName.bootInit = (function(){
  this.bootstrap = [

  ];
  this.element = null;

  this.declearations =[
      HomeController,
      LoginController,
      DashboardController
  ];


  this.currentController ="HomeController";
  this.currentAction ='index';


  function render(page){
    //please run the load page with ajax for real projects
    window.location.href =page;
  }

  function dispatcher(){
      let that = this;

      that.currentController = localStorage.getItem('currentController') ? localStorage.getItem('currentController'): 'HomeController';
      that.currentAction = localStorage.getItem('currentAction') ? localStorage.getItem('currentAction'): 'index';
      // render(this.currentController.toLowerCase() + ".html");
      document.addEventListener('click',function(e){

          if(e.target.getAttribute('data-link').indexOf("@")){
            e.preventDefault()
            let controller = e.target.getAttribute('data-link');
            controller = controller.split("@");

            let controllerName = controller[0];
            let controllerAction = controller[1];
            localStorage.setItem('currentController', controllerName);
            localStorage.setItem('currentAction', controllerAction);
             // get the controllers
             // get the controller action
             //then launch the view
             render(controllerName.toLowerCase() + ".html");
          }else{
            if(window.location.href.indexOf('.html')){
              render('index.html');
            }

             render('./');

          }
      })
  }




  return {
     dispatcher:  dispatcher
  }
})



document.addEventListener('DOMContentLoaded', function(){
  let App = new  AppName.bootInit()
  App.dispatcher()
})

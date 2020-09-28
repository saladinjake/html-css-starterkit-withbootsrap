class IReporterWebsiteLoadingEffect {
  constructor() {
    this.verticalLoader = document.getElementsByClassName('loader');
    this.gtd = document.getElementById('gtd');
    this.loadingJacket = document.getElementsByClassName('loading');
    //this.loadingJacket[0].classList.add("loading");
    this.uiMockUp = document.getElementById("mock-up-start")
    this.loaders;
    this.gtd.style.display = 'none';
    this.gtd.style.visibility = 'hidden';
    this.uiMockUp.style.display="none";
  }

  attachEvents() {
    let that = this;
    
    setTimeout(() => {
      this.uiMockUp.style.display="block";
      
    }, 2000);


  

    setTimeout(() => {
      this.uiMockUp.style.display="none";
      this.gtd.style.display = 'block';
      this.gtd.style.visibility = 'visible';


      
      this.loadingJacket[0].style.visibility = 'hidden';
      this.loadingJacket[0].style.display = 'none';
      this.verticalLoader[0].style.display = 'none';
    }, 5000);


  }

  createLoadingEffect() {
    for (let i = 0; i < 4; i++) {
      this.loaders = document.createElement('div');
      this.loaders.classList.add('loading-bar');
      this.loadingJacket.appendChild(this.loaders);
      this.body[0].appendChild(this.loadingJacket);
    }
  }
}


new IReporterWebsiteLoadingEffect().attachEvents();


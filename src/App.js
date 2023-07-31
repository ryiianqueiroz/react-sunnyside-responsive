import './App.css';
import ImageGalleryCone from './images/desktop/image-gallery-cone.jpg'
import ImageGalleryMilk from './images/desktop/image-gallery-milkbottles.jpg'
import ImageGalleryOrange from './images/desktop/image-gallery-orange.jpg'
import ImageGallerySugar from './images/desktop/image-gallery-sugarcubes.jpg'
import ImageGraphic from './images/desktop/image-graphic-design.jpg'
import ImageHeader from './images/desktop/image-header.jpg'
import ImagePhotography from './images/desktop/image-photography.jpg'
import ImageStandOut from './images/desktop/image-stand-out.jpg'
import ImageTransform from './images/desktop/image-transform.jpg'
//import MobileImageCone from './images/mobile/image-gallery-cone.jpg'
//import MobileImageMilk from './images/mobile/image-gallery-milkbottles.jpg'
//import MobileImageOrange from './images/mobile/image-gallery-orange.jpg'
//import MobileImageSugar from './images/mobile/image-gallery-sugar-cubes.jpg'
//import MobileImageDesign from './images/mobile/image-graphic-design.jpg'
import MobileImageHeader from './images/mobile/image-header.jpg'
//import MobileImagePhotography from './images/mobile/image-photography.jpg'
//import MobileImageStandOut from './images/mobile/image-stand-out.jpg'
import MobileImageTransform from './images/mobile/image-transform.jpg'
import ArrowDown from './images/icon-arrow-down.svg'
import Facebook from './images/icon-facebook.svg'
//import Hamburger from './images/icon-hamburger.svg'
import Instagram from './images/icon-instagram.svg'
import Pinterest from './images/icon-pinterest.svg'
import Twitter from './images/icon-twitter.svg'
import Emily from './images/image-emily.jpg'
import Jennie from './images/image-jennie.jpg'
import Thomas from './images/image-thomas.jpg'
import Logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
      
      <div className="container-principal">

        <img src={MobileImageHeader} alt="#" className="banner-mobile"/>
        <img src={ImageHeader} alt="#" className="home-banner" />

        
        <header>
          <nav>
            <img src={Logo} alt="#" />
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
            <div class='menu-button'></div>
            </label>
            <ul class="menu">
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li><button className="btn-contact">CONTACT</button></li>
            </ul>
          </nav>

          <div className="creatives">
            <h1 className="creatives-text">WE ARE CREATIVES</h1>
            <img src={ArrowDown} alt="#" className="down-arrow"/>
          </div>
        </header>

      </div>

      <div className="container-yellow">
        <div className="container-text-yellow">
          <h2>Transform your brand</h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast. 
          Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <button>LEARN MORE</button>
        </div>
        <div className="container-photo-yellow">
          <img src={ImageTransform} alt="#" className="transform-desktop"/>
          <img src={MobileImageTransform} alt="#" className="transform-mobile"/>
        </div>
      </div>

      <div className="container-pink">
        <div className="container-photo-pink">
          <img src={ImageStandOut} alt="#" />
        </div>
        <div className="container-text-pink">
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className="container-two">
        <div className="container-photo-green"> 
          <img src={ImageGraphic} alt="#" />
          <div className="container-green-text"> 
            <h4>Graphic design</h4>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div> 
        </div>
        <div className="container-photo-blue">
          <img src={ImagePhotography} alt="#" />
          <div className="container-blue-text">
            <h4>Photography</h4>
            <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
          </div>
        </div>
      </div>


      <div className="section-grid">
        <div className="client">
          <h3>CLIENT TESTIMONIALS</h3>
        </div>

        <div className="client-message">
          <div className="client-message-client">
            <img src={Emily} alt="#" />

            <p className="p-p">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
            
            <div className="client-message-text">

              <h5>Emily R.</h5>

              <p className="p-client">Marketing Director</p>

            </div>

          </div>
          
          <div className="client-message-client">

            <img src={Thomas} alt="#" />

            <p className="p-p">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
            
            <div className="client-message-text">
              <h5>Thomas S.</h5>

              <p className="p-client">Chief Operating Officer</p>
            </div>

          </div>

          <div className="client-message-client">

            <img src={Jennie} alt="#" />

            <p className="p-p">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

            <div className="client-message-text">
              <h5>Jennie F.</h5>

              <p className="p-client">Business Owner</p>
            </div>
          </div>

        </div>

      </div>

      <div className="photos">
        <div className="photos-flex">
          <div className="photos1">
            <img src={ImageGalleryMilk} alt="#" />
          </div>
          <div className="photos2">
            <img src={ImageGalleryOrange} alt="#" />
          </div>          
        </div>  

        <div className="photos-flex">
          <div className="photos3">
            <img src={ImageGalleryCone} alt="#" />
          </div>
          <div className="photos4">
            <img src={ImageGallerySugar} alt="#" />
          </div>
        </div>
      </div>

      <footer>
        <img src={Logo} alt="#" className="logo-sunnyside-footer"/>
          <div className="footer-services">
            <p>About</p>
            <p>Services</p>
            <p>Projects</p>
          </div>
          <div className="logos">
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
          </div>
      </footer>

    </div>
  );
}

export default App;

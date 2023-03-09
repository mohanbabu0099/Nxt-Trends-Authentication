import Header from '../Header'
import './index.css'

const Home = () => (
  <div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
    </div>
    <div>
      <Header />
    </div>
    <div className="home-container">
      <div>
        <h1 className="h1">Clothes That Get YOU Noticed</h1>
        <p className="para">
          Fashion is part of the daily air Clothing describes the material and
          the technical garment, devoid of any social meaning or connections;
          costume has come to mean fancy dress or masquerade wear. Fashion, by
          contrast, describes the social and temporal system that influences and
          "activates" dress as a social signifier in a certain time and
          context.Clothing is an essential part of people's lives. They offer
          many health and beauty benefits. Fashion is crucial to history because
          it sets the tone for how people present themselves in every era.
          Everyone lives through fashion, sometimes by choice and sometimes
          because of societal rules
        </p>
        <div>
          <button className="btn2" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="img-form">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="img2"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home

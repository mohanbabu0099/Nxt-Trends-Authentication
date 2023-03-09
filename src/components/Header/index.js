import {Component} from 'react'
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt=""
            className="img"
          />
        </div>
        <div>
          <ul className="ul">
            <li className="li">Home</li>
            <li className="li">Products</li>
            <li className="li">Cart</li>
            <div>
              <button className="btn1" type="button">
                Logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

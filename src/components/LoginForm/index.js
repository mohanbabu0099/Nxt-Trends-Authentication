import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: 'rahul', password: 'rahul@2021', errMsg: ''}

  successWorkFlow = () => {
    const {history} = this.props
    history.replace('/')
  }

  onChangeForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.successWorkFlow()
    } else {
      this.setState({
        errMsg: data.errMsg,
      })
    }

    if (username !== 'rahul' && password !== 'rahul@2021') {
      this.setState({
        errMsg: `*Username and Password didn't match `,
      })
    } else {
      this.setState({
        errMsg: '',
      })
    }
  }

  onUserName = e => {
    this.setState({
      username: e.target.value,
    })
  }

  onPassName = e => {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    const {username, password, errMsg} = this.state
    return (
      <div className="login-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="img3"
          />
        </div>
        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="img4"
          />
          <form>
            <label className="user-name" htmlFor="user">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="user"
              value={username}
              onChange={this.onUserName}
              className="user-names"
              placeholder="Username"
            />
            <br />
            <label className="user-name" htmlFor="pass">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="pass"
              value={password}
              onChange={this.onPassName}
              className="user-names"
              placeholder="Password"
            />
            <br />
            <button className="btn3" type="submit" onClick={this.onChangeForm}>
              Login
            </button>
            <p className="para1">{errMsg}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';
import classnames from 'classnames';
import './login.sass';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(user);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="Login">
        <div className="Login-title">Logowanie</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-7">
            <label htmlFor="userEmail">Email*</label>
            <input
              type="email"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.email
              })}
              id="userEmail"
              placeholder="Email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required />
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="form-group col-7">
            <label htmlFor="userPassword">Password*</label>
            <input
              type="password"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password
              })}
              id="userPassword"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          </div>
          <small id="requiredInfo" className="col-7 form-text text-muted Delivery-requiredInfo">* Pole wymagane</small>
          <button type="submit" className="btn btn-primary Login-button">Zaloguj</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors
  }
};

export default connect(mapStateToProps, { loginUser })(Login)

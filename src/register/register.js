import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';
import classnames from 'classnames';
import './register.sass';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password_confirm
    }
    this.props.registerUser(user, this.props.history);
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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="Register">
        <div className="Register-title">Rejestracja</div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-7">
            <input
              type="text"
              placeholder="Nazwa użytkownka"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.name
              })}
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
              required
            />
            {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
          </div>
          <div className="form-group col-7">
            <input
              type="email"
              placeholder="Email"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.email
              })}
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
              required
            />
            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
          </div>
          <div className="form-group col-7">
            <input
              type="password"
              placeholder="Password"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password
              })}
              name="password"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
            {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
          </div>
          <div className="form-group col-7">
            <input
              type="password"
              placeholder="Confirm Password"
              className={classnames('form-control form-control-lg', {
                'is-invalid': errors.password_confirm
              })}
              name="password_confirm"
              onChange={this.handleInputChange}
              value={this.state.password_confirm}
              required
            />
            {errors.password_confirm && (<div className="invalid-feedback">{errors.password_confirm}</div>)}
          </div>
          <button type="submit" className="btn btn-primary Register-button">
            Register User
          </button>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
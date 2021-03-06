import React from 'react';
import { handleLogin } from '../helpers/user-helper';
import { navigate } from 'gatsby';
import Message from '../components/message';
import {Link} from 'gatsby';
import LoginStyle from './login.module.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      message: props.location.state.message,
      visible: (props.location.state.message) ? true : false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  handleChange(e) {
    let newState = {...this.state};
    newState.user[e.target.name] = e.target.value;
    this.setState(newState);
  }

  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await handleLogin(this.state.user);
      navigate('/');
    } catch(e) {
      this.setState({...this.state, message: e.message, visible: true});
    }
  }

  render() {
    return (
      <div className={LoginStyle.div_pai}>
        <h1 className={LoginStyle.titulo}>WEBMESADA</h1>
        <h2 className={LoginStyle.sub_titulo}>Login</h2>
        <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
        <form className={LoginStyle.formulario}>
        <p>Email:</p>
          <input className={LoginStyle.campo} type="text" name="email" value={this.state.user.email} onChange={this.handleChange} />
         <p>Senha:</p>
          <input className={LoginStyle.campo} type="password" name="password" value={this.state.user.password} onChange={this.handleChange} />
          <input className={LoginStyle.campo} type="button" value="Entrar" onClick={this.handleSubmit} />
          <Link to="/register">Registrar</Link>
        </form>
      </div>
    );
  }
}

export default Login;
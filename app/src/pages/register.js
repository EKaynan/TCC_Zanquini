
import React from "react"
import UserModel from  "../components/models/user-model"
import {Link} from "gatsby"
import Message from "../components/message";
import RegisterStyle from './register.module.css';

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        name: ''
      },
      user_filho: {
        name:'',
        password:'',
        email:''
      },
      isSaving: false,
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let newState = {...this.state};
    newState[e.target.getAttribute('data-object')][e.target.name] = e.target.value;
    this.setState(newState);
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      await this.setState({
        ...this.state, 
        isSaving: true,
        user: {
          ...this.state.user
        },
        user_filho: {
          ...this.state.user_filho
        }
      });
      let res = await UserModel.create(this.state.user);
      let son = {...this.state.user_filho, father_id: res.id};
      let res5 = await UserModel.create(son);
      this.setState({
        user: {
          email: '',
          password: '',
          name: ''
        },
        user_filho: {
          name:'',
          password:'',
          email: ''
        },
        isSaving: false,
        message: res.message
      });
    }catch(e) {
      this.setState({
        user: {
          email: '',
          password: '',
          name: ''
        },
        user_filho: {
          name:'',
          password:'',
          email: ''
        },
        isSaving: false,
        message: e.message
      });
    }
  }

  render() {
    return (
      <div className={RegisterStyle.div_pai}>
        <Message message={this.state.message} />
        <h1 className={RegisterStyle.titulo}>WEBMESADA</h1>
        <h2 className={RegisterStyle.sub_titulo}>Registro Pai</h2>
        <form>
          <h1> Dados do pai </h1>
          <p>
            Email do pai:
            <input className={RegisterStyle.campo} type="text" disabled={this.state.isSaving} data-object="user" name="email" value={this.state.user.email} onChange={this.handleChange} />
          </p>
          <p>
            Nome do pai:
            <input className={RegisterStyle.campo} type="text" disabled={this.state.isSaving} data-object="user" name="name" value={this.state.user.name} onChange={this.handleChange} />
          </p>
          <p>
            Senha do pai:
            <input className={RegisterStyle.campo} type="password" disabled={this.state.isSaving} data-object="user" name="password" value={this.state.user.password} onChange={this.handleChange} />
          </p>
          
          <h2 className={RegisterStyle.sub_titulo}> Dados do filho </h1>
          <p>
            Email do filho:
            <input className={RegisterStyle.campo} type="text" disabled={this.state.isSaving} data-object="user_filho" name="email" value={this.state.user_filho.email} onChange={this.handleChange} />
          </p>
          <p>
            Nome do filho:
            <input className={RegisterStyle.campo} type="text" disabled={this.state.isSaving} data-object="user_filho" name="name" value={this.state.user_filho.name} onChange={this.handleChange} />
          </p>
          <p>
            Senha do filho:
            <input className={RegisterStyle.campo} type="password" disabled={this.state.isSaving} data-object="user_filho" name="password" value={this.state.user_filho.password} onChange={this.handleChange} />
          </p>
          
          <input type="button" value="Registrar" onClick={this.handleSubmit} />
        </form>
        <Link to="/login" class="botao_voltar">Voltar</Link>
      </div>
    );
  }
}
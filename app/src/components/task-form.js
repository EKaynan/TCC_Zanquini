import React from 'react'; //NÃO TEM O QUE ENTENDER
import TaskModel from '../components/models/task-model';  //
import {Link} from 'gatsby';
import Message from '../components/message';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        descricao_tarefa: '',
        valor_tarefa: 0
      },
      message: '',
      isSaving: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  handleChange(event) {
    let newState = {
      ...this.state
    };
    newState.task[event.target.name] =  event.target.value;
    this.setState(newState);
  }

  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async handleSubmit(event) {
    event.preventDefault();
    try {
      await this.setState({
        ...this.state, 
        isSaving: true,
        task: {
          ...this.state.task
        }
      });
      let res = await TaskModel.create(this.state.task);
      this.setState({
        task: {
          descricao_tarefa: '',
          valor_tarefa: 0
        },
        isSaving: false,
        message: res.message
      });
    }catch(e) {
      this.setState({
        task: {
          descricao_tarefa: '',
          valor_tarefa: 0
        },
        isSaving: false,
        message: e.message
      });
    }
  }

  render() {
    return (
    <div>
      <Message message={this.state.message} show={this.state.visible} toggle={this.onDimiss} />
      <form>
        <p>Descrição da tarefa</p>
        <input type="text" name="descricao_tarefa" value={this.state.task.descricao_tarefa} disabled={this.state.isSaving} onChange={this.handleChange} />
        <p>Valor Tarefa</p>
        <input type="number" name="valor_tarefa" value={this.state.task.valor_tarefa} disabled={this.state.isSaving} onChange={this.handleChange} />
        <p><button onClick={this.handleSubmit}>Criar a Tarefa</button></p>
      </form>
      <Link to='/'>Voltar</Link>
    </div>
    );
  }
}
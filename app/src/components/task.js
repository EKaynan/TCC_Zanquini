import React from 'react';
import TaskModel from './models/task-model';
import Message from './message';
import {navigate} from 'gatsby';


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {...props.data},
      valor_tarefa: 0
    };
    this.handleChangeAdc = this.handleChangeAdc.bind(this);
    this.handleChangeSub = this.handleChangeSub.bind(this);
    this.handleChangeValor = this.handleChangeValor.bind(this);
    this.onDimiss = this.onDimiss.bind(this);
  }

  onDimiss() {
    this.setState({...this.state, visible: !this.state.visible});
  }

  async _updateTask () {
    try {
      let task = {...this.state.task};
      delete task.user;
      delete task.created_date;
      let res = await TaskModel.update(this.state.task.id, task);
      return res.message;
    }catch(e) {
      return e.message;
    }
  }

  async handleChangeValor(e) {
    let newState = {...this.state};
    newState.valor_tarefa = e.target.value;
    this.setState(newState);
  }

  async handleChangeAdc(e) {
    let newState = {...this.state};
    newState.task['valor_tarefa'] += +this.state.valor_tarefa;
    newState.message = await this._updateTask();
    this.setState(newState);
  }
  async handleChangeSub(e) {
    let newState = {...this.state};
    newState.task['valor_tarefa'] -= +this.state.valor_tarefa;
    newState.message = await this._updateTask();
    this.setState(newState);
  }

  

  render() {
    let date = new Date(this.state.task.created_date*1000);
    return (
      <div>
        <p>
          <p>{this.state.task.descricao_tarefa}</p>
          <p>{this.state.task.valor_tarefa}</p>
          <input type="number" value={this.state.valor_tarefa} onChange={this.handleChangeValor} name="adc"/>
          <input type="button" value="+" onClick={this.handleChangeAdc} />
          <input type="button" value="-" onClick={this.handleChangeSub} />
        </p>
      </div>
    );
  }
}

export default Task;
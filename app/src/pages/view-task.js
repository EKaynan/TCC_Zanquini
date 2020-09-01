import React from 'react';
import TaskView from '../components/task-view.js'
import { Link } from 'gatsby';
import isPrivateRoute from '../components/private-route.js';
import TaskViewStyle from './task_view.module.css';

class ViewTask extends React.Component {
  render() {
    return(
      <div className={TaskViewStyle.div_pai}>
        <h1 className={TaskViewStyle.titulo}>Visualizar uma tarefa</h1>
        <TaskView id={this.props.location.state.id} />
        <Link to="/">Voltar</Link>
      </div>
    )
  }
}

export default isPrivateRoute({component: ViewTask, location: '/view-task'});
import React from 'react';
import withDataSourceFetch from './data-source-fetch';
import TaskModel from './models/task-model';
import Message from './message';
import Task from './task';
import TaskStyle from './task.module.css';


const TaskView = (props) => {
  return (
    <div className={TaskStyle.teste}>
      <Message message={props.message} />
      {props.isFetching ? <div>Carregando Tarefa</div> : <div>
        <Task data={props.data} />
      </div>}
    </div>
  );
};

export default withDataSourceFetch(TaskView, TaskModel.find.bind(TaskModel));
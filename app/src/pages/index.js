import React from "react"
import TasksList from "../components/tasks-list";
import { Link } from "gatsby";
import isPrivateRoute from "../components/private-route";
import LogoutButton from  "../components/logout-button";
import HeaderTask from  "../components/header_task";
import IndexStyle from './index.module.css';

class Index extends React.Component {
  render(){
    return (
      <div className={IndexStyle.div_pai}>
        <HeaderTask />
        <h1 className={IndexStyle.titulo}>Tarefas</h1>
        <TasksList/>
        <Link to="/create-task">Criar uma tarefa</Link>
        <LogoutButton />
      </div>
    );
  }
}

export default isPrivateRoute({component: Index, location: '/'});
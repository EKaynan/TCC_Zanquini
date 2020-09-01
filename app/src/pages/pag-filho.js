import React from "react"
import TasksList from "../components/tasks-list";
import { Link } from "gatsby";
import isPrivateRoute from "../components/private-route";
import LogoutButton from  "../components/logout-button";
import PagFilhoStyle from './pag_filho.module.css';
import TasksList from "../components/tasks-list";

class pag_filho extends React.Component {
  render(){
    return (
      <div className={PagFilhoStyle.div_pai}>
        <h1 className={PagFilhoStyle.titulo}>Atividades</h1>
        <div>
          <h2 className={PagFilhoStyle.sub_titulo}> Carteira</h2>
        </div>
        <TasksList />
        <LogoutButton />
      </div>
    );
  }
}

export default isPrivateRoute({component: pag_filho, location: '/pag_filho'});
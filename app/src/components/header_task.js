import React from 'react';
import HeaderStyle from './header_style.module.css';

class Index extends React.Component{
	render(){
		<div className={HeaderStyle.cabecalho}>
			<img className={HeaderStyle.logo} />

			<ul className={HeaderStyle.menu}>
				<a className={HeaderStyle.link}>Sair</a>
				<a className={HeaderStyle.link}>Add</a>
			</ul>
		</div>
	}
}
import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image, Text } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';
import PublishForm from './PublishForm';
import SendForm from './SendForm';

class App extends React.Component {
	constructor(props) {
		super(props) 
		
		this.state = {
			selectedChannels: []
		};
	}

	toggleChannel = (id) => {
		console.log('clicked', id);
		if(this.state.selectedChannels.indexOf(id) < 0) {
		this.setState({ selectedChannels: [...this.state.selectedChannels, id] });
		}
	};

	//describe disabled buttons state
	render() {
		console.log(this.state.selectedChannels,"aaa")
		return (
		<div className="wrapper">
		<Form>
		<BrowserRouter>
		<Button as={Link} to='/PublishForm' icon='download' size='large' color="white"/>
		<Button as={Link} to='/SendForm' icon='plane' size='large' disabled = {this.state.selectedChannels.length == 0} />
		<Switch>
		<Route path="/PublishForm">
		<PublishForm toggleChannel = {this.toggleChannel} selectedChannels = {this.state.selectedChannels} />
		</Route>
		<Route path="/SendForm">
		<SendForm />
		</Route>
		</Switch>
		</BrowserRouter>
		</Form>
		</div>
		);
	}
	
	
	
	}
	
	




	
	







export default App;

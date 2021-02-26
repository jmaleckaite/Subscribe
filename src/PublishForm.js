import React from 'react';
import { Button, Header, Icon, Message, Checkbox, Form, Modal, 
Segment, Menu, Grid, Image, Input, Table, Search } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom'; 
import 'semantic-ui-css/semantic.min.css';
import SendForm from './SendForm';
import ChannelList from './ChannelList';
import { string } from 'prop-types';



//assign different functions to buttons


const channels = [
{ id: 1, name: 'Le notizie del Portale' }, 
{ id: 2, name: 'Gli eventi e le Notizie della Cultura' },
{ id: 3, name: 'Gli eventi e le notizie del centro per le famiglie' },
{ id: 4, name: 'Le notizie di Comune' }
];		


class PublishForm extends React.Component {
	constructor(props) {
		super(props) 
		
		this.state = {
			color_blue: true,
			title: "Publicca",
			blue: true
		};
		
		this.handleChange = this.handleChange.bind(this);
	   // this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	changeColor() {
		this.setState({color_blue: !this.state.color_blue})
	}

	
		
		
		//this.handleChange = this.handleChange.bind(this);
	
	
	handleClick = () => {
		console.log('clicked', this);
		//this.setState({ buttonColor: 'gray' })
		
	}
	
	handleChange(event) {
		
	   /* for (var i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
			value.push(options[i].value);
			}
		} */

		this.setState({value: event.target.value})
	}
/*
	handleSubmit() {
		alert("You have published these channels:" + this.state.value);
	}
	*/
	
	
	
	render() {
	console.log("channels",this.props.selectedChannels)
		return (
	<div className="publishForm">
	<Grid centered columns={2}>
    <Grid.Column>
	<Table basic="very" celled collapsing>
	<Table.Header width={10}>
	<Header as='h1' color="blue">Pubblica il messaggio sui canali</Header>
		<div className="searchbar">
		<Search
		placeholder="Cerca un canale"
		onSearchChange={this.handleChange}
		type='text'
		value={this.state.value}
		/>
		</div>
	<Table.Row>
	<Table.HeaderCell width={10}>Channel</Table.HeaderCell>
	<Table.HeaderCell width='six'>Action</Table.HeaderCell>
	</Table.Row>
	</Table.Header>
	
	<Table.Body>
	{Object.values(channels).map(
              ({ id, name }) => {
                return (
                  <Table.Row>
					<Table.Cell>{name}</Table.Cell>
					<Table.Cell>
	<Button
	float='right'
	color='blue'
	size='mini'
	value='ch1'
    onClick={(event)=>this.props.toggleChannel(id)}
>
	{this.props.selectedChannels.indexOf(id) >= 0 ?"Published":"Publish"}
	</Button>
	</Table.Cell>
					</Table.Row>
					);
			  }
	)}
	</Table.Body>
	</Table>
	</Grid.Column>
	</Grid>
	</div>
		);
	}
	
	
	
	
}







	
	
	







export default PublishForm;

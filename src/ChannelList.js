import React, {Component } from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';


	
	
function ChannelList(props) {
	return (
	<div>{props.channels.map(c => <Channel key={c.id} name={c.name} />)}</div>
	);
}

ChannelList.propTypes = {
	channels: PropTypes.array.isRequired
};

export default ChannelList;

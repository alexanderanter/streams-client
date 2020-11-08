import { render } from '@testing-library/react';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import streams from '../../apis/streams';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}
	renderStreamList() {
		return this.props.streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}
	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderStreamList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	//turn the object into an array
	return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

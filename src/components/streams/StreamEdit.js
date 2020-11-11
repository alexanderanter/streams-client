import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	render() {
		return (
			<div>
				<h2>Edit Stream</h2>
				<div>{this.props.stream.title}</div>
				<div>{this.props.stream.description}</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		stream: state.streams[ownProps.match.params.id],
		// streams: state.streams,
		// stream: state.streams[ownProps.match.params.id],
		//selecting the correct stream by getting the selected id from the url,
		// the id parameter value stored in the match prop
	};
};
export default connect(mapStateToProps, { fetchStream })(StreamEdit);

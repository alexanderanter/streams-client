import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
	onDismiss = () => {
		history.push('/');
	};
	onDeleteClick = () => {
		this.props.deleteStream(this.props.match.params.id);
	};
	action() {
		return (
			<>
				<button onClick={this.onDeleteClick} className="ui button primary">
					Delete
				</button>
				<button onClick={() => history.push('/')} className="ui button">
					Cancel
				</button>
			</>
		);
	}

	render() {
		return (
			<div>
				StreamDelete
				<Modal
					title="Delete Stream"
					content="Are you sure you want to delete this stream?"
					actions={this.action()}
					onDismiss={this.onDismiss}
				/>
			</div>
		);
	}
}
// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		stream: state.streams[ownProps.match.params.id],
// 	};
// };
export default connect(null, { deleteStream })(StreamDelete);

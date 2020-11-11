import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { deleteStream } from '../../actions';
import { connect } from 'react-redux';

const StreamDelete = (props) => {
	const onDismiss = () => {
		history.push('/');
	};
	const onDeleteClick = () => {
		props.deleteStream(props.match.params.id);
	};
	const action = (
		<>
			<button onClick={onDeleteClick} className="ui button primary">
				Delete
			</button>
			<button onClick={() => history.push('/')} className="ui button">
				Cancel
			</button>
		</>
	);
	return (
		<div>
			StreamDelete
			<Modal
				title="Delete Stream"
				content="Are you sure you want to delete this stream?"
				actions={action}
				onDismiss={onDismiss}
			/>
		</div>
	);
};
// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		stream: state.streams[ownProps.match.params.id],
// 	};
// };
export default connect(null, { deleteStream })(StreamDelete);

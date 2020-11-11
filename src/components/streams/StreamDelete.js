import React from 'react';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = () => {
	const action = (
		<>
			<button className="ui button primary">Delete</button>
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
				onDismiss={() => history.push('/')}
			/>
		</div>
	);
};
export default StreamDelete;

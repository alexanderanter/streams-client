import React from 'react';

class GoogleAuth extends React.Component {
	state = { isSignedIn: null };
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'245580436186-38qc43opuf0fntipdd37ui1v57m4vuph.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button
					className="ui red google button"
					onClick={() => this.auth.signOut()}
				>
					<i className="google icon"></i>Sign Out
				</button>
			);
		} else {
			return (
				<button
					className="ui red google button"
					onClick={() => this.auth.signIn()}
				>
					<i className="google icon"></i>Sign In
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;

/**
 * 登录逻辑
 * 
 * @class auth
 * 
 */
const pretendRequest = (username, password, cb) => {
	setTimeout(() => {
		if(username === 'sosout' && password === 'sosout') {
			cb({
				authenticated: true,
				token: Math.random().toString(36).substring(7)
			});
		} else {
			cb({ authenticated: false });
		}
	}, 0);
}

const auth = {
	login(username, password, cb) {
		cb = arguments[arguments.length - 1];
		if(localStorage.token) {
			if (cb) cb(true);
			this.onChange(true);
			return;
		}
		pretendRequest(username, password, (res) => {
			if(res.authenticated) {
				localStorage.token = res.token;
				if(cb) cb(true);
				this.onChange(true);
			} else {
				if(cb) cb(false);
				this.onChange(false);
			}
		})
	},
	getToken() {
		return localStorage.token;
	},
	logout(cb) {
		delete localStorage.token;
		if(cb) cb();
		this.onChange(false);
	},
	loggedIn() {
		return !!localStorage.token;
	},
	onChange() {}
}

export default auth;
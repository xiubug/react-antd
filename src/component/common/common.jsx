import { message, Button } from 'antd';

const error = function () {
  message.error('This is a message of error');
};


/* 以类的方式创建一个组件 */
class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		var {User, params} = this.props;
		return (
			<div>
			  <Button onClick={error}>Error</Button>
			</div>
		);
	}
}

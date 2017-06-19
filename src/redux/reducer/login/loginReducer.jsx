import { fromJS } from 'immutable';
import { LOGIN_SUCCESS } from '../../constants/loginTypes';

// 初始化state数据
const initialState = {
    loginInfo: []
};

/**
 * 登录界面reducer
 * @return
 */
const Login = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: // 登录成功
            return fromJS(state).merge({loginInfo: action.res}).toJS();
        default:
            return state;
    }
}

export default Login;
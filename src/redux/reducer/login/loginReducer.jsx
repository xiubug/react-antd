import { fromJS } from 'immutable';
import { INITIAL_STATE, RES_LOGIN } from '../../constants/loginTypes';

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
        case INITIAL_STATE: // 初始化state数据
            return fromJS(state).merge({loginInfo: []}).toJS();
        case RES_LOGIN: // 登录成功
            return fromJS(state).merge({loginInfo: action.res}).toJS();
        default:
            return state;
    }
}

export default Login;
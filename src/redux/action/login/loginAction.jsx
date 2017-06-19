/**
 * 登录界面action
 * @return
 */
import { Message } from 'antd';
import { browserHistory } from 'react-router';
import Config from '../../../config/index';
import { LOGIN_SUCCESS } from '../../constants/loginTypes';
import LoginService from '../../../services/loginService';
import { loading } from '../index';

/**
 * 登录成功
 * @return
 */
const loginSuccess = (params, res) => {
    return {
        type: LOGIN_SUCCESS,
        res
    }
}

/**
 * 登录界面	
 * @param {username} 用户名
 * @param {password} 密码
 * @return {登录信息}
 */

export const goLogin = (params) => {
    return dispatch => {
        dispatch(loading(true));
        LoginService.goLogin(params, (res) => {
            dispatch(loading(false));
            if(res.length > 0) {
                Config.localItem(Config.localKey.userToken, (new Date()).getTime()); // 模拟登录成功返回的Token
                browserHistory.push('/home');
            } else {
                Message.error(res.msg);
            }
        })
    }
} 

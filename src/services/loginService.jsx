import Xhr from './xhr/index';

/**
 * 封装ajax请求
 * @param {any}
 */

class LoginService {

    /**
     * 登录界面	
     * @param {username} 用户名
     * @param {password} 密码
     * @return {登录信息}
     */
    goLogin(params, success, fail) {
        return Xhr.post('/user/login', params, success, fail);
    }
}

// 实例化再导出
export default new LoginService();
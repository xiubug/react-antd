/**
 * 公共 action
 * @return
 */

import { LOADING } from '../constants/dispatchTypes';

/**
 * 用于页面和区块的加载中状态
 * @return
 */
const loading = (loading) => {
    return {
        type: LOADING,
        loading
    }
}

export { loading };

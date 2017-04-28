import Immutable from 'immutable';
import {REQUEST_POSTS, RECEIVE_POSTS, GET_DATA_SUCCESS} from '../action/index';

const defaultlState = Immutable.fromJS({data: {}, isFetching: false});

//首次渲染时获取数据
export const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return state.set('isFetching',true);
        case RECEIVE_POSTS:
            return Immutable.Map({'data':action.json,'isFetching':false});//返回一个新的state
        default:
            return state;
    }
}

// 手动获取数据
export const requestData = (state = {}, action = {}) => {
	switch(action.type) {
		case GET_DATA_SUCCESS:
			action.success(action.json);
			state[action.name] = action.json;
			return state;
		default:
			return state;
	}
}
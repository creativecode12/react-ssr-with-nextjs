import axios from "axios";
import { updateUserList } from '../../redux/action/counter/creator';

export const fetchUserListSSR = async () => {
    try {
        const res = await axios.get(
            `https://www.boredapi.com/api/activity`
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchUserListRedux = () => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://www.boredapi.com/api/activity`
        );
        dispatch(updateUserList("UPDATE_USER_LIST", res.data))
    } catch (err) {
        console.log(err);
    }
};
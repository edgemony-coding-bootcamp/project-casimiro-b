import styles from './Dashboard.module.scss';
import { useEffect } from 'react'
import { USER_LOGIN } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(USER_LOGIN())
    }, [])

    console.log(user)
    return (
        <>
            <h1>{user.user.email}</h1>
        </>
    )
}

export default Dashboard;
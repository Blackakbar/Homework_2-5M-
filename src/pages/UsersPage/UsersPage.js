import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputAction, addUserAction, deleteUsersAction, clearInputAction } from "../../redux/actions";
import User from "../../components/User";

export default function UsersPage() {
    const {inputValue, users} = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(inputValue))
    }

    const deleteUsers = () => {
        dispatch(deleteUsersAction())
    }

    return(
        <div className="container">
            <input type="text" placeholder="name" onChange={changeInput} value={inputValue}></input>
            <button className="btn" onClick={addUser}>add</button>
            <button className="btn" onClick={deleteUsers}>delete all</button>

            {users.map((users, idx) => <User key={idx} userName={users}/>)}
        </div>
    )
}
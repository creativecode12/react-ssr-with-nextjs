import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserListRedux } from "services/users";

export default function DataViewer() {
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListRedux())
  }, [])

  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <h2>This is data viewer {users?.activity}</h2>
    </div>
  );
}

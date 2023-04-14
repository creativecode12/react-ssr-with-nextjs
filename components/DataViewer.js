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
    <div className="row">
      <div className="col-md-2">
        <h2>This is data viewer {users?.activity}</h2>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {user.loading ? (
        <h2>Loading</h2>
      ) : (
        <div>
          {user.users.map((e, index) => (
            <p key={index}>{e.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserView;

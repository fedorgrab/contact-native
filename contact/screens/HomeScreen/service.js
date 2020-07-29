import React, {useEffect, useContext} from 'react';
import server from "../../server";
import {UserContext} from "../../application/context";

export function useProfile() {
  const {user, setUser} = useContext(UserContext)
  useEffect(() => {
    server.getProfile().then(user => setUser(user))
  }, []);
  return user
}
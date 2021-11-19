import { Switch, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cadastro } from "../Pages/Cadastro";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { useState, useEffect } from "react";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@doit:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro authenticated={authenticated} />
      </Route>

      <Route exact path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>

      <Route exact path="/dashboard">
        <Dashboard authenticated={authenticated} />
      </Route>
    </Switch>
  );
};

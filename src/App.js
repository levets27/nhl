import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { TeamsProvider } from "./context/teamsContext";
import NavBar from "./layout/navBar";
import TeamPage from "./components/teamPage";

function App() {
  let basePath = "";
  if (process.env.NODE_ENV === "production") {
    basePath = "/nhl";
  }
  return (
    <Router basename={basePath}>
      <div>
        <TeamsProvider>
          <NavBar />
          <Route path={`/teams/:abbr`} component={TeamPage} />
        </TeamsProvider>
        <Route exact path="/" component={Schedule} />
      </div>
    </Router>
  );
}

function Schedule() {
  return (
    <div>
      <h1>Schedule</h1>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ********** LOGIN AUTHENTICATION **********

  //* Admin Access
  const adminUser = {
    email: "hackathonglobal@email.com",
    password: "codingisfun",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  //* Login Function
  const Login = (details) => {
    console.log(details);
    if (details.name === "") {
      setError("Please type your name");
    } else {
      if (
        details.email === adminUser.email &&
        details.password === adminUser.password
      ) {
        setIsLoggedIn(true);
        setUser({
          name: details.name,
          email: details.email,
        });
      } else {
        console.log("Incorrect email or password. Please try again!");
        setError("Incorrect email or password. Please try again!");
      }
    }
  };

  //* Logout Function
  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // ********** FETCH EVENTS FROM API **********
    const fetchEvents = async () => {
      const response = await fetch("https://api.hackthenorth.com/v3/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              sampleEvents {
                id
                name
                event_type
                permission
                start_time
                end_time
                description
                speakers {
                  name
                }
                public_url
                private_url
                related_events
              }
            }
          `,
        }),
      });

      const data = await response.json();
      setEvents(data.data.sampleEvents);
    };

    fetchEvents();
  }, []);

  const publicEvents = events.filter((event) => event.permission === "public");
  
  // ********** SORTING SYSTEM **********

  const sortedEvents = publicEvents
    .concat(
        events.filter((event) => event.permission === "private" && isLoggedIn)
    )
    //*** Sort events in the order by start_time
    .sort((a, b) => a.start_time - b.start_time);

  
    // ********** SEARCHING SYSTEM **********
  const filteredEvents = sortedEvents.filter((event) => {
    const eventValues = Object.values(event);
    return eventValues.some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Logo />
      <div className="search-container">
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search events by name, type, time or speakers..."
        />
      </div>
      {!isLoggedIn && (
        <div>
          <LoginForm Login={Login} error={error} />
        </div>
      )}
      {isLoggedIn && (
        <div className="welcome">
          <h2>
            {" "}
            Welcome, <span> {user.name} </span>{" "}
          </h2>
          <button onClick={Logout}>Log out</button>
        </div>
      )}
      <table className="table-container">
        <thead>
          <tr>
            <th>Name</th>
            <th>Types</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Description</th>
            <th>Speakers</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.event_type}</td>
              <td>{new Date(event.start_time).toLocaleString()}</td>
              <td>{new Date(event.end_time).toLocaleString()}</td>
              <td>{event.description}</td>
              <td>
                <ul>
                  {event.speakers.map((speaker) => (
                    <li key={speaker.name}>{speaker.name}</li>
                  ))}
                </ul>
              </td>
              <td>
                {event.permission === "public" ? (
                  <a href={event.public_url} target="_blank" rel="noreferrer">
                    View event
                  </a>
                ) : isLoggedIn ? (
                  <a href={event.private_url} target="_blank" rel="noreferrer">
                    View event
                  </a>
                ) : (
                  <p>Private Event - Login to view</p>
                )}
                <ul>
                  {event.related_events.map((relatedId) => (
                    <li key={relatedId}>
                      {events.find((event) => event.id === relatedId)?.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default App;
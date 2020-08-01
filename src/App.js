import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import Message from "./Message";
import firebase from "firebase";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [username, setusername] = useState("");

  useEffect(() => {
    setusername(prompt("please enter user name"));
  }, []);

  /*  */
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ message: doc.data(), id: doc.id }))
        );
      });
  }, []);

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="App">
      <h1>Messanger</h1>
      <h2>welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <IconButton
            className="app__IconButton"
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessages}
            disabled={!input}
          >
            <SendIcon>Send Message</SendIcon>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} user={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

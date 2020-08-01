import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./message.css";

const Message = forwardRef(({ user, message }, ref) => {
  const isUser = user === message.username;
  console.log(isUser);
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card
        className={`${isUser ? "message__usercard" : "message__guestcard"}`}
      >
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {!isUser && `${message.username || "uknown"}:`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

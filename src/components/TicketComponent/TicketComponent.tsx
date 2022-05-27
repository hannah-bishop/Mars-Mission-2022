import ReactDOM from "react-dom/client";
import React from "react";
import "./TicketComponent.scss";

export function TicketComponent() {
  return (
    <div>
      {" "}
      <img
        className="image-mars-holiday"
        src="https://images-ext-2.discordapp.net/external/X8VyhfWYjxx4TkSvBCl4zPxmZ8JEw_H8WyzsaaTLRLg/https/www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png"
      />
      <h2> Your Ticket to Mars</h2>
      <form className="grid-container">
        <label>
          {" "}
          Your name:
          <input type="text" />
        </label>
        <label>
          {" "}
          Your surname:
          <input type="text" />
        </label>
        <label>
          {" "}
          Date:
          <input type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2> Mars Trip Preferences </h2>
    </div>
  );
}

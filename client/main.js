import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { Players } from "../imports/api/players";
import App from '../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let jsx = (
      <div>
        <App title={'title!'} players={Players.find({}, {
          sort: {
            score: 1
          }
        }).fetch()}/>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById("app"));
  });
});

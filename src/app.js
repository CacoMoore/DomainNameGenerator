/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("hola" + ".com");

  let pronoun = ["the", "our", "my"];
  let adj = ["odd", "stinky"];
  let noun = ["plumber", "horse"];
  let extension = [".com", ".net", ".cl", ".io"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let e = 0; e < extension.length; e++) {
          console.log(`${pronoun[i]}${adj[a]}${noun[n]}${extension[e]}`);
          const para = document.createElement("p");
          const node = document.createTextNode(
            `${pronoun[i]}${adj[a]}${noun[n]}${extension[e]}`
          );
          para.appendChild(node);
          document.body.appendChild(para);
        }
      }
    }
  }
};

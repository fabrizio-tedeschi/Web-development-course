"use strict"

let queue = ["John", "Mary"];

function addToQueue(user){
    console.log("Adding " + user + " to queue...")
    queue.push(user);
    console.log(queue);
}

function serveUser(){
    let shifted = queue.shift();
    if(shifted === undefined){
        console.log("No such user to serve");
    }
    else{
        console.log("Serving " + shifted + "...");
    }
}

serveUser();
serveUser();
serveUser();

addToQueue("Rose");
addToQueue("Ben");
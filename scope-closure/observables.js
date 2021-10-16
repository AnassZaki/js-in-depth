// Publisher
class Video {
  constructor(observable, name, content) {
    this.observable = observable;
    this.name = name;
    this.content = content;
    // publish the ‘video-uploaded’ event
    this.observable.publish("video-uploaded", {
      name,
      content,
    });
  }
}
// Subscriber
class User {
  constructor(observable) {
    this.observable = observable;
    this.intrestedVideos = [];
    // subscribe with the event naame and the call back function
    this.observable.subscribe("video-uploaded", this.addVideo.bind(this));
  }

  addVideo(video) {
    this.intrestedVideos.push(video);
  }
}
// Observer
class Observable {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  publish(event, eventData) {
    const eventHandlers = this.handlers[event];

    if (eventHandlers) {
      for (var i = 0, l = eventHandlers.length; i < l; ++i) {
        eventHandlers[i].call({}, eventData);
      }
    }
  }
}
// usage
const observable = new Observable();
const user = new User(observable);
const video = new Video(observable, "Khobza", { fe: 332 });
const newVideo = new Video(observable, "New Video", { fe: 33322 });

this.x = 9; // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX();
//  returns 81

const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81

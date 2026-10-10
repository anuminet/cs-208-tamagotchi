"use strict";

class Hub extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("main", {
      id: "main",
      className: "hub"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tree-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "hub-images/gooberts_tree.png",
      alt: "GOOBERTS HUB",
      className: "pixelated-tree",
      id: "goobert-tree"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-body-area"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-legs-area"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-mouth-area"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-eyes-area"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-body-color"
    }), /*#__PURE__*/React.createElement("div", {
      id: "tree-legs-color"
    }), /*#__PURE__*/React.createElement("div", {
      className: "goobert-container"
    }, /*#__PURE__*/React.createElement("img", {
      id: "goobert-legs",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "goobert-body",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "goobert-mouth",
      src: "assets/goobert-parts/Transparent-BG.png"
    }), /*#__PURE__*/React.createElement("img", {
      id: "goobert-eyes",
      src: "assets/goobert-parts/Transparent-BG.png"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "sleep-door-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "index-images/DreamDoor.webp",
      alt: "BEDROOM",
      id: "sleep-door",
      onClick: () => {
        load("bedroom");
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "game-door-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "hub-images/game-door.png",
      alt: "GAME",
      id: "game-door",
      onClick: () => {
        load("gameRoom");
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "shop-door-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "hub-images/shop-door.png",
      alt: "SHOP",
      id: "shop-door",
      onClick: () => {
        load("shop");
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "leave-door-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: "hub-images/leave-door.png",
      alt: "LEAVE",
      id: "leave-door"
    })));
  }
}

/* Basic asset index selectors. */
let assets = {
  bodyType: 0,
  bodyColor: 0,
  legType: 0,
  legColor: 0,
  eyeType: 0,
  eyeExpression: 0,
  mouthType: 0,
  mouthExpression: 0
};

/* Controls for the test goobert */
const randomizeFeatures = () => {
  assets.bodyType = Math.floor(Math.random() * 7);
  assets.bodyColor = Math.floor(Math.random() * 7);
  assets.legType = Math.floor(Math.random() * 7);
  assets.legColor = Math.floor(Math.random() * 7);
  assets.eyeType = Math.floor(Math.random() * 10);
  assets.mouthType = Math.floor(Math.random() * 11);
  setBodyType(bodyType);
  setBodyColor(bodyColor);
  setLegsType(legType);
  setLegsColor(legColor);
  setEyes(eyeType);
  setMouth(mouthType);
  console.log("Features randomized.");
};
const changeBodyType = function () {
  bodyType = bodyType == 6 ? 0 : bodyType + 1;
  setBodyType(bodyType);
};
const changeBodyColor = function () {
  bodyColor = bodyColor == 6 ? 0 : bodyColor + 1;
  setBodyColor(bodyColor);
};
const changeLegType = function () {
  legType = legType == 6 ? 0 : legType + 1;
  setLegsType(legType);
};
const changeLegColor = function () {
  legColor = legColor == 6 ? 0 : legColor + 1;
  setLegsColor(legColor);
};
const changeEyes = function () {
  eyeType = eyeType == 9 ? 0 : eyeType + 1;
  setEyes(eyeType);
};
const changeEyesExpression = () => {
  eyeExpression = eyeExpression == 6 ? 0 : eyeExpression + 1;
  setEyeExpression(eyeExpression);
};
const changeMouth = function () {
  mouthType = mouthType == 10 ? 0 : mouthType + 1;
  setMouth(mouthType);
};
const changeMouthExpression = () => {
  mouthExpression = mouthExpression == 5 ? 0 : mouthExpression + 1;
  setMouthExpression(mouthExpression);
};

/* The following functions set the features of the test goobert. */
const setBodyType = assetIndex => {
  const element = document.getElementById('goobert-body');
  element.style.backgroundPositionY = assets.bodyType * -64 + 'px';
  console.log("Body type set.");
};
const setBodyColor = assetIndex => {
  const element = document.getElementById('goobert-body');
  element.style.backgroundPositionX = assetIndex * -64 + 'px';
  console.log("Body color set.");
};
const setLegsType = assetIndex => {
  const element = document.getElementById('goobert-legs');
  element.style.backgroundPositionY = assetIndex * -64 + 'px';
  console.log("Leg type set.");
};
const setLegsColor = assetIndex => {
  const element = document.getElementById('goobert-legs');
  element.style.backgroundPositionX = assetIndex * -64 + 'px';
  console.log("Leg color set.");
};
const setEyes = assetIndex => {
  const element = document.getElementById('goobert-eyes');
  element.style.backgroundPositionY = assetIndex * -64 + 'px';
  console.log("Eye type set.");
};
const setEyeExpression = assetIndex => {
  const element = document.getElementById('goobert-eyes');
  element.style.backgroundPositionX = assetIndex * -64 + 'px';
  console.log("Eye expression set.");
};
const setMouth = assetIndex => {
  const element = document.getElementById('goobert-mouth');
  element.style.backgroundPositionY = assetIndex * -64 + 'px';
  console.log("Mouth type set.");
};
const setMouthExpression = assetIndex => {
  const element = document.getElementById('goobert-mouth');
  element.style.backgroundPositionX = assetIndex * -64 + 'px';
  console.log("Mouth expression set.");
};

// CHANGING THE GOOBERTS EYES
let eyesArea = document.getElementById("tree-eyes-area");
eyesArea.onclick = function () {
  changeEyes();
};

// CHANGING GOOBERT BODY
let bodyArea = document.getElementById("tree-body-area");
bodyArea.onclick = function () {
  changeBodyType();
};

// CHANGING GOOBERT LEGS
let legArea = document.getElementById("tree-legs-area");
legArea.onclick = function () {
  changeLegType();
};

// CHANGING GOOBERT MOUTH
let mouthArea = document.getElementById("tree-mouth-area");
mouthArea.onclick = function () {
  changeMouth();
};

// CHANGING GOOBERT BODY COLOR
let bodyAreaColor = document.getElementById("tree-body-color");
bodyAreaColor.onclick = function () {
  changeBodyColor();
};

//CHANGING GOOBERT LEG COLOR
let legAreaColor = document.getElementById("tree-legs-color");
legAreaColor.onclick = function () {
  changeLegColor();
};

// GO TO BEDROOM
let sleepDoor = document.getElementById("sleep-door");
sleepDoor.onclick = function () {
  load("bedroom");
};

// GO TO GAME ROOM
let gameDoor = document.getElementById("game-door");
gameDoor.onclick = function () {
  load("gameRoom");
};

// GO TO SHOP
let shopDoor = document.getElementById("shop-door");
shopDoor.onclick = function () {
  load("shop");
};

// LEAVE GAME
let leaveDoor = document.getElementById("leave-door");
leaveDoor.onclick = function () {
  window.location.href = "index.html";
};

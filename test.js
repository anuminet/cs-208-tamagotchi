"use strict";

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
}

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
    console.log("Features randomized.")
}

const changeBodyType = function() {
    bodyType = (bodyType == 6) ? 0 : bodyType + 1;
    setBodyType(bodyType);
}

const changeBodyColor = function() {
    bodyColor = (bodyColor == 6) ? 0 : bodyColor + 1;
    setBodyColor(bodyColor)
}

const changeLegType = function() {
    legType = (legType == 6) ? 0 : legType + 1;
    setLegsType(legType);
}

const changeLegColor = function() {
    legColor = (legColor == 6) ? 0 : legColor + 1;
    setLegsColor(legColor);
}

const changeEyes = function() {
    eyeType = (eyeType == 9) ? 0 : eyeType + 1;
    setEyes(eyeType);
}
const changeEyesExpression = () => {
    eyeExpression = (eyeExpression == 6) ? 0 : eyeExpression + 1;
    setEyeExpression(eyeExpression);
}

const changeMouth = function() {
    mouthType = (mouthType == 10) ? 0 : mouthType + 1;
    setMouth(mouthType);
}
const changeMouthExpression = () => {
    mouthExpression = (mouthExpression == 5) ? 0 : mouthExpression + 1;
    setMouthExpression(mouthExpression);
}

/* The following functions set the features of the test goobert. */
const setBodyType = (assetIndex) => {
    const element = document.getElementById('goobert-body');
    element.style.backgroundPositionY = (assets.bodyType*(-64)) + 'px';
    console.log("Body type set.")
}

const setBodyColor = (assetIndex) => {
    const element = document.getElementById('goobert-body');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Body color set.")
}

const setLegsType = (assetIndex) => {
    const element = document.getElementById('goobert-legs');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Leg type set.");
}

const setLegsColor = (assetIndex) => {
    const element = document.getElementById('goobert-legs');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Leg color set.");
}

const setEyes = (assetIndex) => {
    const element = document.getElementById('goobert-eyes');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Eye type set.");
}
const setEyeExpression = (assetIndex) => {
    const element = document.getElementById('goobert-eyes');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Eye expression set.")
}

const setMouth = (assetIndex) => {
    const element = document.getElementById('goobert-mouth');
    element.style.backgroundPositionY = (assetIndex*(-64)) + 'px';
    console.log("Mouth type set.");
}
const setMouthExpression = (assetIndex) => {
    const element = document.getElementById('goobert-mouth');
    element.style.backgroundPositionX = (assetIndex*(-64)) + 'px';
    console.log("Mouth expression set.")
}
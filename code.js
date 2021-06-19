// WELCOME

onEvent("slider1", "input", function( ) {
	setNumber("label3", getNumber("slider1"));
});
onEvent("button1", "click", function(scrnChange) {
  setScreen("screen2");
});

// LINES

onEvent("button2", "click", function(linesScrn) {
  setScreen("screen3");
});
onEvent("back1", "click", function(back) {
  setScreen("screen2");
});
onEvent("forward1", "click", function(forward) {
  setScreen("screen4");
});
onEvent("back2", "click", function(backa) {
  setScreen("screen3");
});
onEvent("forward2", "click", function(forwarda) {
  setScreen("screen5");
});
onEvent("back3", "click", function(backb) {
  setScreen("screen4");
});

// ANGLES

onEvent("button3", "click", function(angleScrn) {
  setScreen("screen6");
});
onEvent("back4", "click", function(backc) {
  setScreen("screen2");
});
onEvent("forward3", "click", function(forwardb) {
  setScreen("screen7");
});
onEvent("back5", "click", function(backc) {
  setScreen("screen6");
});
onEvent("forward4", "click", function(forwardb) {
  setScreen("screen8");
});
onEvent("back6", "click", function(backc) {
  setScreen("screen7");
});
onEvent("forward5", "click", function(forwardb) {
  setScreen("screen9");
});
onEvent("back7", "click", function(backc) {
  setScreen("screen8");
});
onEvent("forward6", "click", function(forwardb) {
  setScreen("screen10");
});
onEvent("back8", "click", function(backc) {
  setScreen("screen9");
});

// SHAPES

onEvent("button4", "click", function(shapeScrn) {
  setScreen("screen11");
});
onEvent("back9", "click", function(backc) {
  setScreen("screen2");
});
onEvent("forward7", "click", function(forwardb) {
  setScreen("screen12");
});
onEvent("back10", "click", function(backc) {
  setScreen("screen11");
});
onEvent("forward8", "click", function(forwardb) {
  setScreen("screen13");
});
onEvent("back11", "click", function(backc) {
  setScreen("screen12");
});
onEvent("forward9", "click", function(forwardb) {
  setScreen("screen14");
});
onEvent("back12", "click", function(backc) {
  setScreen("screen13");
});

// PERIMETER

onEvent("button5", "click", function(shapeScrn) {
  setScreen("screen15");
});
onEvent("back13", "click", function(backc) {
  setScreen("screen2");
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

onEvent("kay", "click", function(closeBnr) {
  deleteElement("kay");
  deleteElement("label4");
});


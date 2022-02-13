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

// HOME

onEvent("home1", "click", function(closeBnr) {
  setScreen("screen2");
});

onEvent("home2", "click", function(closeBnr) {
  setScreen("screen2");
});

onEvent("home3", "click", function(closeBnr) {
  setScreen("screen2");
});

onEvent("home4", "click", function(closeBnr) {
  setScreen("screen2");
});

// QUIZ

onEvent("quiz", "click", function(openQuiz) {
  setScreen("screen16");
});
onEvent("cancel", "click", function(closeQuiz) {
  setScreen("screen2");
});
onEvent("next1", "click", function(nxtQ) {
  setScreen("screen17");
});
onEvent("cancel2", "click", function(closeQuiz) {
  setScreen("screen2");
});
onEvent("next2", "click", function(nxtQ) {
  setScreen("screen18");
});
onEvent("cancel3", "click", function(closeQuiz) {
  setScreen("screen2");
});
onEvent("next3", "click", function(nxtQ) {
  setScreen("screen");
});
// Q-1
onEvent("button9", "click", function(ans) {
  setProperty("button9", "background-color", "green");
});
onEvent("button8", "click", function(wrans) {
  setProperty("button8", "background-color", "red");
});
onEvent("button10", "click", function(wrans) {
  setProperty("button10", "background-color", "red");
});
onEvent("button11", "click", function(wrans) {
  setProperty("button11", "background-color", "red");
});
//Q-2
onEvent("button12", "click", function(ans) {
  setProperty("button12", "background-color", "green");
});
onEvent("button13", "click", function(wrans) {
  setProperty("button13", "background-color", "red");
});
onEvent("button14", "click", function(wrans) {
  setProperty("button14", "background-color", "red");
});
onEvent("button15", "click", function(wrans) {
  setProperty("button15", "background-color", "red");
});
//Q-3
onEvent("button22", "click", function(ans) {
  setProperty("button22", "background-color", "green");
});
onEvent("button19", "click", function(wrans) {
  setProperty("button19", "background-color", "red");
});
onEvent("button20", "click", function(wrans) {
  setProperty("button20", "background-color", "red");
});
onEvent("button21", "click", function(wrans) {
  setProperty("button21", "background-color", "red");
});
//Q-4
onEvent("button23", "click", function(ans) {
  setProperty("button23", "background-color", "green");
});
onEvent("button24", "click", function(wrans) {
  setProperty("button24", "background-color", "red");
});
onEvent("button25", "click", function(wrans) {
  setProperty("button25", "background-color", "red");
});
onEvent("button26", "click", function(wrans) {
  setProperty("button26", "background-color", "red");
});
//Q-5
onEvent("button29", "click", function(ans) {
  setProperty("button29", "background-color", "green");
});
onEvent("button30", "click", function(wrans) {
  setProperty("button30", "background-color", "red");
});
onEvent("button31", "click", function(wrans) {
  setProperty("button31", "background-color", "red");
});
onEvent("button32", "click", function(wrans) {
  setProperty("button32", "background-color", "red");
});

// ACTIVITIES

onEvent("activity", "click", function(closeQuiz) {
  setScreen("screen19");
});
onEvent("cancel4", "click", function(closeQuiz) {
  setScreen("screen2");
});
onEvent("next4", "click", function(nxtQ) {
  setScreen("screen20");
});
// ACT-1
onEvent("button44", "click", function(ansChk) {
  if (getNumber("text_input2") == 30) {
    setProperty("button44", "background-color", "green");
    setProperty("button44", "text", "Correct!");
  } else {
    setProperty("button44", "background-color", "red");
    setProperty("button44", "text", "Try again!");
  }
});

// TANGRAM

onEvent("game", "click", function(closeGame) {
  setScreen("screen20");
});
onEvent("cancel5", "click", function(closeGame) {
  setScreen("screen2");
});
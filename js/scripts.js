var I = 1; //level
var V = 5;//level2
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
countRN=0;
var addI=0;

$(function(){

  $("#form").submit(function(event){
    event.preventDefault();

  var userInput = $("input#singles").val();
  //maybe count userInput as number of place value digits?
  //1-3
  if (userInput<=3 && userInput>0){
    for (var n = 0; n<userInput; n++){
      $("#outputSingles").append("I");
    }
  }
  //4-5
  else if (userInput<=5&&userInput>3){
    for (var n=userInput; n<5; n++){
      $("#outputSingles").append("I");
    }
      $("#outputSingles").append("V");
  }
  //0
  else if (userInput==0){
  $("#outputSingles").append("");
  }
  //6-8
  else if (userInput>5 && userInput<9){
    $("#outputSingles").append("V");
    for(var n=userInput; n>5; n--){
    $("#outputSingles").append("I");
    }
  }
  else if (userInput==9){
    $("#outputSingles").append("IX");
  }
  else {
  $("#outputSingles").append("");
  }

  //tens
  var userInputTens= $("input#tens").val();
  //1-3
  if (userInputTens<=3 && userInputTens>0){
    for (var n = 0; n<userInputTens; n++){
      console.log("X");
    }
  }
  //4-5
  else if (userInputTens<=5&&userInputTens>3){
    for (var n=userInputTens; n<5; n++){
      console.log("X");
    }
      console.log("L");
  }
  //0
  else if (userInputTens==0){
    console.log("");
  }
  //6-8
  else if (userInputTens>5 && userInputTens<9){
    console.log("L");
    for(var n=userInputTens; n>5; n--){
    console.log("X");
  }}
  else if (userInputTens==9){
      console.log("XC");
    }
      else {
      console.log("");
    }
//hundreds
var userInputHundreds= $("input#hundreds").val();
//1-3
if (userInputHundreds<=3 && userInputHundreds>0){
  for (var n = 0; n<userInputHundreds; n++){
    console.log("C");
  }
}
//4-5
else if (userInputHundreds<=5&&userInputHundreds>3){
  for (var n=userInputHundreds; n<5; n++){
    console.log("C");
  }
    console.log("D");
}
//0
else if (userInputHundreds==0){
  console.log("");
}
//6-8
else if (userInputHundreds>5 && userInputHundreds<9){
  console.log("D");
  for(var n=userInputHundreds; n>5; n--){
  console.log("C");
}}
else if (userInputHundreds==9){
    console.log("CM");
  }
    else {
    console.log("");
  }
//thousands
var userInputThousands= $("input#thousands").val();
//1-3
if (userInputThousands<=3 && userInputThousands>0){
  for (var n = 0; n<userInputThousands; n++){
    console.log("M");
  }
}
else {
  console.log("");
}

  });//submit closing
});//function docready

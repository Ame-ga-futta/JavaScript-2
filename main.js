/*global $*/

let input = 0;
let output = 0;
let display = 0;
let slice = 0;

$(document).ready(function(){
  /* 数値入力 */
  $(".keyboard-number").click(function(){
    input = $(this).text();
    display = $(".screen-display").text();
    
    if(display == "0"){
      output = input;
    }else if(display == "00"){
      output = input;
    }else{
      output = display + input;
    }
    
    $(".screen-display").text(output);
  });
  /* 記号入力 */
  $(".keyboard-sign").click(function(){
    input = $(this).text();
    display = $(".screen-display").text();
    slice = display.slice(-1);
    
    if(slice !== "+" && slice !== "-" && slice !== "*" && slice !== "/" && slice !=="."){
      if (display !== "0"){
        output = display + input;
        $(".screen-display").text(output);
      }else if (display === "0" && input === "."){
        output = display + input;
        $(".screen-display").text(output);
      }
    }
  });
  
  /* AC */
  $(".keyboard-AC").click(function(){
    input = 0;
    display = 0;
    output = 0;
    slice = 0;
    $(".screen-display").text(output);
  });
  
  /* equal */
  $(".keyboard-equal").click(function(){
    output = eval($(".screen-display").text());
    $(".screen-display").text(output);
  });
});
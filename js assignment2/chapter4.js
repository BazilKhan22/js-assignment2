// Chapter no.4


// 1. decalare 3 var
var firstName = "Bazil", lastName = "Khan", age = 21;

// 2. Declare 5 legal & 5 illegal variable names
        // Legal variable names
        var myVar1 = "Legal";
        var _myVar2 = "Legal";
        var $myVar3 = "Legal";
        var myVar4 = "Legal";
        var myVar5 = "Legal";

 // Illegal variable names (uncommenting these will cause errors)
        var 1stVar = "Illegal"; // Starts with a number
        var my Var = "Illegal"; // Contains a space
        var var!Name = "Illegal"; // Contains a special character
        var @myVar = "Illegal"; // Starts with @
        var class = "Illegal"; // Reserved keyword

// 3.Display the rules in the browser
document.write('<h1>Rules for naming JS variables</h1>');
document.write('<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>_</b>, and <b>$</b>. For example $my_1stVariable</p>');
document.write('<p>Variables must begin with a <b>letter</b>, <b>_</b> or <b>$</b>. For example $name, _name or name</p>');
document.write('<p>Variable names are case <b>sensitive</b></p>');
document.write('<p>Variable names should not be JS <b>reserved keywords</b></p>');


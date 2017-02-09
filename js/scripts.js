$( document ).ready(function() {

    
$("#b1").click(function() { //each click pulls a random var from the varlist
	var name = document.getElementById("name").value;
  var insults = [
    "That " + name + " is a bad hombre. No good. Very bad. Believe me, you want " + name + " out of country!",
    name + "? More like FAKE TEARS " + name,
    "Can you believe " + name + "? SAD!",
    "I'm a winner and " + name + " is a total loser! STUPID!",
    name + " is looking so dumb. VOTE TRUMP AND WIN AGAIN!",
    "Why won't " + name + " leave? Dummy!",
    name + "-- 4/10, would not grab.",
    "Crooked " + name + ".",
    name + " is FAKE NEWS. VERY DISHONEST!",
    "The American people don't care about my tax returns. They want to know why " + name + " is sooo boring!",
    name + " lost much of their money on that run — that's why " +name + " carries their own bags now.",
    "Hokey garbage " + name + ".",
    "Liberal clown " + name + ".",
    name + " is a mess! Just like Dem party.",
    name + " doesn't have a clue.",
    "#" + name + "FAIL",
    name + " is big problems. The bigness also hits because the — the size of it. The size.",
    name + " is dead, illegal, and registered to vote in two states.",
    name + " got millions of illegal votes. I would've won the popular vote if I was campaigning for the popular vote. I would've won very, very easily.",
    name + " is American CARNAGE! Send in the Feds. NOW!",
    name + " is not fabulous at all."
		];
  $(".display").html(insults[Math.floor(Math.random() * insults.length)])
  //math.random generates random decimal number, then is multiplied by number of var in insults
  //math.floor will round decimal down to nearest whole number
   });
});
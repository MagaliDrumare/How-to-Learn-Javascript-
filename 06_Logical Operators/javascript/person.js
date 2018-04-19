
//if (1==1) {

//console.log ("We should see that! ")

// && and
// || alt maj L
var cat1 = 5;
var cat2 = 10;
var cat3 = 1;
var cat3DisabledHandicap = true;

if ((cat1 > cat2 && cat1 > cat3) && !cat3DisabledHandicap){
  console.log("cat 1 is the cuttest");
}
else if ((cat2 > cat1 && cat2 > cat3) && !cat3DisabledHandicap){
  console.log("cat 2 is the cuttest");
}
else if ((cat3 > cat1 && cat3 > cat2)|| cat3DisabledHandicap){
  console.log("cat 3 is the cuttest");
}

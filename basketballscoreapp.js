 let home = 0
 let guest = 0


 function hadd1() {
   console.log("add1 clicked")
   home += 1
   document.getElementById("home-score").textContent = home
 
 }

 function hadd2() {
   console.log("add2 clicked")
   home += 2
   document.getElementById("home-score").textContent = home
 
 }

 function hadd3() {
   console.log("add3 clicked")
   home += 3
   document.getElementById("home-score").textContent = home
 
 }

 function hdeduct() {
   console.log("deduct clicked")
   home -= 1
   document.getElementById("home-score").textContent = home
 }

 function gadd1() {
   console.log("add1 clicked")
   guest += 1
   document.getElementById("guest-score").textContent = guest
 
 }
 function gadd2() {
   console.log("add2 clicked")
   guest += 2
   document.getElementById("guest-score").textContent = guest
 
 }
 function gadd3() {
   console.log("add3 clicked")
   guest += 3
   document.getElementById("guest-score").textContent = guest
 
 }
 function gdeduct() {
   console.log("deduct clicked")
   guest -= 1
   document.getElementById("guest-score").textContent = guest
 }


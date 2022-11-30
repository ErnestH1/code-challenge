//This functions checks for the users speed
function chkSpeed() {
    const speedLimit = 70;
    const pointPerKm = 5;
    // getting the value of the speed from the user through input 
  let speed = parseInt(document.getElementById("input").value)
  //This function displays OK when the entered value is less than 70
    if (speed <= speedLimit + pointPerKm) {
        document.getElementById("message").innerHTML = 'OK'
        return
     
    }
  // comparing if the users speed is greater that 12 points 
    const pointers = Math.floor((speed - speedLimit) / pointPerKm);
    if (pointers >= 12) {
        // when points is greater than 12 its displays the licence is suspended
    document.getElementById("message").innerHTML =("License suspended" + " " + "with" + " " +  pointers + " " + "points");}
    else {
    document.getElementById("message").innerHTML =("Points", pointers);}
  }

function chkSpeed() {
    const speedLimit = 70;
    const pointPerKm = 5;
  let speed = parseInt(document.getElementById("input").value)
    if (speed <= speedLimit + pointPerKm) {
        document.getElementById("message").innerHTML = 'OK'
        return
     
    }
  
    const pointers = Math.floor((speed - speedLimit) / pointPerKm);
    if (pointers >= 12) {
    document.getElementById("message").innerHTML =("License suspended" + " " + "with" + " " +  pointers + " " + "points");}
    else {
    document.getElementById("message").innerHTML =("Points", pointers);}
  }
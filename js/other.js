function wol(braddress, mac) {
    alert("WoL magic packet sento to " + mac);
      var xhttp = new XMLHttpRequest();
          xhttp.open("GET", "wol.php?MAC="+mac+"&braddress="+braddress, true);
          xhttp.send();
}

function update() {
    alert("Update issued");
      var xhttp = new XMLHttpRequest();
          xhttp.open("GET", "getHosts.php", true);
          xhttp.send();
}

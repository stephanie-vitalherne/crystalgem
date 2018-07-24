function loadGems() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);//set responseText as a variable so that you can use it better
      document.getElementById("garName").innerHTML = response.crystalGems.gems.Garnet.name;
      document.getElementById("garType").innerHTML = response.crystalGems.gems.Garnet.type;
      document.getElementById("garHair").innerHTML = response.crystalGems.gems.Garnet.hair;
      document.getElementById("garWeap").innerHTML = response.crystalGems.gems.Garnet.weapon;
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data2/master/gems.json", true);
  xhttp.send();
}

loadGems();

function loadGems() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);//set responseText as a variable so that you can use it better
      document.getElementById("garName").innerHTML = response.crystalGems.gems.Garnet.name;
      document.getElementById("garType").innerHTML = response.crystalGems.gems.Garnet.type;
      document.getElementById("garHair").innerHTML = response.crystalGems.gems.Garnet.hair;
      document.getElementById("garWeap").innerHTML = response.crystalGems.gems.Garnet.weapon;

      document.getElementById("peaName").innerHTML = response.crystalGems.gems.Pearl.name;
      document.getElementById("peaType").innerHTML = response.crystalGems.gems.Pearl.type;
      document.getElementById("peaHair").innerHTML = response.crystalGems.gems.Pearl.hair;
      document.getElementById("peaWeap").innerHTML = response.crystalGems.gems.Pearl.weapon;

      document.getElementById("ameName").innerHTML = response.crystalGems.gems.Amethyst.name;
      document.getElementById("ameType").innerHTML = response.crystalGems.gems.Amethyst.type;
      document.getElementById("ameHair").innerHTML = response.crystalGems.gems.Amethyst.hair;
      document.getElementById("ameWeap").innerHTML = response.crystalGems.gems.Amethyst.weapon;

      document.getElementById("stevName").innerHTML = response.crystalGems.gems.Steven.name;
      document.getElementById("stevType").innerHTML = response.crystalGems.gems.Steven.type;
      document.getElementById("stevHair").innerHTML = response.crystalGems.gems.Steven.hair;
      document.getElementById("stevWeap").innerHTML = response.crystalGems.gems.Steven.weapon;
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/stephanie-vitalherne/data2/master/gems.json", true);
  xhttp.send();
}

loadGems();

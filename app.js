const url = 'https://raw.githubusercontent.com/stephanie-vitalherne/data2/master/gems.json';

function Get(url){
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send(null);
  return request.responseText;
}
var jsonURL = JSON.parse(Get(url));
console.log("this is " + jsonURL.crystalGems.gems.Garnet.type);


document.getElementById('name').innerHTML = jsonURL.crystalGems.gems.Garnet.name;
document.getElementById('type').innerHTML = jsonURL.crystalGems.gems.Garnet.type;

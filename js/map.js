
let mymap = L.map('map2').setView([18.180, -66.308], 9.43);

L.tileLayer('https://api.mapbox.com/styles/v1/cperezbrito/cjp64f1445i8c2rojhybms09j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3BlcmV6YnJpdG8iLCJhIjoiY2pveHJqd2p5MmJoaDNwbW9oZWhkdjd0dCJ9.uA-nkJSHeBJCpQPjYpKiIQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap);

//adding the MARKERS

//1-Yunque
let marker1 = L.marker([18.2951,-65.8000]).addTo(mymap);

marker1.bindPopup("<b>Yunque National Forest</b><br>José A. Saldaña 'Tonti'");
//1-Yunque

//2-toabaja
let marker2 = L.marker([18.4445,-66.2543]).addTo(mymap);

marker2.bindPopup("<b>Toa Baja</b><br>María González & Víctor Cartagena");
//2-toabaja

//3-trujillo Alto
let marker3 = L.marker([18.3563,-66.0034]).addTo(mymap);

marker3.bindPopup("<b>Trujillo Alto</b><br>Gregoria Delgado Aponte");
//3-trujillo Alto

//4-Utuado
let marker4 = L.marker([18.2655,-66.7005]).addTo(mymap);

marker4.bindPopup("<b>Utuado</b><br>Harry Marrero & Vivian Lopatgui<br>Modesto Viruet");
//4-utuado

//5-Yabucoa
let marker5 = L.marker([18.0505,-65.8793]).addTo(mymap);

marker5.bindPopup("<b>Yabucoa</b><br>Pablo Soto Soto");
//5-Yabucoa

//6-san juan
let marker6 = L.marker([18.4661,-66.1191]).addTo(mymap);

marker6.bindPopup("<b>San Juan</b><br>Carlos Bonnet-Vargas");
//6-san Juan

//map1


let mymap1 = L.map('map1').setView([25.050, -74.383], 4.63);

L.tileLayer('https://api.mapbox.com/styles/v1/cperezbrito/cjp6bcljj17sx2smwc94udinv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3BlcmV6YnJpdG8iLCJhIjoiY2pveHJqd2p5MmJoaDNwbW9oZWhkdjd0dCJ9.uA-nkJSHeBJCpQPjYpKiIQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap1);

  let marker = L.marker([18.4661,-66.1191]).addTo(mymap1);

  marker.bindPopup("<b>San Juan</b><br>").openPopup();

  //now image overlay is below
  //link to overlay tutorial: https://www.youtube.com/watch?v=12GC3iA84HY

let overlay = L.imageOverlay('videos/hur_40.png', [[27.140599, -76.518013],[15.28859, -65.77779]]).addTo(mymap1);
//Caribbean Sea15.471582, -63.039429
//Caribbean Sea15.579697, -63.876768
//Georgia32.062237, -84.712004
//Georgia 31.180504, -84.806667

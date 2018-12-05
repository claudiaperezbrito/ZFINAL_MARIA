//MAP 2

let mymap = L.map('maphurricane').setView([18.574, -68.642], 5.10);

L.tileLayer('https://api.mapbox.com/styles/v1/cperezbrito/cjp6bcljj17sx2smwc94udinv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY3BlcmV6YnJpdG8iLCJhIjoiY2pveHJqd2p5MmJoaDNwbW9oZWhkdjd0dCJ9.uA-nkJSHeBJCpQPjYpKiIQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
  }).addTo(mymap1);

  let marker = L.marker([18.4661,-66.1191]).addTo(mymap);

  marker.bindPopup("<b>San Juan</b><br>").openPopup()

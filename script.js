var map = L.map("map").setView([53.463956428380335, -2.291187623593197], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([53.463956428380335, -2.291187623593197])
  .addTo(map)
  .bindPopup("Ini Marker")
  .openPopup();

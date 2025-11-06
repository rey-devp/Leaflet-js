// inisialisasi peta
var map = L.map("map").setView([-6.8743902175547085, 107.57576416732226], 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Tambahkan marker
L.marker([-6.8743902175547085, 107.57576416732226])
  .addTo(map)
  .bindPopup("Custom Marker")
  .openPopup();

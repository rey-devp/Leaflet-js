// Inisialisasi peta (koordinat Bandung)
const map = L.map("map").setView([-6.914744, 107.60981], 13);

// Tambahkan tile layer dari OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

// Tambahkan marker
L.marker([-6.914744, 107.60981])
  .addTo(map)
  .bindPopup("Ini adalah Marker")
  .openPopup();

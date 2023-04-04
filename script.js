// Menambahkan kelas "active" pada menu navigasi yang sedang aktif
const currentLocation = location.href;
const navLinks = document.querySelectorAll("nav ul li a");
const navLength = navLinks.length;
for (let i = 0; i < navLength; i++) {
  if (navLinks[i].href === currentLocation) {
    navLinks[i].className = "active";
  }
}

// Menampilkan kotak dialog saat tombol "Hubungi Kami" di klik
const btnHubungiKami = document.querySelector("#btn-hubungi-kami");
const dialogKontak = document.querySelector(".dialog-kontak");
const btnClose = document.querySelector(".btn-close");

btnHubungiKami.addEventListener("click", function() {
  dialogKontak.style.display = "block";
});

btnClose.addEventListener("click", function() {
  dialogKontak.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == dialogKontak) {
    dialogKontak.style.display = "none";
  }
});

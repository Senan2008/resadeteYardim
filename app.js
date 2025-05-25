function degistir() {
    document.getElementById("main").style.display = "none";
    document.getElementById("gizli").style.display = "block";
}

function geri() {
    document.getElementById("gizli").style.display = "none";
    document.getElementById("main").style.display = "block";
}

function showLoader() {
    document.getElementById('container').style.display = 'flex'; // container'ı göster
    document.getElementById('loader').style.display = 'block';   // loader'ı göster
}

function hideLoader() {
    document.getElementById('container').style.display = 'none'; // container'ı gizle
    document.getElementById('loader').style.display = 'none';    // loader'ı gizle
}

const button = document.getElementById('bagisEtBTN');
const container = document.getElementById('container');

button.addEventListener("click", () => {
    showLoader();

    setTimeout(() => {
        hideLoader();
        degistir();
        button.style.display = 'none';
    }, 600);
});

// Geri butonunu aktif et
const geriBtn = document.querySelector('.geriBtn');
geriBtn.addEventListener("click", () => {
    showLoader();
    setTimeout(() => {
        hideLoader();
        geri();
        button.style.display = 'block'; // Butonu geri getir
    }, 600);
});

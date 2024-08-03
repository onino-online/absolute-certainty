window.onload = function () {
  // Create the popup container
  let popup = document.createElement("div");
  popup.id = "popup";
  popup.innerHTML = `
        <div class="popup-content">
            <p>Quels sont vos certitudes ?</p>
            <button onclick="handleResponse('oui')">Oui</button>
            <button onclick="handleResponse('non')">Non</button>
        </div>
    `;
  document.body.appendChild(popup);
};

function handleResponse(response) {
  alert("Vous avez choisi : " + response);
  document.getElementById("popup").style.display = "none";
  playMusic();
}

function playMusic() {
  let audio = document.getElementById("background-music");
  audio.play();
}

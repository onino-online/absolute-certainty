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
document.addEventListener("DOMContentLoaded", function () {
  const italicElements = document.querySelectorAll(".poem .italic");
  const allParagraphs = document.querySelectorAll(".poem p");

  // Crée un observer pour les éléments italics
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Marque les paragraphes précédents pour fade-out
          fadeOutPrevious(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Détecte lorsque 50% de l'élément est visible
    }
  );

  // Fonction pour appliquer le fade-out aux paragraphes précédents
  function fadeOutPrevious(currentElement) {
    let index = Array.from(allParagraphs).indexOf(currentElement);
    for (let i = 0; i < index; i++) {
      let paragraph = allParagraphs[i];
      if (
        !paragraph.classList.contains("italic") &&
        !paragraph.classList.contains("hidden")
      ) {
        paragraph.classList.add("fade-out");

        // Une fois la transition terminée, ajoute "hidden" pour masquer complètement
        paragraph.addEventListener(
          "transitionend",
          function () {
            paragraph.classList.add("hidden");
          },
          { once: true } // Écoute une seule fois pour éviter les appels multiples
        );
      }
    }
  }
  function fadeOutPrevious(currentElement) {
    let index = Array.from(allParagraphs).indexOf(currentElement);

    for (let i = 0; i < index; i++) {
      if (!allParagraphs[i].classList.contains("italic")) {
        setTimeout(() => {
          allParagraphs[i].classList.add("fade-out");

          allParagraphs[i].addEventListener(
            "transitionend",
            function onTransitionEnd() {
              allParagraphs[i].classList.add("hidden");
              allParagraphs[i].removeEventListener(
                "transitionend",
                onTransitionEnd
              );
            }
          );
        }, 13000);
      }
    }
    document.querySelector(".poeme").classList.add("active");
  }

  italicElements.forEach((element) => {
    observer.observe(element);
  });
});

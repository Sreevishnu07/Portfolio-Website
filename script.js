document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});

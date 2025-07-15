function renderAbout() {
  const container = document.getElementById("content");
  container.innerHTML = "";
  
   const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "About Mamma 📖";

    const intro = document.createElement("div");
    intro.classList.add("tagline");
    intro.textContent = "It’s not just food — it’s Mamma’s way. 💕";

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("card");

  aboutCard.innerHTML = `
    <p>
      At Mamma’s Table, we believe in food that warms the heart and fills the soul. Every dish is inspired by generations of love, laughter, and Sunday kitchen traditions.
      Whether you're here for the handmade pasta or just Mamma’s smile, there’s always a seat for you at the table.
    </p>
    <h3>Come Visit Us</h3>
    <p>🍝 123 Basil Street, Pastaville, Italy 00042</p>
    <p>📧 hello@mammastable.mom</p>
    <p>📞 +39 123 456 7890</p>
  `;

  container.appendChild(title);
  container.appendChild(intro);
  container.appendChild(aboutCard);
  
}


export { renderAbout };

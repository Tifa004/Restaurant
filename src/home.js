function renderHome() {
  const container = document.getElementById("content");
  container.innerHTML = ""; // Clear previous content

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "🍝 Mamma’s Table 🥖";

  const tagline = document.createElement("div");
  tagline.classList.add("tagline");
  tagline.textContent = "From Mamma’s kitchen with love ❤️";

  const about = document.createElement("div");
  about.classList.add("card");
  about.textContent =
    "Mamma’s Table is your cozy neighborhood kitchen where tradition meets comfort. Every dish is made with heart, family recipes, and a pinch of nostalgia.";

  const hours = document.createElement("div");
  hours.classList.add("card");
  hours.innerHTML = `
    <h3>🕰 Opening Hours</h3>
    <ul>
      <li>Mon–Thu: 11:00 AM – 9:00 PM</li>
      <li>Fri–Sat: 11:00 AM – 10:30 PM</li>
      <li>Sunday: Closed for family time <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>human-male-male-child</title><path d="M12.5 11.5C13.3 11.5 14 10.8 14 10S13.3 8.5 12.5 8.5 11 9.2 11 10 11.7 11.5 12.5 11.5M5.5 6C6.6 6 7.5 5.1 7.5 4S6.6 2 5.5 2 3.5 2.9 3.5 4 4.4 6 5.5 6M7.5 22V15H9V9C9 7.9 8.1 7 7 7H4C2.9 7 2 7.9 2 9V15H3.5V22H7.5M14 22V18H15V14C15 13.2 14.3 12.5 13.5 12.5H11.5C10.7 12.5 10 13.2 10 14V18H11V22H14M18.5 6C19.6 6 20.5 5.1 20.5 4S19.6 2 18.5 2 16.5 2.9 16.5 4 17.4 6 18.5 6M22 9V15H20.5V22H17V14C17 12.6 16.2 11.4 15 10.9V9C15 7.9 15.9 7 17 7H20C21.1 7 22 7.9 22 9Z" /></svg></li>
    </ul>
  `;

  const special = document.createElement("div");
  special.classList.add("card");

  const specialTitle = document.createElement("h3");
  specialTitle.textContent = "🍝 Today’s Special";

  const specialText = document.createElement("p");
  specialText.textContent =
    "Handmade Spinach Ricotta Ravioli with Mamma’s secret tomato basil sauce!";

  const specialImg = document.createElement("img");
  specialImg.src = "https://cdn.shopify.com/s/files/1/0367/5907/7001/files/shutterstock_511586950_res.jpg?v=1612368424";
  specialImg.alt = "Spinach Ricotta Ravioli with tomato basil sauce";
  specialImg.classList.add("special-img");

  special.appendChild(specialTitle);
  special.appendChild(specialText);
  special.appendChild(specialImg);

  container.appendChild(title);
  container.appendChild(tagline);
  container.appendChild(about);
  container.appendChild(hours);
  container.appendChild(special);
}



export { renderHome };

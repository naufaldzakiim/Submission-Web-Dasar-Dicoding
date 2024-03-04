const data = [
  {
    title: "Basic",
    price: "Free",
    feature: [
      "Download Maximum 2 per Day",
      "Unlock Basic Template",
      "Unlock Essentials Editing Tools",
      "Up to 720p Video Quality",
      "1GB Cloud Storage",
    ],
  },
  {
    title: "Premium",
    price: "IDR 99K/Month",
    feature: [
      "No Limit Downloads per Day",
      "Unlock Premium Template",
      "Unlock Complete Editing Tools",
      "Up to 1080p Video Quality",
      "10GB Cloud Storage",
      "No Watermarks",
    ],
  },
  {
    title: "Platinum",
    price: "IDR 499K/Month",
    feature: [
      "No Limit Downloads per Day",
      "Unlock Platinum Template",
      "Unlock Complete AI Powered Editing Tools",
      "Up to 4K Video Quality",
      "100GB Cloud Storage",
      "No Watermarks",
      "Convert to Adobe Ecosystem Project File",
      "Social Media Engagement Analytics Tools",
      "Free Social Media Strategist Consultation",
      "Post to Multiaccount in One Click",
    ],
  },
];

const button = document.getElementById("switch");
const navBar = document.getElementById("navBar");
const profile = document.getElementById("profile");
const content = document.getElementById("content");
const credits = document.getElementById("credits");
const priceMenu = document.getElementById("priceMenu");

button.addEventListener("click", function () {
  navBar.classList.toggle("glass-card");
  profile.classList.toggle("glass-card");
  content.classList.toggle("glass-card");
  credits.classList.toggle("glass-card");

  navBar.classList.toggle("alter-glass-card");
  profile.classList.toggle("alter-glass-card");
  content.classList.toggle("alter-glass-card");
  credits.classList.toggle("alter-glass-card");
});

data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("neumorp-card");
  const dynamicClass = item.title.toLowerCase()+"-member";
  card.classList.add(dynamicClass);
  card.innerHTML = `
    <header>
      <h2>${item.title}</h2>
      <p>${item.price}</p>
    </header>
    <section>
      <ul>
        ${item.feature.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </section>  
  `;

  priceMenu.appendChild(card);
});
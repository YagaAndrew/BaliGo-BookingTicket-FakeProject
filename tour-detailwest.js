// DATA //

const destinations = [
  "Kelingking Beach",
  "Paluang Cliff",
  "Broken Beach",
  "Angel's Billabong",
  "Crystal Bay",
];

const itinerary = [
  { time: "07:00 WITA", label: "Meeting point at Sanur Harbour" },
  { time: "07:30 WITA", label: "Fast boat departs to Nusa Penida" },
  { time: "08:10 WITA", label: "Fast boat arrives at Nusa Penida" },
  { time: "09:30 WITA", label: "Visit Broken Beach & Angel Billabong" },
  { time: "12:00 WITA", label: "Visit Kelingking Beach & Paluang Cliff" },
  { time: "13:00 WITA", label: "Lunch at restaurant" },
  { time: "14:30 WITA", label: "Visit Crystal Bay" },
  { time: "16:00 WITA", label: "Return to Nusa Penida Harbour" },
  { time: "17:00 WITA", label: "Fast boat departs to Sanur Harbour" },
  { time: "17:40 WITA", label: "Arrive at Sanur Harbour — trip complete" },
];

const includes = [
  "Roundtrip fast boat ticket to Nusa Penida",
  "Private car for day tour in Nusa Penida",
  "Driver as guide and photographer",
  "Lunch at local restaurant",
  "Entrance ticket to all mentioned tourist objects",
  "Insurance",
];

const excludes = [
  "Transport from a hotel in Bali to Sanur port (can be requested with additional price)",
  "Tickets to any private selfie spots in the Paluang Cliff area — purchase on the spot if you wish",
  "Admission fee at Nusa Penida Harbour",
];

const pricingList = [
  { pax: 1, original: 1200000, price: 1000000 },
  { pax: 2, original: 900000, price: 700000 },
  { pax: 3, original: 800000, price: 615000 },
  { pax: 4, original: 700000, price: 550000 },
  { pax: 5, original: 660000, price: 500000 },
];

// HELPER //
function formatRupiah(number) {
  return "Rp " + number.toLocaleString("id-ID");
}

function renderStars() {
  const starsContainer = document.getElementById("stars");
  let starsHTML = "";

  for (let i = 0; i < 1; i++) {
    starsHTML += ` ★★★★★`;
  }

  starsContainer.innerHTML = starsHTML;
}

function renderDestinations() {
  const container = document.getElementById("destinations");
  let html = "";

  for (let i = 0; i < destinations.length; i++) {
    html += `<span class="tag">${destinations[i]}</span>`;
  }

  container.innerHTML = html;
}

function renderItinerary() {
  const container = document.getElementById("itinerary");
  let html = "";

  for (let i = 0; i < itinerary.length; i++) {
    const item = itinerary[i];
    const isLastItem = i === itinerary.length - 1;
    html += `<li class="itinerary-item">
    <div class="itinerary-marker">
    <span class="itinerary-dot"></span>`;

    if (!isLastItem) {
      html += `<span class="itinerary-line"></span>`;
    }

    html += `</div>
    <div class="itinerary-content">
    <span class="itinerary-time">${item.time}</span>
    <p class="itinerary-label">${item.label}</p>
    </div>
    </li>`;
  }

  container.innerHTML = html;
}

function renderIncludes() {
  const container = document.getElementById("includes");
  let html = "";

  for (let i = 0; i < includes.length; i++) {
    html += `<li>
        <img src="assets/black-checklist-icon.svg" alt="" class="list-icon" />
        <span>${includes[i]}</span>
        </li>`;
  }

  container.innerHTML = html;
}

function renderExcludes() {
  const container = document.getElementById("excludes");
  let html = "";

  for (let i = 0; i < excludes.length; i++) {
    html += `<li>
        <img src="assets/remove-icon.png" alt="" class="list-icon" />
        <span>${excludes[i]}</span>
        </li>`;
  }

  container.innerHTML = html;
}

function renderPricingTable() {
  const tableBody = document.getElementById("pricingBody");
  let html = "";

  for (let i = 0; i < pricingList.length; i++) {
    const row = pricingList[i];

    html += `<tr>
    <td class="price-pax">${row.pax} Pax</td>
    <td>
    <span class="price-original">${formatRupiah(row.original)}</span>
    <span class="price-current">${formatRupiah(row.price)}</span>
    </td>
    </tr>`;
  }

  tableBody.innerHTML = html;
}

function handleBookNowClick() {
  window.location.href = "booking-page.html";
}

function init() {
  renderStars();
  renderDestinations();
  renderItinerary();
  renderIncludes();
  renderExcludes();
  renderPricingTable();

  const bookButton = document.getElementById("bookBtn");
  bookButton.addEventListener("click", handleBookNowClick);
}

document.addEventListener("DOMContentLoaded", init);

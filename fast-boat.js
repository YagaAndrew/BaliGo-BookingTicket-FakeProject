const fastboat = [
  {
    id: 1,
    operator: "Royal Semaya Fast Boat",
    image: "assets/royal-semaya.png",
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    date: "2026-08-27",
    departure: "07:30",
    arrival: "08:15",
    price: 100000,
  },
  {
    id: 2,
    operator: "The GO Cruise",
    image: "assets/the-go-cruise.png",
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    date: "2026-08-27",
    departure: "08:30",
    arrival: "09:15",
    price: 150000,
  },
  {
    id: 3,
    operator: "Scoot Fast Cruise",
    image: "assets/scoot-cruise.png",
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    date: "2026-08-28",
    departure: "09:00",
    arrival: "09:45",
    price: 160000,
  },
  {
    id: 4,
    operator: "Kusamba Express",
    image: "assets/kusamba-express.png",
    from: "Kusamba (Bali)",
    to: "Sampalan (Nusa Penida)",
    date: "2026-08-27",
    departure: "06:30",
    arrival: "07:15",
    price: 120000,
  },
];

const params = new URLSearchParams(window.location.search);

const selectedForm = params.get("from") || "Sanur(Bali)";
const selectedTo = params.get("to") || "Banjar Nyuh(Nusa penida)";
const selectedDate = params.get("date");
const selectedTrip = params.get("trip") || "oneway";
const selectedReturnDate = params.get("returnDate") || "";

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const dateObj = new Date(dateStr);
  return dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const departureDateEl = document.getElementById("departureDate");
if (departureDateEl) {
  departureDateEl.textContent = formatDate(selectedDate);
}

const locationSpans = document.querySelectorAll(".search-card .location span");
if (locationSpans.length >= 2) {
  locationSpans[0].textContent = selectedFrom.toUpperCase();
  locationSpans[1].textContent = selectedTo.toUpperCase();
}

const filteredFastboats = fastboats.filter(function (boat) {
  return (
    boat.from.toLowerCase() === selectedFrom.toLowerCase() &&
    boat.to.toLowerCase() === selectedTo.toLowerCase() &&
    boat.date === selectedDate
  );
});

// Boat Result

const boatResults = document.querySelector(".boat-results");

function renderBoatCard(boat) {
  return `
    <article class="boat-card">
      <img src="${boat.image}" alt="${boat.operator}" class="boat-image" />
      <div class="boat-info">
        <div class="boat-name">
          <span class="direct">DIRECT</span>
          <h2>${boat.operator}</h2>
        </div>
        <div class="features">
          <span>Free Reschedule</span>
          <span>Free Cancellation</span>
        </div>
        <div class="boat-route">
          <div class="destination">
            <span>${boat.from.toUpperCase()}</span>
            <strong>${boat.departure}</strong>
          </div>
          <span class="route-arrow">→</span>
          <div class="destination">
            <span>${boat.to.toUpperCase()}</span>
            <strong>${boat.arrival}</strong>
          </div>
        </div>
        <hr class="card-divider" />
        <button class="book-button" onclick="bookBoat(${boat.id}, '${boat.operator}')">
          Book
        </button>
      </div>
      <div class="boat-price">
        <span>START FROM</span>
        <strong>Rp.${boat.price.toLocaleString("id-ID")}</strong>
      </div>
    </article>
  `;
}

if (boatResults) {
  if (filteredFastboats.length === 0) {
    boatResults.innerHTML = `<p class="no-result">Tidak ada jadwal fastboat untuk rute dan tanggal yang dipilih.</p>`;
  } else {
    boatResults.innerHTML = filteredFastboats.map(renderBoatCard).join("");
  }
}

// Book Function

function bookBoat(boatId, operatorName) {
  const bookingParams = new URLSearchParams({
    boatId: boatId,
    operator: operatorName,
    from: selectedFrom,
    to: selectedTo,
    date: selectedDate,
    trip: selectedTrip,
  });

  if (selectedTrip === "return" && selectedReturnDate) {
    bookingParams.set("returnDate", selectedReturnDate);
  }

  window.location.href = `booking-confirmation.html?${bookingParams.toString()}`;
}

// Tombol balik ke Booking Page

const changeSearchBtn = document.getElementById("changeSearch");
if (changeSearchBtn) {
  changeSearchBtn.addEventListener("click", function () {
    const backParams = new URLSearchParams({
      from: selectedFrom,
      to: selectedTo,
      date: selectedDate,
    });
    window.location.href = `booking-page.html?${backParams.toString()}`;
  });
}

const scheduleData = [
  {
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    departure: "07:30",
    arrival: "08:15",
  },
  {
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    departure: "08:30",
    arrival: "09:15",
  },
  {
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    departure: "10:30",
    arrival: "11:15",
  },
  {
    from: "Sanur (Bali)",
    to: "Banjar Nyuh (Nusa Penida)",
    departure: "13:00",
    arrival: "13:45",
  },
  {
    from: "Banjar Nyuh (Nusa Penida)",
    to: "Sanur (Bali)",
    departure: "09:30",
    arrival: "10:15",
  },
  {
    from: "Banjar Nyuh (Nusa Penida)",
    to: "Sanur (Bali)",
    departure: "11:30",
    arrival: "12:15",
  },
  {
    from: "Banjar Nyuh (Nusa Penida)",
    to: "Sanur (Bali)",
    departure: "14:30",
    arrival: "15:15",
  },
  {
    from: "Banjar Nyuh (Nusa Penida)",
    to: "Sanur (Bali)",
    departure: "17:00",
    arrival: "17:45",
  },
  {
    from: "Kusamba (Bali)",
    to: "Sampalan (Nusa Penida)",
    departure: "06:30",
    arrival: "07:15",
  },
  {
    from: "Kusamba (Bali)",
    to: "Sampalan (Nusa Penida)",
    departure: "10:30",
    arrival: "11:15",
  },
  {
    from: "Kusamba (Bali)",
    to: "Sampalan (Nusa Penida)",
    departure: "17:00",
    arrival: "17:45",
  },
  {
    from: "Sampalan (Nusa Penida)",
    to: "Kusamba (Bali)",
    departure: "07:00",
    arrival: "07:45",
  },
  {
    from: "Sampalan (Nusa Penida)",
    to: "Kusamba (Bali)",
    departure: "10:45",
    arrival: "11:30",
  },
  {
    from: "Sampalan (Nusa Penida)",
    to: "Kusamba (Bali)",
    departure: "16:00",
    arrival: "16:45",
  },
];

// RENDER TABLE

function renderSchedule(data) {
  const tbody = document.getElementById("scheduleTableBody");
  tbody.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${item.from}</td>
        <td>${item.to}</td>
        <td class="time">${item.departure}</td>
        <td class="time">${item.arrival}</td>`;

    tbody.appendChild(row);
  });
}

// OPEM/CLOSE MODAL

function openScheduleModal() {
  renderSchedule(scheduleData);
  document.getElementById("scheduleOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeScheduleModal() {
  document.getElementById("scheduleOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

function goToBookingPage() {
  window.location.href = "booking-page.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("closeBtn");
  const bookBtn = document.getElementById("bookBtn");
  const overlay = document.getElementById("scheduleOverlay");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeScheduleModal);
  } else {
    console.warn("Elemen #closeBtn tidak ditemukan di HTML.");
  }

  if (bookBtn) {
    bookBtn.addEventListener("click", goToBookingPage);
  } else {
    console.warn("Elemen #bookBtn tidak ditemukan di HTML.");
  }

  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeScheduleModal();
      }
    });
  } else {
    console.warn("Elemen #scheduleOverlay tidak ditemukan di HTML.");
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeScheduleModal();
    }
  });
});

const bookingForm = document.getElementById("bookimg-form");
bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const departureDate = document.getElementById("departureDate").value;

  const tripType = document.querySelector('input[name="trip"]:checked').value;

  let returnDate = "";
  if (tripType === "return") {
    returnDate = document.getElementById("returnDate").value;
  }

  if (!from || !to || !departureDate) {
    alert(`Please fill in the From, To, and Departure Date fields first.`);
    return;
  }

  if (from.toLowerCase() === to.toLowerCase()) {
    alert(`From and to cannot be the same.`);
  }

  if (tripType === "return" && !returnDate) {
    alert(`Select Your Return Date`);
  }

  const params = new URLSearchParams({
    from: from,
    to: to,
    date: departureDate,
    trip: tripType,
  });

  if (tripType === "return") {
    params.set("returnDate", returnDate);
  }

  window.location.href = `fastboat-page.html?${params.toString()}`;
});

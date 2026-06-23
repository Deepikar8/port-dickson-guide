const tripDays = [
  {
    date: "2026-06-22",
    shortDate: "Jun 22",
    weekday: "Mon",
    cue: "Arrival",
    title: "Arrival and welcome",
    summary: "Travel to Port Dickson, check in, and gather for dinner and the introductory talk.",
    notes: [
      "Bus pickup is 7:15am at Newton Food Centre.",
      "Lunch is at Melaka and has no supplied Han menu details.",
      "Meet at Han's Cook House at 4:00pm for dinner prep."
    ],
    packing: [
      "Passport and travel documents",
      "Water bottle for bus travel",
      "Light layer for the bus",
      "Overnight essentials kept accessible",
      "Small day bag for check-in afternoon"
    ],
    events: [
      { time: "7:15am", type: "travel", title: "Bus pickup", location: "Newton Food Centre", note: "Start the trip to Malaysia." },
      { time: "12:00pm", type: "meal", meal: "Lunch", title: "Lunch at Melaka", location: "Melaka", note: "External meal; no supplied menu details." },
      { time: "2:00pm", type: "travel", title: "Depart for Port Dickson", location: "Melaka", note: "Continue to the Airbnb." },
      { time: "3:00pm", type: "logistics", title: "Check-in", location: "Airbnb", note: "Settle in before the evening program." },
      { time: "4:00pm", type: "activity", title: "Meet at Han's Cook House", location: "Han's Cook House", note: "Gather before dinner." },
      { time: "6:00pm", type: "meal", meal: "Dinner", title: "Dinner and introductory talk", location: "Han's Cook House", note: "Introductory talk by Coach Kent." }
    ]
  },
  {
    date: "2026-06-23",
    shortDate: "Jun 23",
    weekday: "Tue",
    cue: "Secret beach",
    title: "Coastal forest, secret beach, and night shore walk",
    summary: "Hike to Monkey Bay, explore the secret beach, then return at night for marine wildlife, nets, and campfire.",
    notes: [
      "Morning program runs 8:30am to 12:30pm.",
      "Evening program runs 7:30pm to 10:30pm.",
      "Bring water-friendly footwear for beach exploration."
    ],
    packing: [
      "Water-friendly footwear for beach and rocks",
      "Sun hat, sunscreen, and sunglasses",
      "Towel and change of clothes",
      "Insect repellent for the night shore walk",
      "Small flashlight or headlamp",
      "Bag for wet items"
    ],
    events: [
      {
        time: "7:30am",
        type: "meal",
        meal: "Breakfast",
        title: "Breakfast at Han's",
        location: "Han's Cook House",
        menu: ["English breakfast scramble egg", "Grilled tomato", "Homemade Han's beef sausage", "Sourdough bread"]
      },
      { time: "8:15am", type: "travel", title: "Bus pickup", location: "Han's Cook House", note: "Head to Tanjong Tuan Secret Beach." },
      { time: "8:30am", type: "activity", title: "Arrival and toilet break", location: "Tanjong Tuan Secret Beach", note: "Start of the morning outdoor program." },
      { time: "8:45am", type: "activity", title: "Hike to Monkey Bay", location: "Tanjong Tuan", note: "Learn about coastal forest trees and descending a steep slope." },
      { time: "9:45am", type: "activity", title: "Break and coastal plant identification", location: "Monkey Bay", note: "Short break, water play, and coastal plant ID." },
      { time: "10:30am", type: "activity", title: "Rock climbing and secret beach exploration", location: "Secret beach", note: "Explore seashells and the shore." },
      { time: "12:00pm", type: "travel", title: "Hike back", location: "Tanjong Tuan", note: "Return from the beach route." },
      {
        time: "1:00pm",
        type: "meal",
        meal: "Lunch",
        title: "Lunch at Han's",
        location: "Han's Cook House",
        menu: ["Creamy tomato gluten free pasta", "Roast chicken"]
      },
      {
        time: "6:00pm",
        type: "meal",
        meal: "Dinner",
        title: "Dinner at Han's",
        location: "Han's Cook House",
        menu: ["BBQ steak", "Mash potatoes", "Sauteed vegetables", "Grilled corn with compound butter", "Chimichurri sauce"]
      },
      { time: "7:30pm", type: "activity", title: "Night walk arrival", location: "Pantai Teluk Pelanduk", note: "Arrival and toilet break." },
      { time: "7:45pm", type: "activity", title: "Nocturnal marine wildlife intro", location: "Pantai Teluk Pelanduk", note: "Briefing before heading to the beach." },
      { time: "8:15pm", type: "activity", title: "Walk to beach", location: "Pantai Teluk Pelanduk", note: "Begin the night shoreline walk." },
      { time: "8:30pm", type: "activity", title: "Mudskippers and hermit crabs", location: "Beach", note: "Observe nocturnal marine wildlife." },
      { time: "9:00pm", type: "activity", title: "Set nets", location: "Beach", note: "Prepare nets for the next morning." },
      { time: "9:30pm", type: "activity", title: "Campfire", location: "Beach", note: "Campfire session." },
      { time: "10:30pm", type: "logistics", title: "End", location: "Pantai Teluk Pelanduk", note: "Evening program ends." }
    ]
  },
  {
    date: "2026-06-24",
    shortDate: "Jun 24",
    weekday: "Wed",
    cue: "Fireflies",
    title: "Fishing, drag net, and sunset fireflies cruise",
    summary: "Harvest nets and dig for bean clams in the morning, then take a sunset fireflies cruise at Sungai Rembau.",
    notes: [
      "Morning fishing program runs 9:00am to 12:45pm.",
      "Packed dinner is provided at 3:45pm before the cruise.",
      "Fireflies cruise program runs 5:00pm to 9:00pm."
    ],
    packing: [
      "Water shoes or sandals for fishing activities",
      "Sun hat and sunscreen",
      "Towel and spare clothes",
      "Insect repellent for the fireflies cruise",
      "Light rain jacket",
      "Camera or phone with enough battery",
      "Space in day bag for packed dinner"
    ],
    events: [
      {
        time: "8:00am",
        type: "meal",
        meal: "Breakfast",
        title: "Breakfast at Han's",
        location: "Han's Cook House",
        menu: ["Smoothie bowl", "Fruit", "Granola toppings"]
      },
      { time: "9:00am", type: "activity", title: "Fishing arrival", location: "Pantai Teluk Pelanduk", note: "Arrival and toilet break." },
      { time: "9:15am", type: "activity", title: "Crustaceans introduction", location: "Pantai Teluk Pelanduk", note: "Learn about crustaceans." },
      { time: "10:00am", type: "activity", title: "Walk to beach", location: "Pantai Teluk Pelanduk", note: "Head to the fishing area." },
      { time: "10:15am", type: "activity", title: "Safety briefing and net check", location: "Beach", note: "Check nets for catch." },
      { time: "11:00am", type: "activity", title: "Drag net", location: "Beach", note: "Fishing activity." },
      { time: "12:00pm", type: "activity", title: "Dig for bean clams", location: "Beach", note: "Shoreline activity before lunch." },
      {
        time: "1:00pm",
        type: "meal",
        meal: "Lunch",
        title: "Lunch at Han's",
        location: "Han's Cook House",
        menu: ["Beef burger", "Tapioca fries"]
      },
      {
        time: "3:45pm",
        type: "meal",
        meal: "Packed dinner",
        title: "Packed dinner by Han",
        location: "Han's Cook House",
        packed: true,
        menu: ["Bulgogi beef rice", "Kimchi", "Pickled cucumber", "Soy-marinated bean sprouts", "Seasoned spinach", "Julienned carrots", "Soft-boiled egg", "Toasted sesame seeds", "Spring onions"]
      },
      { time: "4:00pm", type: "travel", title: "Bus pickup", location: "Han's Cook House", note: "Depart for Sungai Rembau." },
      { time: "5:00pm", type: "activity", title: "Cruise arrival", location: "Sungai Rembau", note: "Arrival, toilet break, and introduction." },
      { time: "5:15pm", type: "activity", title: "Fireflies and habitat intro", location: "Sungai Rembau", note: "Learn about fireflies and mangrove habitat." },
      { time: "5:45pm", type: "activity", title: "Boarding and cruise start", location: "Sungai Rembau", note: "Start the cruise." },
      { time: "6:30pm", type: "activity", title: "Sunset and wildlife observation", location: "Rembau-Linggi confluence", note: "Sunset photography, river wildlife, and birds flying back to roost." },
      { time: "7:30pm", type: "activity", title: "Fireflies observation", location: "Mangrove colonies", note: "Return to observe fireflies." },
      { time: "8:30pm", type: "travel", title: "Back to jetty", location: "Sungai Rembau", note: "Cruise returns." },
      { time: "9:00pm", type: "logistics", title: "End", location: "Sungai Rembau", note: "Evening program ends." }
    ]
  },
  {
    date: "2026-06-25",
    shortDate: "Jun 25",
    weekday: "Thu",
    cue: "Ulu Bendul",
    title: "Snake sanctuary, stream play, and night forest walk",
    summary: "Visit Ulu Bendul for reptiles, fungi, and stream play, then return to Tanjong Tuan for a night wildlife survey.",
    notes: [
      "Packed breakfast is provided at 7:45am.",
      "Lunch is at Seremban Restaurant and has no supplied menu details.",
      "Night walk runs 7:30pm to 10:30pm."
    ],
    packing: [
      "Stream-safe shoes for Ulu Bendul",
      "Towel and change of clothes",
      "Waterproof pouch for phone or valuables",
      "Insect repellent for forest areas",
      "Flashlight or headlamp for night walk",
      "Long sleeves or light jacket"
    ],
    events: [
      {
        time: "7:45am",
        type: "meal",
        meal: "Packed breakfast",
        title: "Packed breakfast by Han",
        location: "Han's Cook House",
        packed: true,
        menu: ["Sandwich roast beef", "Egg"]
      },
      { time: "8:00am", type: "travel", title: "Bus pickup", location: "Han's Cook House", note: "Depart for Ulu Bendul." },
      { time: "9:00am", type: "activity", title: "Arrival and toilet break", location: "Ulu Bendul", note: "Start of nature appreciation program." },
      { time: "9:15am", type: "activity", title: "Reptilian talk and snake sanctuary", location: "Ulu Bendul", note: "Visit the sanctuary and museum." },
      { time: "11:00am", type: "activity", title: "Fungi foray", location: "Forest trail", note: "Explore fungi along the trail." },
      { time: "11:30am", type: "activity", title: "Water cycle and stream play", location: "Stream", note: "Learn about the water cycle and play in the stream." },
      { time: "12:30pm", type: "logistics", title: "Morning program ends", location: "Ulu Bendul", note: "Prepare for lunch transfer." },
      { time: "1:00pm", type: "meal", meal: "Lunch", title: "Lunch at Seremban Restaurant", location: "Seremban Restaurant", note: "External meal; no supplied menu details." },
      {
        time: "6:00pm",
        type: "meal",
        meal: "Dinner",
        title: "Dinner at Han's",
        location: "Han's Cook House",
        menu: ["Miso glazed chicken thighs", "Chicken gyoza", "Rice", "Sesame mayo salad"]
      },
      { time: "7:00pm", type: "travel", title: "Bus pickup", location: "Han's Cook House", note: "Depart for Tanjong Tuan night walk." },
      { time: "7:30pm", type: "activity", title: "Night walk arrival", location: "Tanjong Tuan, Melaka", note: "Arrival and toilet break." },
      { time: "7:45pm", type: "activity", title: "Nocturnal forest wildlife briefing", location: "Tanjong Tuan", note: "Briefing before the forest survey." },
      { time: "8:15pm", type: "activity", title: "Night wildlife survey", location: "Tanjong Tuan", note: "Identify wildlife, take photos, and record animal species." },
      { time: "10:30pm", type: "logistics", title: "End", location: "Tanjong Tuan", note: "Evening program ends." }
    ]
  },
  {
    date: "2026-06-26",
    shortDate: "Jun 26",
    weekday: "Fri",
    cue: "Home",
    title: "Durian farm, native village, and return to Singapore",
    summary: "Check out early, visit the durian farm and native village, then return to Singapore after lunch.",
    notes: [
      "Early checkout is 7:45am.",
      "Deposit all luggage at Han's before breakfast.",
      "Return bus pickup is 1:00pm after lunch."
    ],
    packing: [
      "Packed luggage ready before breakfast",
      "Accessible day bag for the morning visit",
      "Snacks and water for the return bus",
      "Travel documents kept close",
      "Any medication or essentials needed before luggage is loaded"
    ],
    events: [
      { time: "7:45am", type: "logistics", title: "Early checkout", location: "Airbnb", note: "Deposit all luggage at Han's." },
      {
        time: "8:00am",
        type: "meal",
        meal: "Breakfast",
        title: "Breakfast at Han's",
        location: "Han's Cook House",
        menu: ["Shakshuka", "Sourdough toast"]
      },
      { time: "9:00am", type: "travel", title: "Bus pickup", location: "Han's Cook House", note: "Go to the durian farm and native village." },
      { time: "9:30am", type: "activity", title: "Durian farm and native village", location: "Port Dickson area", note: "Final morning visit before heading home." },
      {
        time: "12:00pm",
        type: "meal",
        meal: "Lunch",
        title: "Lunch at Han's",
        location: "Han's Cook House",
        menu: ["Cold soba", "Vegetable tempura", "Karaage chicken"]
      },
      { time: "1:00pm", type: "travel", title: "Bus pickup to Singapore", location: "Han's Cook House", note: "Home sweet home after lunch." }
    ]
  }
];

const requiredMenuItems = [
  "English breakfast scramble egg",
  "Grilled tomato",
  "Homemade Han's beef sausage",
  "Sourdough bread",
  "Smoothie bowl",
  "Fruit",
  "Granola toppings",
  "Shakshuka",
  "Sourdough toast",
  "Sandwich roast beef",
  "Egg",
  "Creamy tomato gluten free pasta",
  "Roast chicken",
  "Beef burger",
  "Tapioca fries",
  "Cold soba",
  "Vegetable tempura",
  "Karaage chicken",
  "BBQ steak",
  "Mash potatoes",
  "Sauteed vegetables",
  "Grilled corn with compound butter",
  "Chimichurri sauce",
  "Miso glazed chicken thighs",
  "Chicken gyoza",
  "Rice",
  "Sesame mayo salad",
  "Bulgogi beef rice",
  "Kimchi",
  "Pickled cucumber",
  "Soy-marinated bean sprouts",
  "Seasoned spinach",
  "Julienned carrots",
  "Soft-boiled egg",
  "Toasted sesame seeds",
  "Spring onions"
];

let selectedDate = getInitialDate();

function getInitialDate() {
  const today = new Date();
  const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return tripDays.some((day) => day.date === localDate) ? localDate : tripDays[0].date;
}

function getSelectedDay() {
  return tripDays.find((day) => day.date === selectedDate) || tripDays[0];
}

function renderApp() {
  const day = getSelectedDay();
  renderHeader(day);
  renderDayTabs(day);
  renderDay(day);
}

function renderHeader(day) {
  document.querySelector("#selected-day-summary").textContent = `${day.weekday} ${day.shortDate}: ${day.summary}`;
}

function renderDayTabs(activeDay) {
  const tabs = document.querySelector("#day-tabs");
  tabs.innerHTML = "";

  tripDays.forEach((day) => {
    const button = document.createElement("button");
    button.className = "day-tab";
    button.type = "button";
    button.setAttribute("aria-pressed", String(day.date === activeDay.date));
    button.innerHTML = `<span>${day.weekday}</span><strong>${day.shortDate}</strong><small>${day.cue}</small>`;
    button.addEventListener("click", () => {
      selectedDate = day.date;
      renderApp();
    });
    tabs.append(button);
  });
}

function renderDay(day) {
  document.querySelector("#day-date").textContent = `${day.weekday}, ${day.shortDate}, 2026`;
  document.querySelector("#day-title").textContent = day.title;
  document.querySelector("#day-overview").textContent = day.summary;
  renderTimeline(day.events);
  renderPacking(day.packing);
  renderNotes(day.notes);
}

function renderTimeline(events) {
  const timeline = document.querySelector("#timeline");
  timeline.innerHTML = "";

  events.forEach((event) => {
    const item = document.createElement("li");
    item.className = `timeline-item ${event.type === "meal" ? "meal-item" : ""}`;

    const menu = Array.isArray(event.menu)
      ? `<ul class="menu-list">${event.menu.map((menuItem) => `<li>${escapeHtml(menuItem)}</li>`).join("")}</ul>`
      : "";
    const packed = event.packed ? `<span class="pill">Packed</span>` : "";
    const mealLabel = event.meal ? `<span class="meal-label">${escapeHtml(event.meal)}</span>` : "";
    const note = event.note ? `<p>${escapeHtml(event.note)}</p>` : "";

    item.innerHTML = `
      <time>${escapeHtml(event.time)}</time>
      <div class="event-card">
        <div class="event-meta">${mealLabel}${packed}<span>${escapeHtml(event.location)}</span></div>
        <h3>${escapeHtml(event.title)}</h3>
        ${note}
        ${menu}
      </div>
    `;
    timeline.append(item);
  });
}

function renderNotes(notes) {
  const notesList = document.querySelector("#notes-list");
  notesList.innerHTML = notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
}

function renderPacking(items) {
  const packingList = document.querySelector("#packing-list");
  packingList.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if (typeof window !== "undefined") {
  window.portDicksonGuide = { tripDays, requiredMenuItems };
  renderApp();
}

export { tripDays, requiredMenuItems };

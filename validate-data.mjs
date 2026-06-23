import { changeNotice, requiredMenuItems, tripDays } from "./app.js";

const failures = [];

if (!/itinerary/i.test(changeNotice) || !/menu/i.test(changeNotice) || !/minor changes/i.test(changeNotice)) {
  failures.push("Change notice should mention itinerary, menu, and minor changes.");
}

if (tripDays.length !== 5) {
  failures.push(`Expected 5 trip days, found ${tripDays.length}.`);
}

const dates = tripDays.map((day) => day.date);
const expectedDates = ["2026-06-22", "2026-06-23", "2026-06-24", "2026-06-25", "2026-06-26"];
for (const date of expectedDates) {
  if (!dates.includes(date)) {
    failures.push(`Missing trip date ${date}.`);
  }
}

for (const day of tripDays) {
  if (!Array.isArray(day.packing) || day.packing.length < 4) {
    failures.push(`Expected at least 4 packing notes for ${day.date}.`);
  }
}

const requiredPackingTerms = {
  "2026-06-22": ["Passport", "Water bottle"],
  "2026-06-23": ["Water-friendly footwear", "Insect repellent", "flashlight"],
  "2026-06-24": ["fireflies", "packed dinner"],
  "2026-06-25": ["Stream-safe shoes", "night walk"],
  "2026-06-26": ["Packed luggage", "return bus"]
};

for (const [date, terms] of Object.entries(requiredPackingTerms)) {
  const day = tripDays.find((entry) => entry.date === date);
  const packingText = (day?.packing || []).join(" ").toLowerCase();
  for (const term of terms) {
    if (!packingText.includes(term.toLowerCase())) {
      failures.push(`Packing notes for ${date} should mention "${term}".`);
    }
  }
}

const allEvents = tripDays.flatMap((day) => day.events.map((event) => ({ ...event, date: day.date })));
const cookingActivities = allEvents.filter((event) => /cooking activity with han/i.test(`${event.title} ${event.note || ""}`));
if (cookingActivities.length > 0) {
  failures.push("Cooking Activity with Han should not appear in the guide.");
}

const suppliedMenuItems = allEvents.flatMap((event) => event.menu || []);
const counts = new Map();
for (const item of suppliedMenuItems) {
  counts.set(item, (counts.get(item) || 0) + 1);
}

for (const item of requiredMenuItems) {
  const count = counts.get(item) || 0;
  if (count !== 1) {
    failures.push(`Expected menu item "${item}" exactly once, found ${count}.`);
  }
}

const unexpectedItems = suppliedMenuItems.filter((item) => !requiredMenuItems.includes(item));
if (unexpectedItems.length > 0) {
  failures.push(`Unexpected menu items: ${unexpectedItems.join(", ")}.`);
}

const packedMeals = allEvents.filter((event) => event.packed);
const packedTitles = packedMeals.map((event) => `${event.date} ${event.title}`);
if (!packedTitles.includes("2026-06-24 Packed dinner by Han")) {
  failures.push("Missing packed dinner on 2026-06-24.");
}
if (!packedTitles.includes("2026-06-25 Packed breakfast by Han")) {
  failures.push("Missing packed breakfast on 2026-06-25.");
}

const externalMeals = allEvents.filter((event) => /Melaka|Seremban Restaurant/.test(event.title));
if (externalMeals.length !== 2) {
  failures.push(`Expected 2 external meal events, found ${externalMeals.length}.`);
}
for (const meal of externalMeals) {
  if (meal.menu) {
    failures.push(`External meal "${meal.title}" should not have supplied menu details.`);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Port Dickson guide data validation passed.");

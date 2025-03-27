// Central data store for ticket information
// This file will be imported by components that need ticket data

// Initial ticket types data
const ticketTypes = [
  {
    id: 1,
    name: "Single Day Pass",
    price: 89,
    description: "Access to all stages for one day",
    features: [
      "Access to all stages",
      "Food and drink vendors",
      "Official merchandise store access",
      "Valid for one day only",
    ],
  },
  {
    id: 2,
    name: "Weekend Pass",
    price: 199,
    description: "Full access for all three days",
    featured: true,
    features: [
      "Access to all stages for all 3 days",
      "Food and drink vendors",
      "Official merchandise store access",
      "Dedicated fast-track entry lane",
      "Festival t-shirt included",
    ],
  },
  {
    id: 3,
    name: "VIP Experience",
    price: 349,
    description: "Premium experience with exclusive perks",
    features: [
      "Access to all stages for all 3 days",
      "Exclusive VIP viewing areas",
      "Complimentary food and drinks",
      "VIP lounge access",
      "Meet & greet opportunities",
      "Festival merchandise pack",
    ],
  },
];

export { ticketTypes as t };

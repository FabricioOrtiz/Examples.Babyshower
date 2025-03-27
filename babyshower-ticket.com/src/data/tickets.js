// Central data store for ticket information
// This file will be imported by components that need ticket data

// Initial ticket types data
export const ticketTypes = [
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
]

// Initial ticket users data
export const initialTicketUsers = [
  { id: 1, name: "John Smith", email: "john@example.com", numberOfTickets: 2, ticketId: 1 },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", numberOfTickets: 4, ticketId: 2 },
  { id: 3, name: "Michael Brown", email: "michael@example.com", numberOfTickets: 1, ticketId: 3 },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", numberOfTickets: 3, ticketId: 2 },
  { id: 5, name: "David Lee", email: "david@example.com", numberOfTickets: 2, ticketId: 1 },
]

// Helper functions for data management
export const dataHelpers = {
  // Get ticket users from localStorage or use initial data
  getTicketUsers: () => {
    if (typeof window === "undefined") return initialTicketUsers

    const storedUsers = localStorage.getItem("ticketUsers")
    return storedUsers ? JSON.parse(storedUsers) : initialTicketUsers
  },

  // Save ticket users to localStorage
  saveTicketUsers: (users) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("ticketUsers", JSON.stringify(users))
    }
    return users
  },

  // Add a new ticket user
  addTicketUser: (user) => {
    const users = dataHelpers.getTicketUsers()
    // Generate a new ID (max ID + 1)
    const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1
    const newUser = { ...user, id: newId }

    users.push(newUser)
    return dataHelpers.saveTicketUsers(users)
  },

  // Update an existing ticket user
  updateTicketUser: (id, userData) => {
    const users = dataHelpers.getTicketUsers()
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
      users[index] = { ...users[index], ...userData }
      return dataHelpers.saveTicketUsers(users)
    }

    return users
  },

  // Delete a ticket user
  deleteTicketUser: (id) => {
    const users = dataHelpers.getTicketUsers()
    const filteredUsers = users.filter((user) => user.id !== id)
    return dataHelpers.saveTicketUsers(filteredUsers)
  },

  // Reset to initial data (for testing)
  resetData: () => {
    return dataHelpers.saveTicketUsers(initialTicketUsers)
  },
}


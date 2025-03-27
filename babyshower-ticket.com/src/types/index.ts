// Type definitions for the ticket system

export interface TicketType {
    id: number
    name: string
    price: number
    description: string
    featured?: boolean
    features: string[]
  }
  
  export interface TicketUser {
    id: number
    name: string
    email: string
    numberOfTickets: number
    ticketId: number
  }
  
  
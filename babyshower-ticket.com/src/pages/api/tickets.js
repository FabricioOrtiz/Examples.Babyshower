
export async function GET() {
  try {
    // This is a placeholder for database connection
    // In a real app, you would connect to your Neon database [^1]
    // const sql = neon(import.meta.env.DATABASE_URL);
    // const tickets = await sql`SELECT * FROM tickets`;

    // For demo purposes, we'll return static data
    const tickets = [
      {
        id: 1,
        name: "Single Day Pass",
        price: 89,
        description: "Access to all stages for one day",
        available: 500,
      },
      {
        id: 2,
        name: "Weekend Pass",
        price: 199,
        description: "Full access for all three days",
        available: 350,
      },
      {
        id: 3,
        name: "VIP Experience",
        price: 349,
        description: "Premium experience with exclusive perks",
        available: 100,
      },
    ]

    return new Response(JSON.stringify(tickets), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function POST({ request }) {
  try {
    const data = await request.json()

    // In a real app, you would validate the data and save to database
    // const sql = neon(import.meta.env.DATABASE_URL);
    // await sql`INSERT INTO ticket_orders (ticket_id, quantity, user_email) VALUES (${data.ticketId}, ${data.quantity}, ${data.email})`;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Order placed successfully",
        orderId: Math.floor(Math.random() * 10000),
      }),
      {
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}


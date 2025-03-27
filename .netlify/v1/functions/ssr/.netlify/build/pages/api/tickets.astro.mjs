export { renderers } from '../../renderers.mjs';

async function GET() {
  try {
    const tickets = [
      {
        id: 1,
        name: "Single Day Pass",
        price: 89,
        description: "Access to all stages for one day",
        available: 500
      },
      {
        id: 2,
        name: "Weekend Pass",
        price: 199,
        description: "Full access for all three days",
        available: 350
      },
      {
        id: 3,
        name: "VIP Experience",
        price: 349,
        description: "Premium experience with exclusive perks",
        available: 100
      }
    ];
    return new Response(JSON.stringify(tickets), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
async function POST({ request }) {
  try {
    const data = await request.json();
    return new Response(
      JSON.stringify({
        success: true,
        message: "Order placed successfully",
        orderId: Math.floor(Math.random() * 1e4)
      }),
      {
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

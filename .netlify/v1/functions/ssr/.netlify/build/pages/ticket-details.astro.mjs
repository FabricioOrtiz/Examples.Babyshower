import { c as createComponent, r as renderComponent, a as renderTemplate, d as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_CjbJd46K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_nEpLLzVs.mjs';
import { $ as $$TicketPopup } from '../chunks/TicketPopup_D-3CqyKe.mjs';
import { t as ticketTypes } from '../chunks/tickets_Dkd32I5E.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TicketDetails = createComponent(($$result, $$props, $$slots) => {
  const tickets = ticketTypes;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ticket Details" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-12">Ticket Details</h1> <div id="ticket-details-content" class="max-w-4xl mx-auto"> <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6"> <h2 class="text-2xl font-bold mb-6">All Ticket Holders</h2> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Type</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> </tr> </thead> <tbody id="ticket-table-body" class="bg-white divide-y divide-gray-200"> <!-- Table will be populated by JavaScript --> </tbody> </table> </div> <div class="mt-8 text-center"> <a href="/#tickets" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">\nBook New Ticket\n</a> </div> </div> </div> <div id="edit-form-container" class="max-w-md mx-auto hidden"> <!-- Edit form will be populated by JavaScript --> </div> </div> </section> ', " <script>(function(){", `
    import type { TicketUser } from '../types';
    import { initialTicketUsers } from '../data/tickets';
    
    // Client-side script for ticket details page
    document.addEventListener('DOMContentLoaded', () => {
      const tableBody = document.getElementById('ticket-table-body') as HTMLTableSectionElement | null;
      const detailsContent = document.getElementById('ticket-details-content') as HTMLDivElement | null;
      const editFormContainer = document.getElementById('edit-form-container') as HTMLDivElement | null;
      
      // Get ticket users from localStorage or use initial data
      function getTicketUsers(): TicketUser[] {
        const storedUsers = localStorage.getItem('ticketUsers');
        return storedUsers ? JSON.parse(storedUsers) : initialTicketUsers;
      }
      
      // Save ticket users to localStorage
      function saveTicketUsers(users: TicketUser[]): TicketUser[] {
        localStorage.setItem('ticketUsers', JSON.stringify(users));
        return users;
      }
      
      // Function to render the ticket table
      function renderTicketTable(): void {
        if (!tableBody) return;
        
        // Get the latest data
        const ticketUsers = getTicketUsers();
        
        // Clear the table
        tableBody.innerHTML = '';
        
        // Add each user to the table
        ticketUsers.forEach(user => {
          const ticket = tickets.find(t => t.id === user.ticketId);
          
          const row = document.createElement('tr');
          row.innerHTML = \`
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\${user.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">\${user.name}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">\${user.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              \${ticket ? ticket.name : \`Ticket \${user.ticketId}\`}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\${user.numberOfTickets}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button class="text-purple-600 hover:text-purple-900 edit-btn" data-user-id="\${user.id}">Edit</button>
            </td>
          \`;
          
          tableBody.appendChild(row);
        });
        
        // Add event listeners to edit buttons
        document.querySelectorAll('.edit-btn').forEach(button => {
          button.addEventListener('click', () => {
            const userId = button.getAttribute('data-user-id');
            if (userId) {
              showEditForm(userId);
            }
          });
        });
      }
      
      // Function to show the edit form
      function showEditForm(userId: string): void {
        if (!editFormContainer || !detailsContent) return;
        
        const ticketUsers = getTicketUsers();
        const user = ticketUsers.find(u => u.id.toString() === userId);
        
        if (!user) {
          showSuccessMessage('User not found', 'error');
          return;
        }
        
        // Hide the table view and show the edit form
        detailsContent.classList.add('hidden');
        editFormContainer.classList.remove('hidden');
        
        // Create the edit form
        editFormContainer.innerHTML = \`
          <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <h2 class="text-2xl font-bold mb-6">Edit Ticket</h2>
            <form id="edit-ticket-form" class="space-y-4">
              <input type="hidden" id="ticket-id" name="ticketId" value="\${user.ticketId}">
              <input type="hidden" id="user-id" name="userId" value="\${user.id}">
              
              <div class="space-y-2">
                <label for="name" class="block font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value="\${user.name}"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="space-y-2">
                <label for="email" class="block font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value="\${user.email}"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="space-y-2">
                <label for="numberOfTickets" class="block font-medium">Number of Tickets</label>
                <input 
                  type="number" 
                  id="numberOfTickets" 
                  name="numberOfTickets" 
                  value="\${user.numberOfTickets}"
                  min="1" 
                  max="10" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="pt-2 space-y-2">
                <button 
                  type="submit" 
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Update Ticket
                </button>
                
                <button 
                  type="button"
                  id="cancel-edit"
                  class="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        \`;
        
        // Add event listeners to the form
        const editForm = document.getElementById('edit-ticket-form') as HTMLFormElement | null;
        const cancelBtn = document.getElementById('cancel-edit') as HTMLButtonElement | null;
        
        if (editForm) {
          editForm.addEventListener('submit', handleEditFormSubmit);
        }
        
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            // Hide the edit form and show the table view
            if (editFormContainer && detailsContent) {
              editFormContainer.classList.add('hidden');
              detailsContent.classList.remove('hidden');
            }
          });
        }
      }
      
      // Handle edit form submission
      function handleEditFormSubmit(e: Event): void {
        e.preventDefault();
        
        const userIdInput = document.getElementById('user-id') as HTMLInputElement | null;
        const ticketIdInput = document.getElementById('ticket-id') as HTMLInputElement | null;
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const numberOfTicketsInput = document.getElementById('numberOfTickets') as HTMLInputElement | null;
        
        if (!userIdInput || !ticketIdInput || !nameInput || !emailInput || !numberOfTicketsInput) return;
        
        const userId = userIdInput.value;
        const formData = {
          ticketId: parseInt(ticketIdInput.value),
          name: nameInput.value,
          email: emailInput.value,
          numberOfTickets: parseInt(numberOfTicketsInput.value)
        };
        
        // Update the user in localStorage
        const ticketUsers = getTicketUsers();
        const userIndex = ticketUsers.findIndex(user => user.id.toString() === userId);
        
        if (userIndex !== -1) {
          ticketUsers[userIndex] = { ...ticketUsers[userIndex], ...formData };
          saveTicketUsers(ticketUsers);
          
          // Show success message
          showSuccessMessage('Ticket updated successfully!');
          
          // Hide the edit form and show the table view
          if (editFormContainer && detailsContent) {
            editFormContainer.classList.add('hidden');
            detailsContent.classList.remove('hidden');
          }
          
          // Refresh the table
          renderTicketTable();
        }
      }
      
      // Check URL parameters on page load
      function checkUrlParams(): void {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        
        if (userId) {
          showEditForm(userId);
        } else {
          // Show the table view
          if (detailsContent && editFormContainer) {
            detailsContent.classList.remove('hidden');
            editFormContainer.classList.add('hidden');
          }
          renderTicketTable();
        }
      }
      
      // Run on page load
      checkUrlParams();
      
      // Function to show a success message
      function showSuccessMessage(message: string, type: 'success' | 'error' = 'success'): void {
        // Create a success message element
        const successMessage = document.createElement('div');
        successMessage.className = \`fixed bottom-4 right-4 \${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-lg shadow-lg z-50\`;
        successMessage.textContent = message;
        
        // Add to the DOM
        document.body.appendChild(successMessage);
        
        // Remove after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      }
    });
  })();<\/script> `], [" ", '<section class="py-16 bg-gray-50"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-center mb-12">Ticket Details</h1> <div id="ticket-details-content" class="max-w-4xl mx-auto"> <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6"> <h2 class="text-2xl font-bold mb-6">All Ticket Holders</h2> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket Type</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th> </tr> </thead> <tbody id="ticket-table-body" class="bg-white divide-y divide-gray-200"> <!-- Table will be populated by JavaScript --> </tbody> </table> </div> <div class="mt-8 text-center"> <a href="/#tickets" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">\nBook New Ticket\n</a> </div> </div> </div> <div id="edit-form-container" class="max-w-md mx-auto hidden"> <!-- Edit form will be populated by JavaScript --> </div> </div> </section> ', " <script>(function(){", `
    import type { TicketUser } from '../types';
    import { initialTicketUsers } from '../data/tickets';
    
    // Client-side script for ticket details page
    document.addEventListener('DOMContentLoaded', () => {
      const tableBody = document.getElementById('ticket-table-body') as HTMLTableSectionElement | null;
      const detailsContent = document.getElementById('ticket-details-content') as HTMLDivElement | null;
      const editFormContainer = document.getElementById('edit-form-container') as HTMLDivElement | null;
      
      // Get ticket users from localStorage or use initial data
      function getTicketUsers(): TicketUser[] {
        const storedUsers = localStorage.getItem('ticketUsers');
        return storedUsers ? JSON.parse(storedUsers) : initialTicketUsers;
      }
      
      // Save ticket users to localStorage
      function saveTicketUsers(users: TicketUser[]): TicketUser[] {
        localStorage.setItem('ticketUsers', JSON.stringify(users));
        return users;
      }
      
      // Function to render the ticket table
      function renderTicketTable(): void {
        if (!tableBody) return;
        
        // Get the latest data
        const ticketUsers = getTicketUsers();
        
        // Clear the table
        tableBody.innerHTML = '';
        
        // Add each user to the table
        ticketUsers.forEach(user => {
          const ticket = tickets.find(t => t.id === user.ticketId);
          
          const row = document.createElement('tr');
          row.innerHTML = \\\`
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\\\${user.id}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-medium text-gray-900">\\\${user.name}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">\\\${user.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              \\\${ticket ? ticket.name : \\\`Ticket \\\${user.ticketId}\\\`}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">\\\${user.numberOfTickets}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button class="text-purple-600 hover:text-purple-900 edit-btn" data-user-id="\\\${user.id}">Edit</button>
            </td>
          \\\`;
          
          tableBody.appendChild(row);
        });
        
        // Add event listeners to edit buttons
        document.querySelectorAll('.edit-btn').forEach(button => {
          button.addEventListener('click', () => {
            const userId = button.getAttribute('data-user-id');
            if (userId) {
              showEditForm(userId);
            }
          });
        });
      }
      
      // Function to show the edit form
      function showEditForm(userId: string): void {
        if (!editFormContainer || !detailsContent) return;
        
        const ticketUsers = getTicketUsers();
        const user = ticketUsers.find(u => u.id.toString() === userId);
        
        if (!user) {
          showSuccessMessage('User not found', 'error');
          return;
        }
        
        // Hide the table view and show the edit form
        detailsContent.classList.add('hidden');
        editFormContainer.classList.remove('hidden');
        
        // Create the edit form
        editFormContainer.innerHTML = \\\`
          <div class="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <h2 class="text-2xl font-bold mb-6">Edit Ticket</h2>
            <form id="edit-ticket-form" class="space-y-4">
              <input type="hidden" id="ticket-id" name="ticketId" value="\\\${user.ticketId}">
              <input type="hidden" id="user-id" name="userId" value="\\\${user.id}">
              
              <div class="space-y-2">
                <label for="name" class="block font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value="\\\${user.name}"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="space-y-2">
                <label for="email" class="block font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value="\\\${user.email}"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="space-y-2">
                <label for="numberOfTickets" class="block font-medium">Number of Tickets</label>
                <input 
                  type="number" 
                  id="numberOfTickets" 
                  name="numberOfTickets" 
                  value="\\\${user.numberOfTickets}"
                  min="1" 
                  max="10" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
              </div>
              
              <div class="pt-2 space-y-2">
                <button 
                  type="submit" 
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Update Ticket
                </button>
                
                <button 
                  type="button"
                  id="cancel-edit"
                  class="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        \\\`;
        
        // Add event listeners to the form
        const editForm = document.getElementById('edit-ticket-form') as HTMLFormElement | null;
        const cancelBtn = document.getElementById('cancel-edit') as HTMLButtonElement | null;
        
        if (editForm) {
          editForm.addEventListener('submit', handleEditFormSubmit);
        }
        
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            // Hide the edit form and show the table view
            if (editFormContainer && detailsContent) {
              editFormContainer.classList.add('hidden');
              detailsContent.classList.remove('hidden');
            }
          });
        }
      }
      
      // Handle edit form submission
      function handleEditFormSubmit(e: Event): void {
        e.preventDefault();
        
        const userIdInput = document.getElementById('user-id') as HTMLInputElement | null;
        const ticketIdInput = document.getElementById('ticket-id') as HTMLInputElement | null;
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const numberOfTicketsInput = document.getElementById('numberOfTickets') as HTMLInputElement | null;
        
        if (!userIdInput || !ticketIdInput || !nameInput || !emailInput || !numberOfTicketsInput) return;
        
        const userId = userIdInput.value;
        const formData = {
          ticketId: parseInt(ticketIdInput.value),
          name: nameInput.value,
          email: emailInput.value,
          numberOfTickets: parseInt(numberOfTicketsInput.value)
        };
        
        // Update the user in localStorage
        const ticketUsers = getTicketUsers();
        const userIndex = ticketUsers.findIndex(user => user.id.toString() === userId);
        
        if (userIndex !== -1) {
          ticketUsers[userIndex] = { ...ticketUsers[userIndex], ...formData };
          saveTicketUsers(ticketUsers);
          
          // Show success message
          showSuccessMessage('Ticket updated successfully!');
          
          // Hide the edit form and show the table view
          if (editFormContainer && detailsContent) {
            editFormContainer.classList.add('hidden');
            detailsContent.classList.remove('hidden');
          }
          
          // Refresh the table
          renderTicketTable();
        }
      }
      
      // Check URL parameters on page load
      function checkUrlParams(): void {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get('userId');
        
        if (userId) {
          showEditForm(userId);
        } else {
          // Show the table view
          if (detailsContent && editFormContainer) {
            detailsContent.classList.remove('hidden');
            editFormContainer.classList.add('hidden');
          }
          renderTicketTable();
        }
      }
      
      // Run on page load
      checkUrlParams();
      
      // Function to show a success message
      function showSuccessMessage(message: string, type: 'success' | 'error' = 'success'): void {
        // Create a success message element
        const successMessage = document.createElement('div');
        successMessage.className = \\\`fixed bottom-4 right-4 \\\${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-3 rounded-lg shadow-lg z-50\\\`;
        successMessage.textContent = message;
        
        // Add to the DOM
        document.body.appendChild(successMessage);
        
        // Remove after 3 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 3000);
      }
    });
  })();<\/script> `])), maybeRenderHead(), renderComponent($$result2, "TicketPopup", $$TicketPopup, {}), defineScriptVars({ tickets })) })}`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/ticket-details.astro", void 0);

const $$file = "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/ticket-details.astro";
const $$url = "/ticket-details";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TicketDetails,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

# KDRent frontend structure

The frontend is organized by responsibility so UI, pages, API calls, and access rules stay separate.

```text
src/
  api/          Backend endpoint wrappers
  assets/       Images, icons, and placeholders
  components/   Reusable UI grouped by feature
  context/      App-wide auth and notification state
  hooks/        Reusable React hooks
  layouts/      Public, auth, and dashboard page shells
  pages/        Route-level screens grouped by role
  routes/       Route definitions and access guards
  services/     Socket.IO and external integrations
  styles/       Global and shared styles
  utils/        Pure helper functions and constants
```

`src/router.jsx` is the only application router. `main.jsx` mounts it with
`<RouterProvider router={router} />`; `App.jsx` is intentionally not used.

## Environment

Copy `.env.example` to `.env` and set `VITE_API_URL` to the backend URL
ending in `/api`. The Vercel rewrite keeps React Router URLs working after a
page refresh.

## Backend-to-frontend mapping

| Backend module | Frontend area |
| --- | --- |
| Auth and user profile | `api/auth.api.js`, `api/user.api.js`, `pages/auth`, `pages/shared/ProfilePage.jsx` |
| Properties | `api/property.api.js`, `components/property`, `pages/public`, `pages/seller` |
| Wishlist | `api/wishlist.api.js`, `pages/buyer/WishlistPage.jsx` |
| Inquiries | `api/inquiry.api.js`, `pages/buyer/SendInquiryPage.jsx`, `pages/seller/SellerInquiriesPage.jsx` |
| Contact | `api/contact.api.js`, `pages/public/ContactPage.jsx` |
| Chat and Socket.IO | `api/chat.api.js`, `components/chat`, `pages/shared/ChatsPage.jsx`, `services/socket.service.js` |
| Admin | `api/admin.api.js`, `components/admin`, `pages/admin` |

All created `.jsx` and `.js` files are intentional placeholders; implement them feature-by-feature without putting API calls directly in page components.

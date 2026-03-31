# 🪷 GHUNGHAT — Technical Requirements Document (TRD)

> **Version:** 1.0 | **Prepared:** March 2026 | **Stack:** Next.js + Supabase + Cloudinary + Cashfree  
> **Optimized for:** Vibe coding with Gemini, Antigravity, v0.dev, Bolt, Vercel  
> **Target:** $0/month for first 1,000 users | 2-week MVP | Solo builder

---

## 📊 Document Overview

| Field | Detail |
|---|---|
| App Type | E-commerce Web App (Responsive) |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | Supabase (DB + Auth + Storage fallback) |
| Image CDN | Cloudinary (free tier) |
| Payments | Cashfree Payments |
| Deployment | Vercel (free tier) |
| Admin | Custom Next.js admin panel (route-protected) |
| AI Tools | v0.dev for UI scaffolding, Bolt for logic, Gemini for debugging |

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│           Next.js 14 App Router (TypeScript)                 │
│     Public Site  │  User Account  │  Admin Panel (/admin)    │
└────────┬─────────┴───────┬────────┴──────────┬──────────────┘
         │                 │                   │
         ▼                 ▼                   ▼
┌─────────────────────────────────────────────────────────────┐
│                      API LAYER                               │
│              Next.js API Routes (/api/*)                     │
│   Products │ Orders │ Reviews │ Auth │ Loyalty │ Webhooks    │
└────────┬───┴────────┴─────────┴──────┴─────────┴────────────┘
         │
    ┌────┴──────────────────────────────┐
    │                                   │
    ▼                                   ▼
┌──────────────┐               ┌────────────────────┐
│   SUPABASE   │               │   CLOUDINARY CDN   │
│  PostgreSQL  │               │  Product Images    │
│  Auth (JWT)  │               │  Review Photos     │
│  Row-Level   │               │  (free 25GB/month) │
│  Security    │               └────────────────────┘
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────────────┐
│              EXTERNAL SERVICES           │
│  Cashfree Payments │ Shiprocket API      │
│  Resend (emails)   │ Fast2SMS (SMS)      │
└──────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Component | Technology | Why This Choice |
|---|---|---|
| Framework | `next` v14 (App Router) | AI tools know it deeply; SSR for SEO; Vercel-native |
| Language | TypeScript | AI generates fewer bugs with typed code |
| Styling | `tailwindcss` + `shadcn/ui` | shadcn = copy-paste components; AI loves it |
| UI Components | `shadcn/ui` + `lucide-react` | PRD specifies Lucide; shadcn is free + composable |
| Database | Supabase PostgreSQL | Free 500MB; built-in auth; RLS for security |
| Auth | Supabase Auth | Email/password + Google OAuth built-in |
| Image Hosting | `cloudinary` (Node SDK) | Free 25GB bandwidth; transform on-the-fly |
| Image Upload | `next-cloudinary` | Next.js native Cloudinary component |
| Payments | Cashfree Payments JS SDK | India-first; UPI + cards; easy test mode |
| Email | `resend` | 3,000 free emails/month; React email templates |
| SMS | Fast2SMS REST API | ₹0.12/SMS; no monthly fee |
| Form Handling | `react-hook-form` + `zod` | AI generates clean validated forms |
| State Management | Zustand | Lightweight; AI understands it well |
| Cart Persistence | Zustand + `zustand/middleware/persist` | LocalStorage for guests; DB for logged-in |
| Data Fetching | `@tanstack/react-query` | Caching, loading states, background refetch |
| Date Handling | `date-fns` | Lightweight; no moment.js bloat |
| Toast Notifications | `sonner` | Simple; shadcn-compatible |
| Animations | `framer-motion` | Smooth page transitions; hover effects |
| Table (Admin) | `@tanstack/react-table` | Sortable/filterable admin tables |
| Deployment | Vercel | Free hobby tier; auto-deploy on push |
| Env Management | Vercel Environment Variables | Never commit secrets |

---

## 🗄️ Database Schema

> **Convention:** All tables use `snake_case`. UUIDs for all primary keys. Timestamps auto-managed by Supabase.

---

### Table: `users`
> Extends Supabase `auth.users`. Stores profile data.

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | FK → `auth.users.id` (Primary Key) |
| `full_name` | `text` | User's display name |
| `phone` | `text` | For SMS order updates |
| `birthday_mm` | `smallint` | Month only (1–12), for loyalty |
| `birthday_dd` | `smallint` | Day only (1–31), for loyalty |
| `shade_undertone` | `text` | `warm` \| `cool` \| `neutral` |
| `shade_depth` | `text` | `fair` \| `medium` \| `dusky` \| `deep` |
| `shade_concern` | `text` | `coverage` \| `matte` \| `dewy` etc. |
| `loyalty_points` | `integer` | Default: `0` |
| `loyalty_points_expiry` | `timestamptz` | Rolling 12-month window |
| `role` | `text` | `customer` \| `admin` — default: `customer` |
| `created_at` | `timestamptz` | Auto |
| `updated_at` | `timestamptz` | Auto |

---

### Table: `addresses`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `user_id` | `uuid` | FK → `users.id` |
| `full_name` | `text` | Recipient name |
| `phone` | `text` | Recipient phone |
| `line1` | `text` | Street address |
| `line2` | `text` | Apartment/area (nullable) |
| `city` | `text` | |
| `state` | `text` | |
| `pincode` | `text` | 6-digit India pincode |
| `is_default` | `boolean` | Default: `false` |
| `created_at` | `timestamptz` | Auto |

---

### Table: `categories`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `name` | `text` | e.g., `Skincare` |
| `slug` | `text` | e.g., `skincare` — unique |
| `parent_id` | `uuid` | FK → `categories.id` (null = top-level) |
| `display_order` | `integer` | For nav ordering |
| `is_active` | `boolean` | Default: `true` |
| `created_at` | `timestamptz` | Auto |

---

### Table: `products`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `name` | `text` | Product name |
| `slug` | `text` | URL-safe unique identifier |
| `brand` | `text` | Brand name |
| `description` | `text` | Full product description |
| `short_description` | `text` | 1-2 line summary for cards |
| `price` | `integer` | In paise (₹1 = 100 paise) — avoids float bugs |
| `mrp` | `integer` | Max retail price in paise |
| `stock_quantity` | `integer` | Default: `0` |
| `category_id` | `uuid` | FK → `categories.id` |
| `is_own_brand` | `boolean` | `true` = GHUNGHAT brand |
| `brand_story` | `text` | For own-brand products (nullable) |
| `skin_type_tags` | `text[]` | Array: `['oily', 'dry', 'combination', 'sensitive']` |
| `qa_badge` | `text` | `dermatologist_tested` \| `lab_certified` \| `ghunghat_curated` |
| `qa_is_active` | `boolean` | Default: `true` — false = delisted |
| `images` | `jsonb` | Array of Cloudinary URLs + alt text |
| `ingredients` | `text` | Full ingredients list |
| `works_best_for` | `text[]` | Skin concern tags |
| `shade_undertone` | `text[]` | `['warm', 'cool', 'neutral']` — nullable |
| `shade_depth` | `text[]` | `['fair', 'medium', 'dusky', 'deep']` — nullable |
| `is_active` | `boolean` | Default: `true` |
| `is_featured` | `boolean` | For homepage featured section |
| `is_bestseller` | `boolean` | For homepage bestsellers |
| `display_order` | `integer` | Manual sort in admin |
| `average_rating` | `numeric(2,1)` | Cached; updated on new review |
| `review_count` | `integer` | Cached count |
| `created_at` | `timestamptz` | Auto |
| `updated_at` | `timestamptz` | Auto |

---

### Table: `wishlists`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `user_id` | `uuid` | FK → `users.id` |
| `product_id` | `uuid` | FK → `products.id` |
| `created_at` | `timestamptz` | Auto |

> **Constraint:** UNIQUE on (`user_id`, `product_id`)

---

### Table: `orders`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `order_number` | `text` | Human-readable: `GHG-2026-00001` |
| `user_id` | `uuid` | FK → `users.id` (nullable for guest) |
| `guest_email` | `text` | For guest checkout (nullable) |
| `guest_phone` | `text` | For guest SMS (nullable) |
| `status` | `text` | `confirmed` \| `packed` \| `shipped` \| `delivered` \| `cancelled` |
| `subtotal` | `integer` | In paise |
| `delivery_charge` | `integer` | In paise (0 if free) |
| `tax_amount` | `integer` | In paise |
| `discount_amount` | `integer` | Promo + loyalty discount in paise |
| `total_amount` | `integer` | Final charged amount in paise |
| `promo_code_used` | `text` | Nullable |
| `loyalty_points_used` | `integer` | Default: `0` |
| `loyalty_points_earned` | `integer` | Points added on completion |
| `shipping_address` | `jsonb` | Snapshot of address at time of order |
| `payment_status` | `text` | `pending` \| `paid` \| `failed` \| `refunded` |
| `payment_gateway` | `text` | `cashfree` |
| `payment_gateway_order_id` | `text` | Cashfree's order ID |
| `payment_gateway_payment_id` | `text` | Cashfree's payment ID (nullable until paid) |
| `shiprocket_order_id` | `text` | Nullable |
| `tracking_number` | `text` | Nullable |
| `estimated_delivery` | `date` | Nullable |
| `created_at` | `timestamptz` | Auto |
| `updated_at` | `timestamptz` | Auto |

---

### Table: `order_items`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `order_id` | `uuid` | FK → `orders.id` |
| `product_id` | `uuid` | FK → `products.id` |
| `product_name` | `text` | Snapshot at time of order |
| `product_image_url` | `text` | Snapshot |
| `quantity` | `integer` | |
| `unit_price` | `integer` | In paise, price at time of order |
| `subtotal` | `integer` | In paise |

---

### Table: `reviews`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `product_id` | `uuid` | FK → `products.id` |
| `user_id` | `uuid` | FK → `users.id` |
| `order_id` | `uuid` | FK → `orders.id` — for verified purchase check |
| `rating` | `smallint` | 1–5 |
| `review_text` | `text` | Max 500 chars |
| `photo_url` | `text` | Cloudinary URL (nullable) |
| `skin_type` | `text` | `oily` \| `dry` \| `combination` \| `sensitive` |
| `status` | `text` | `pending` \| `approved` \| `rejected` — default: `pending` |
| `helpful_yes` | `integer` | Default: `0` |
| `helpful_no` | `integer` | Default: `0` |
| `created_at` | `timestamptz` | Auto |

> **Constraint:** UNIQUE on (`user_id`, `product_id`, `order_id`) — one review per purchase

---

### Table: `review_votes`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `review_id` | `uuid` | FK → `reviews.id` |
| `user_id` | `uuid` | FK → `users.id` |
| `vote` | `text` | `yes` \| `no` |
| `created_at` | `timestamptz` | Auto |

> **Constraint:** UNIQUE on (`review_id`, `user_id`)

---

### Table: `loyalty_transactions`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `user_id` | `uuid` | FK → `users.id` |
| `points` | `integer` | Positive = earned, Negative = redeemed |
| `reason` | `text` | `order_earn` \| `order_redeem` \| `first_order` \| `birthday_bonus` \| `review_posted` |
| `order_id` | `uuid` | FK → `orders.id` (nullable) |
| `expires_at` | `timestamptz` | 12 months from earned date |
| `created_at` | `timestamptz` | Auto |

---

### Table: `promo_codes`

| Field | Type | Notes |
|---|---|---|
| `id` | `uuid` | PK |
| `code` | `text` | Unique, uppercase |
| `discount_type` | `text` | `flat` \| `percent` |
| `discount_value` | `integer` | In paise if flat; 0–100 if percent |
| `min_order_value` | `integer` | In paise (default: `0`) |
| `max_uses` | `integer` | Nullable = unlimited |
| `used_count` | `integer` | Default: `0` |
| `expires_at` | `timestamptz` | Nullable |
| `is_active` | `boolean` | Default: `true` |
| `created_at` | `timestamptz` | Auto |

---

## 🔌 API Design

> All routes under `/api/` — Next.js Route Handlers. Auth via Supabase JWT in Authorization header.

---

### Auth

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/auth/register` | POST | None | Email/password signup | `{ email, password, full_name, phone }` | `{ user, session }` |
| `/api/auth/login` | POST | None | Email/password login | `{ email, password }` | `{ user, session }` |
| `/api/auth/google` | GET | None | Google OAuth redirect | — | Redirect |
| `/api/auth/logout` | POST | User | Logout | — | `{ success }` |
| `/api/auth/me` | GET | User | Get current user profile | — | `{ user }` |

---

### Products

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/products` | GET | None | List products with filters | `?category&price_min&price_max&skin_type&rating&sort&page&limit` | `{ products[], total, page }` |
| `/api/products/[slug]` | GET | None | Single product detail | — | `{ product, related_products[] }` |
| `/api/products/featured` | GET | None | Homepage featured + bestsellers | — | `{ featured[], bestsellers[], new_arrivals[] }` |
| `/api/products/shade-match` | GET | None | Shade finder results | `?undertone&depth&concern` | `{ products[] }` |
| `/api/admin/products` | GET | Admin | List all products (admin) | `?page&search&status` | `{ products[], total }` |
| `/api/admin/products` | POST | Admin | Create product | `{ product object }` | `{ product }` |
| `/api/admin/products/[id]` | PUT | Admin | Update product | `{ fields to update }` | `{ product }` |
| `/api/admin/products/[id]` | DELETE | Admin | Soft-delete (set is_active=false) | — | `{ success }` |

---

### Categories

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/categories` | GET | None | All active categories (nested) | — | `{ categories[] }` |
| `/api/admin/categories` | POST | Admin | Create category | `{ name, slug, parent_id }` | `{ category }` |

---

### Cart (Client-side only)

> Cart is managed in Zustand + localStorage for guests. On login, merge guest cart with server wishlist. No cart API needed — Zustand handles it entirely client-side.

---

### Orders

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/orders` | POST | User/Guest | Create order + initiate payment | `{ items[], address_id, promo_code, loyalty_points_to_use, guest_info? }` | `{ order_id, cashfree_session_id }` |
| `/api/orders` | GET | User | List user's orders | `?page&limit` | `{ orders[], total }` |
| `/api/orders/[id]` | GET | User | Order detail + tracking | — | `{ order, items[] }` |
| `/api/orders/verify-payment` | POST | User/Guest | Confirm payment after Cashfree callback | `{ cashfree_order_id, cashfree_payment_id }` | `{ order, status }` |
| `/api/admin/orders` | GET | Admin | All orders with filters | `?status&page&search` | `{ orders[], total }` |
| `/api/admin/orders/[id]` | PUT | Admin | Update order status | `{ status, tracking_number? }` | `{ order }` |

---

### Reviews

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/reviews/[product_id]` | GET | None | Approved reviews for product | `?page&sort` | `{ reviews[], total, average_rating }` |
| `/api/reviews` | POST | User | Submit review | `{ product_id, order_id, rating, review_text, skin_type, photo_url? }` | `{ review }` |
| `/api/reviews/[id]/vote` | POST | User | Vote helpful | `{ vote: 'yes' \| 'no' }` | `{ helpful_yes, helpful_no }` |
| `/api/admin/reviews` | GET | Admin | All reviews pending moderation | `?status&page` | `{ reviews[], total }` |
| `/api/admin/reviews/[id]` | PUT | Admin | Approve/reject review | `{ status: 'approved' \| 'rejected' }` | `{ review }` |

---

### Wishlist

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/wishlist` | GET | User | Get user's wishlist | — | `{ products[] }` |
| `/api/wishlist` | POST | User | Add to wishlist | `{ product_id }` | `{ success }` |
| `/api/wishlist/[product_id]` | DELETE | User | Remove from wishlist | — | `{ success }` |

---

### Loyalty

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/loyalty` | GET | User | Points balance + history | — | `{ balance, transactions[] }` |
| `/api/loyalty/validate` | POST | User | Check redeemable points at checkout | `{ points_to_use, order_total }` | `{ valid, discount_amount, remaining_balance }` |

---

### Addresses

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/addresses` | GET | User | List saved addresses | — | `{ addresses[] }` |
| `/api/addresses` | POST | User | Add address | `{ full_name, phone, line1, line2, city, state, pincode }` | `{ address }` |
| `/api/addresses/[id]` | PUT | User | Update address | `{ fields }` | `{ address }` |
| `/api/addresses/[id]` | DELETE | User | Delete address | — | `{ success }` |
| `/api/pincode/[pincode]` | GET | None | Pincode lookup (city/state autofill) | — | `{ city, state, valid }` |

---

### Payments (Cashfree)

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/payments/cashfree/create-order` | POST | User/Guest | Create Cashfree order | `{ amount, order_id, customer_details }` | `{ payment_session_id }` |
| `/api/payments/cashfree/webhook` | POST | None (HMAC verified) | Payment status webhook from Cashfree | Cashfree webhook payload | `200 OK` |

---

### Cloudinary

| Route | Method | Auth | Purpose | Input | Output |
|---|---|---|---|---|---|
| `/api/upload/signature` | GET | Admin | Generate signed upload params | `{ folder }` | `{ signature, timestamp, api_key, cloud_name }` |

---

### Admin — Dashboard

| Route | Method | Auth | Purpose | Output |
|---|---|---|---|---|
| `/api/admin/dashboard` | GET | Admin | Stats: orders today, revenue, pending reviews, low stock alerts | `{ stats }` |

---

## 🔒 Security & Rate Limiting

### Authentication & Authorization

- All `/api/admin/*` routes check `users.role === 'admin'` via Supabase JWT
- Supabase Row Level Security (RLS) enabled on all tables
- RLS policies: users can only read/write their own rows (orders, addresses, wishlist, reviews)
- Admin role bypasses RLS using service role key (server-side only, never exposed to client)
- Google OAuth callback handled entirely by Supabase — no custom code needed

### Payment Security

- Cashfree webhook signature verified using HMAC-SHA256 before processing
- `payment_gateway_order_id` validated against database before marking paid
- Order status only moves forward (no re-confirming cancelled orders)
- All amounts calculated server-side — client sends item IDs only, not prices

### Rate Limiting

Use `@upstash/ratelimit` + Upstash Redis (free tier: 10,000 req/day):

| Endpoint | Limit | Window |
|---|---|---|
| `/api/auth/register` | 5 requests | per IP per hour |
| `/api/auth/login` | 10 requests | per IP per hour |
| `/api/orders` POST | 10 requests | per user per hour |
| `/api/reviews` POST | 5 requests | per user per day |
| `/api/payments/cashfree/webhook` | No limit | (HMAC verified instead) |
| All other `/api/*` | 100 requests | per IP per minute |

### Environment Variables (never commit)

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
CASHFREE_APP_ID
CASHFREE_SECRET_KEY
CASHFREE_WEBHOOK_SECRET
RESEND_API_KEY
FAST2SMS_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
NEXT_PUBLIC_APP_URL
```

---

## 🤖 AI Integration

> GHUNGHAT MVP does not use generative AI features. However, AI tools are used **to build** it.

### Recommended AI Tool Usage Per Task

| Task | Best Tool | Prompt Strategy |
|---|---|---|
| Homepage, product cards, PDP layout | v0.dev | Paste design system tokens + component spec from TRD |
| Shade Finder 3-step quiz UI | v0.dev | Describe step-by-step flow + output requirements |
| Admin dashboard tables | Bolt | Paste `@tanstack/react-table` + schema fields verbatim |
| Supabase RLS policies | Gemini | Paste schema + describe who can access what |
| Cashfree payment integration | Gemini / Antigravity | Paste API route spec + webhook spec from this TRD |
| Loyalty points engine | Antigravity | Paste loyalty transaction logic + DB schema |
| Form validation (checkout, review) | Bolt | Paste `zod` schema with exact field names from TRD |
| Email templates (order confirm) | v0.dev + Resend | Use `@react-email/components` package |

### Shade Finder Logic (Rule-Based, No AI Needed)

- Query `products` table where `shade_undertone @> [selected_undertone]` AND `shade_depth @> [selected_depth]`
- Filter further if `shade_concern` matches product category (e.g., concern = `coverage` → foundations only)
- Order by `average_rating DESC`, limit 12
- No ML needed — pure Supabase query

---

## 🚀 Deployment Strategy

### Step-by-Step: Zero to Production

**Day 0 — Setup (do once)**

1. Create Supabase project → copy `SUPABASE_URL` and `ANON_KEY`
2. Run all SQL schema files in Supabase SQL editor (tables, RLS policies, indexes)
3. Create Cloudinary account → enable unsigned uploads for `products/` folder
4. Create Cashfree account → get test mode App ID + Secret Key
5. Create Resend account → verify sending domain or use sandbox
6. Create Upstash account → create Redis database → copy REST URL + token
7. Create GitHub repo → push Next.js boilerplate
8. Connect GitHub to Vercel → add all environment variables in Vercel dashboard
9. Enable Vercel's automatic preview deployments for PRs

**Every Feature Push**

1. Build + test locally (`npm run dev`)
2. `git push` → Vercel auto-deploys to preview URL
3. Test preview URL on mobile (Chrome DevTools → iPhone SE)
4. Merge to `main` → auto-deploys to production

**Production Checklist (before going live)**

- [ ] Switch Cashfree from test mode to live mode (update env vars)
- [ ] Set `NEXT_PUBLIC_APP_URL` to production domain
- [ ] Enable Supabase email confirmations
- [ ] Add Cloudinary upload preset for production (signed uploads only)
- [ ] Test full purchase flow end-to-end on real device
- [ ] Verify Cashfree webhook URL points to production

---

## 📊 Performance Requirements

| Metric | Target | How to Achieve |
|---|---|---|
| Page load (mobile 3G) | < 3 seconds | Next.js Image + Cloudinary auto-compression |
| Largest Contentful Paint | < 2.5s | Preload hero image; use `priority` on above-fold images |
| First Input Delay | < 100ms | No heavy JS on initial load; defer non-critical scripts |
| Product images | WebP, max 200KB | Cloudinary `f_auto,q_auto,w_600` transform in URL |
| Animation FPS | 60fps | Use `framer-motion` with `will-change: transform` only |
| Admin panel load | < 4 seconds | Paginated queries; no loading full table |
| Supabase queries | < 200ms | Add indexes on `slug`, `category_id`, `user_id`, `status` |
| Concurrent users | 500+ | Vercel Edge + Supabase connection pooling (PgBouncer) |

### Required Database Indexes

```
products: slug (unique), category_id, is_active, qa_is_active, average_rating
orders: user_id, status, created_at, payment_gateway_order_id
order_items: order_id, product_id
reviews: product_id, status, user_id
wishlists: user_id, product_id
loyalty_transactions: user_id, created_at
```

---

## 💰 Cost Estimate

### Free Tier Limits (what you get for ₹0/month)

| Service | Free Tier |
|---|---|
| Vercel | 100GB bandwidth, unlimited deployments |
| Supabase | 500MB DB, 5GB storage, 50,000 MAU, 2GB egress |
| Cloudinary | 25GB storage, 25GB bandwidth/month |
| Resend | 3,000 emails/month |
| Upstash Redis | 10,000 commands/day, 256MB |
| Fast2SMS | Pay-as-you-go (₹0.12/SMS) — no monthly fee |
| Cashfree | 2% per transaction (no monthly fee) |

### Cost Projection

| User Scale | Monthly Cost (INR) | Notes |
|---|---|---|
| 0–500 users | ₹0 | All free tiers |
| 500–1,000 users | ₹0–₹200 | SMS costs only (₹0.12 × orders) |
| 1,000–5,000 users | ₹500–₹2,000 | Supabase Pro ($25) if DB exceeds 500MB |
| 5,000–10,000 users | ₹2,000–₹5,000 | Supabase Pro + Cloudinary paid plan |
| 10,000+ users | Evaluate | Cloudinary + Vercel Pro + Supabase Pro |

> **Cashfree fee:** 2% per transaction. On ₹500 average order → ₹10/transaction. Factor into pricing.

---

## 📋 Development Checklist

> Full-day builder (8+ hrs/day). Assumes v0.dev for UI, Supabase for backend.

---

### Phase 1: Foundation & Design (Days 1–3)

**Day 1 — Project Setup**
- [ ] Init Next.js 14 with TypeScript: `npx create-next-app@latest ghunghat --typescript --tailwind --app`
- [ ] Install shadcn/ui: `npx shadcn-ui@latest init`
- [ ] Install core packages: `framer-motion zustand @tanstack/react-query sonner lucide-react date-fns zod react-hook-form @hookform/resolvers next-cloudinary`
- [ ] Set up Supabase client (`@supabase/ssr`, `@supabase/supabase-js`)
- [ ] Configure Tailwind with GHUNGHAT design tokens (colors, fonts)
- [ ] Import Georgia via `next/font/google` (Cormorant Garamond as substitute if needed)
- [ ] Create global CSS variables from design system
- [ ] Set up `.env.local` with all environment variables
- [ ] Push to GitHub, connect to Vercel

**Day 2 — Database Setup**
- [ ] Run all schema SQL in Supabase SQL editor (all tables from this TRD)
- [ ] Add all indexes listed in performance section
- [ ] Write RLS policies for each table
- [ ] Seed database with 5 test categories and 10 test products
- [ ] Test Supabase queries from Next.js API route
- [ ] Set up Supabase Auth with Google OAuth provider

**Day 3 — Layout & Navigation**
- [ ] Build root layout: Nav + Footer
- [ ] Nav: Logo (center mobile), links, cart icon (badge), account icon
- [ ] Footer: 4-col desktop / stacked mobile, gold dividers
- [ ] Mobile hamburger menu with slide-in drawer (`shadcn/ui Sheet`)
- [ ] Build Homepage skeleton: hero, section placeholders
- [ ] Verify full mobile responsiveness at 320px, 375px, 768px, 1280px

---

### Phase 2: Catalog & Product Pages (Days 4–6)

**Day 4 — Product Listing**
- [ ] `/api/products` GET route with all filter/sort/pagination params
- [ ] Category page (`/category/[slug]`) with product grid
- [ ] Product card component: image, name, brand, price (formatted ₹), rating stars, QA badge
- [ ] Filter sidebar: category, price range, skin type, rating
- [ ] Sort dropdown: shadcn/ui Select
- [ ] Mobile filter as bottom sheet (`shadcn/ui Drawer`)
- [ ] Pagination component

**Day 5 — Product Detail Page**
- [ ] PDP route: `/product/[slug]`
- [ ] Image gallery with thumbnail strip (use `embla-carousel-react`)
- [ ] Product info section: name, brand, price, MRP (strikethrough), rating
- [ ] QA badge component with tooltip
- [ ] Skin type tags
- [ ] Ingredient list with glossary tooltip (`shadcn/ui Tooltip`)
- [ ] Sticky 'Add to Cart' bar on mobile
- [ ] 'You May Also Like' grid (4 products, same category query)

**Day 6 — Shade Finder + Homepage**
- [ ] Shade Finder page (`/shade-finder`) — 3-step quiz UI
- [ ] Step 1: Undertone selector (visual swatches)
- [ ] Step 2: Depth selector (skin tone gradient swatches)
- [ ] Step 3: Concern selector (pill buttons)
- [ ] `/api/products/shade-match` query logic
- [ ] Results grid page
- [ ] Save shade profile to user account (if logged in)
- [ ] Complete Homepage: hero banner, featured products, shade finder CTA, brand story, bestsellers, new arrivals
- [ ] Cloudinary image uploads for all test products

---

### Phase 3: Cart, Checkout & Payments (Days 7–9)

**Day 7 — Cart**
- [ ] Zustand cart store with `persist` middleware (localStorage)
- [ ] Cart page (`/cart`): item list, quantity controls, remove button
- [ ] Promo code field + `/api/promo-codes/validate` route
- [ ] Order summary: subtotal, delivery charge (free ≥ ₹499), tax, total
- [ ] Cart merging logic on login (guest cart → DB)
- [ ] Cart icon badge in nav (item count from Zustand)

**Day 8 — Checkout**
- [ ] Checkout flow: multi-step using state (Address → Payment → Review → Confirm)
- [ ] Address step: saved address selector OR new address form
- [ ] Pincode autofill API (use `api.postalpincode.in` — free)
- [ ] Loyalty points widget at checkout (apply/remove points)
- [ ] Order review step: final summary before payment
- [ ] `/api/orders` POST — create order in DB, call Cashfree

**Day 9 — Payments & Confirmation**
- [ ] Cashfree SDK integration: `@cashfreepayments/cashfree-js`
- [ ] `/api/payments/cashfree/create-order` route
- [ ] Payment modal: UPI + card options via Cashfree Drop UI
- [ ] `/api/payments/cashfree/webhook` — verify HMAC, update order status
- [ ] `/api/orders/verify-payment` — fallback polling if webhook delayed
- [ ] Order confirmation page: order number, summary, estimated delivery
- [ ] Trigger Resend email (order confirmation template)
- [ ] Trigger Fast2SMS order confirmation SMS

---

### Phase 4: Accounts & Loyalty (Days 10–11)

**Day 10 — Auth + Account**
- [ ] Login/Register page with shadcn/ui Form
- [ ] Supabase email/password auth
- [ ] Google OAuth button → Supabase Google provider
- [ ] Protected routes middleware (redirect to login if no session)
- [ ] Account dashboard (`/account`) — overview cards
- [ ] Order history page (`/account/orders`) with status badges
- [ ] Order detail + tracking page (`/account/orders/[id]`)
- [ ] Profile settings page (name, phone, birthday)
- [ ] Saved addresses manager (add/edit/delete/default)

**Day 11 — Wishlist + Loyalty**
- [ ] Wishlist page (`/account/wishlist`) — grid with remove + add-to-cart
- [ ] Wishlist heart icon on product cards (toggle)
- [ ] Loyalty dashboard (`/account/rewards`) — balance, history, expiry
- [ ] Loyalty engine: award points on order confirmed (webhook triggers)
- [ ] Birthday bonus: cron job or check on login (use Supabase Edge Functions)
- [ ] First order bonus logic (+50 points)
- [ ] Review bonus logic (+10 points, triggered in review submit API)

---

### Phase 5: Reviews & QA System (Day 12)

- [ ] Reviews section on PDP: list approved reviews, rating breakdown
- [ ] Review submit form (only shown to verified purchasers — check order history)
- [ ] Photo upload for reviews via Cloudinary signed upload
- [ ] Helpful vote buttons (yes/no)
- [ ] QA badge logic on product card + PDP
- [ ] QA Badge Info page (`/quality-assurance`)
- [ ] Average rating auto-update: Supabase trigger or update in review approve API

---

### Phase 6: Admin Panel (Days 12–13)

- [ ] Admin layout at `/admin` with sidebar navigation (protected route — role=admin only)
- [ ] Dashboard page: today's orders, revenue, pending reviews count, low stock alerts
- [ ] Products manager: list with search/filter, add/edit product form, QA badge toggle, delist button
- [ ] Cloudinary image uploader in product form (drag & drop, multi-image, reorder)
- [ ] Categories manager: add/edit/reorder categories
- [ ] Orders manager: list with status filter, update status, add tracking number
- [ ] Reviews moderation queue: approve/reject with preview
- [ ] Promo codes manager: create/deactivate codes

---

### Phase 7: QA, Testing & Launch (Day 14)

- [ ] Test all screens: iPhone SE (320px), iPhone 14 (375px), iPad (768px), desktop (1280px)
- [ ] Test full purchase flow: browse → PDP → cart → checkout → payment → confirmation
- [ ] Test Cashfree payment with test cards (UPI + card)
- [ ] Test loyalty points: earn on order, redeem at checkout
- [ ] Test review flow: verified purchase → submit → admin approve → visible on PDP
- [ ] Run Chrome DevTools Lighthouse: target 90+ Performance score
- [ ] Check for zero console errors on all main pages
- [ ] Switch Cashfree to live mode
- [ ] Set production environment variables on Vercel
- [ ] Final deploy to production domain
- [ ] Smoke test on production (real device, real UPI payment with ₹1 test order)

---

## 🎯 Technical Success Criteria

The project is **technically complete** when ALL of the following pass:

### Core Commerce
- [ ] A user can browse products, filter by skin type and price, and find a product in < 3 clicks
- [ ] A user can complete a full purchase (cart → checkout → UPI payment → confirmation) in under 3 minutes
- [ ] Order confirmation email and SMS are received within 60 seconds of payment
- [ ] Guest checkout works without account creation

### Performance
- [ ] Lighthouse Performance score ≥ 85 on mobile (simulated 3G)
- [ ] Page load < 3 seconds on Chrome DevTools 3G throttle for Homepage, Category, and PDP
- [ ] Zero layout shift on product image load (use `next/image` with defined dimensions)

### Data Integrity
- [ ] Loyalty points awarded = exact order total in rupees (paise ÷ 100)
- [ ] Review can only be submitted once per user per product per order
- [ ] Payment amounts match between Cashfree order and database order
- [ ] Cashfree webhook correctly marks order as `paid` before loyalty points are awarded

### Security
- [ ] Non-admin user cannot access `/admin/*` (redirected to homepage)
- [ ] User cannot view another user's orders or addresses
- [ ] Payment amount cannot be manipulated from client (server always recalculates)
- [ ] No secret keys present in client bundle (verify with `NEXT_PUBLIC_` prefix audit)

### Admin
- [ ] Admin can approve/reject a review and it appears/disappears on PDP within 5 seconds
- [ ] Admin can update order status and tracking number
- [ ] Admin can delist a product (it disappears from storefront immediately)

### Design
- [ ] All screens use design system colors (no off-brand hex values in components)
- [ ] All interactive elements accessible via keyboard Tab navigation
- [ ] All product images have meaningful `alt` text

---

*GHUNGHAT TRD v1.0 • Prepared March 2026*  
*✦ Build Fast. Ship Royal. ✦*

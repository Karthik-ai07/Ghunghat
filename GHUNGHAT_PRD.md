# 🪷 GHUNGHAT

**✦ Curated Beauty. Royal Grace. Pure Tradition. ✦**

# Product Requirements Document

> Version 1.0 • March 2026 • MVP Release

| Field | Details |
|---|---|
| **Platform** | Responsive Web (Desktop + Mobile) |
| **Tech Stack** | HTML/CSS/JS + Backend TBD |
| **Language** | Hinglish (English + Hindi) |
| **Timeline** | 1–2 Weeks (MVP) |
| **Budget** | Bootstrap / Zero Budget |
| **Payments** | UPI, Credit/Debit Cards |
| **Logistics** | Shiprocket / Delhivery |

---

## 📊 1. Project Overview

GHUNGHAT is a premium cosmetic e-commerce website that sells a curated mix of own-brand and handpicked third-party beauty products. Inspired by the grace and mystique of Indian tradition, the brand targets Indian women aged 18–50 who seek high-quality, trustworthy beauty products — not a sea of 10,000 SKUs, but the right 100.

*The name GHUNGHAT evokes the veil of elegance — beauty that is refined, intentional, and deeply rooted in culture. The website will be the brand's sole digital storefront at launch.*

| | |
|---|---|
| **🎯 Core Problem** | Indian beauty shoppers are overwhelmed by Nykaa's massive catalog. GHUNGHAT solves decision fatigue with a tightly curated, quality-assured selection. |
| **💡 Core Solution** | A royal-aesthetic cosmetics website selling fewer, better products — all quality-assured — with a seamless Hinglish shopping experience. |
| **🏆 Differentiator** | NOT a marketplace. Every product on GHUNGHAT is quality-tested and curated. Customers buy with confidence, not confusion. |

---

## 🎯 2. Product Vision

> ***"To become India's most trusted curated beauty destination — where every product earns its place on the shelf."***

### Vision Pillars

- **Quality over Quantity** — max 150 SKUs at launch, every one tested
- **Royal Aesthetic** — shopping feels luxurious, not clinical
- **Trustworthy Curation** — own-brand + verified third-party brands only
- **Culturally Rooted** — Hinglish copy, Indian skin tone focus, desi sensibility
- **Frictionless Commerce** — order in under 3 minutes on mobile

---

## 👤 3. Target User

### Primary Personas

**Persona A — Riya, 24, Delhi**
- College student / early professional
- Shops on Nykaa but overwhelmed by choices
- Wants trending + quality products she can trust
- Primarily mobile, pays via UPI
- Pain point: fake reviews, too many options, no curation

**Persona B — Sunita, 42, Lucknow**
- Homemaker / working woman
- Values traditional beauty + quality skincare
- Cautious buyer — reads reviews carefully
- Uses desktop or mobile, prefers card payment
- Pain point: doesn't trust random platforms, wants assurance

### User Demographics

| Attribute | Details |
|---|---|
| Age Range | 18–50 years |
| Location | Tier 1 & Tier 2 Indian cities (primary), diaspora (secondary) |
| Language | Hinglish-comfortable (reads English, thinks in Hindi) |
| Device | Mobile-first (70%), Desktop (30%) |
| Payment | UPI-first, Credit/Debit card secondary |
| Shopping Style | Research-heavy, reviews-driven, brand-conscious |
| Skin Concerns | Oily/combination skin, tan, dark spots (Indian skin tones) |

---

## ✨ 4. Core Features

### Feature 1: Product Catalog & Browsing

- Categories: Skincare, Makeup, Haircare, Ayurvedic/Traditional, Gifting
- Sub-categories nested under each (e.g., Skincare > Serums, Moisturizers, SPF)
- Each product card shows: image, name, brand, price (INR), rating (1–5 stars), 'Quality Assured' badge
- Filter by: category, price range (₹0–500, ₹500–1000, ₹1000+), brand, skin type, rating
- Sort by: popularity, newest, price low–high, price high–low, highest rated
- Max 150 products at launch

### Feature 2: Product Detail Page (PDP)

- 6 high-res images minimum per product (front, back, texture, swatch, lifestyle)
- Full ingredients list with ingredient glossary tooltip
- 'Works Best For' section: skin type tags (Oily / Dry / Combination / Sensitive)
- Quality Assurance badge with 1-line description of testing done
- Brand story (for own-brand products) or brand profile (for curated brands)
- Reviews section (see Feature 5)
- 'You May Also Like' — 4 similar products
- Sticky 'Add to Cart' button on mobile

### Feature 3: Shade Finder / Skin Tone Matcher

- Accessible from homepage banner and on relevant product pages (foundations, concealers, lip colors)
- 3-step quiz:
  - Step 1 — Undertone (Warm/Cool/Neutral)
  - Step 2 — Depth (Fair/Medium/Dusky/Deep)
  - Step 3 — Concern (coverage, finish)
- Output: filtered product grid matching the shade profile
- User can save shade profile to account for future visits
- Shown as a banner on homepage: 'Find Your Perfect Shade →'

### Feature 4: Cart & Checkout

- Persistent cart (saved across sessions for logged-in users)
- Cart shows: product image, name, quantity selector, price, subtotal
- Promo code field
- Order summary: subtotal, delivery charge (free above ₹499), taxes, total
- Checkout steps: Address → Payment → Review → Confirm (max 4 steps)
- Address: save up to 3 addresses per account; autofill via pincode
- Payment: Razorpay or Cashfree integration for UPI + cards
- Order confirmation page + email + SMS with order ID

### Feature 5: Reviews & Ratings

- Only verified purchasers can leave reviews (tied to order ID)
- Star rating (1–5) + written review (max 500 chars) + optional photo upload
- Review shows: username (first name + last initial), date, verified badge, skin type
- Helpful votes on reviews ('Was this helpful? Yes / No')
- Admin moderation panel to approve/reject reviews before publishing
- Average rating displayed on product card and PDP

### Feature 6: Loyalty Points (Ghunghat Rewards)

- ₹1 spent = 1 Ghunghat Point
- Points redeemable: 100 points = ₹10 discount on next order
- Bonus events: First order (+50 pts), Birthday month (2x points), Review posted (+10 pts)
- Points dashboard in user account: earned, redeemed, balance, expiry (12 months)
- Points visible at checkout before payment confirmation

### Feature 7: Quality Assurance System

- Every product carries one of three QA badges: 'Dermatologist Tested', 'Lab Certified', or 'GHUNGHAT Curated'
- QA badge page: a standalone page explaining what each badge means and the testing process
- Products failing QA review are delisted within 24 hours
- Admin can update QA status per product from the admin panel

### Feature 8: User Account

- Register/Login via email + password OR Google OAuth
- Profile: name, email, phone, birthday (for loyalty), saved addresses, shade profile
- Order history with status tracking: Confirmed → Packed → Shipped → Delivered
- Wishlist: save products, move to cart in 1 click
- Loyalty points dashboard

---

## 📱 5. Screen Inventory

| Screen | Description |
|---|---|
| Homepage | Hero banner, featured products, shade finder CTA, brand story strip, bestsellers, new arrivals |
| Category Page | Grid of filtered products, sidebar filters, sort dropdown |
| Product Detail Page | Image gallery, product info, QA badge, add to cart, reviews, related products |
| Shade Finder | 3-step quiz UI, results grid |
| Cart | Item list, quantity controls, promo code, order summary |
| Checkout — Address | Address form / saved address selector |
| Checkout — Payment | UPI / card payment via Razorpay |
| Checkout — Confirm | Order summary review before final submit |
| Order Confirmation | Success message, order ID, estimated delivery date |
| My Account — Dashboard | Overview of orders, points, wishlist |
| My Account — Orders | Order history + individual order tracking |
| My Account — Wishlist | Saved products grid |
| My Account — Rewards | Points balance, transaction history, how to redeem |
| Login / Register | Email/password + Google OAuth |
| QA Badge Info Page | Explanation of all 3 quality badges |
| About GHUNGHAT | Brand story, values, founding vision |
| Contact / Support | Contact form, WhatsApp link, email |
| 404 Page | Branded not-found page with navigation help |

---

## 🔄 6. Key User Flows

### Flow 1: First-Time Purchase

1. User lands on Homepage via Instagram/Google ad
2. Sees hero banner → clicks 'Shop Now' or a featured product
3. Browses Category Page → applies filter (e.g., Skin Type: Oily)
4. Clicks product → reads PDP, reviews, QA badge
5. Clicks 'Add to Cart'
6. Views cart → clicks 'Checkout'
7. Registers account OR checks out as guest
8. Enters delivery address (pincode autofill)
9. Selects payment: UPI (Razorpay popup) or card
10. Lands on Order Confirmation page
11. Receives confirmation email + SMS

### Flow 2: Shade Finder

1. User clicks 'Find Your Shade' on homepage banner
2. Step 1: Selects undertone (Warm / Cool / Neutral)
3. Step 2: Selects skin depth (Fair / Medium / Dusky / Deep)
4. Step 3: Selects concern (e.g., Full Coverage, Matte Finish)
5. Results page shows matching foundations/lip colors
6. User adds product to cart from results page
7. If logged in, shade profile saved to account

### Flow 3: Loyalty Points Redemption

1. User logs in and goes to cart
2. Sees 'You have 250 Ghunghat Points (worth ₹25)' at checkout
3. Clicks 'Apply Points' — discount applied to order total
4. Proceeds to payment for remaining balance
5. Points deducted from account after order confirmed

---

## 📊 7. Success Metrics

| Metric | Target (Month 1) |
|---|---|
| Zero critical bugs at launch | 0 checkout-breaking bugs |
| Page load speed | < 3 seconds on mobile (3G) |
| Mobile responsiveness | 100% screens tested on iPhone SE & Android mid-range |
| Checkout completion rate | > 60% of users who add to cart complete purchase |
| Product pages live | Minimum 30 products fully loaded with images + QA badges |
| Review system working | Verified-only reviews live, moderation panel functional |
| Loyalty points tracking | Points awarded correctly on 100% of test orders |
| Payment success rate | ≥ 95% on Razorpay test transactions |
| Design consistency | All screens follow design system — no color/font deviations |

---

## 🚫 8. Out of Scope (MVP)

The following features are explicitly **NOT** being built for launch:

- Virtual try-on (AR) — requires complex computer vision, post-MVP
- Mobile app (Android / iOS) — website only at launch
- WhatsApp ordering channel — post-MVP
- Live chat / chatbot — only a contact form + WhatsApp link
- Seller portal / vendor onboarding — admin manages all products manually
- Multi-language support beyond Hinglish
- Subscription boxes or recurring orders
- Blog / content hub (beauty tips, tutorials)
- Affiliate or influencer program
- COD (Cash on Delivery) — not in MVP, evaluate post-launch
- EMI / BNPL payments
- International shipping — India-only at launch
- Product comparison tool

---

## 🗓️ 9. Development Phases

| Phase | Timeline | Deliverables |
|---|---|---|
| Phase 1 | Days 1–3 — Foundation & Design Setup | Design system defined, color tokens set, homepage & navigation built, mobile responsive layout verified |
| Phase 2 | Days 4–6 — Catalog & Product Pages | Category pages with filters, 30+ PDPs with images/QA badges, shade finder quiz (3-step UI + results) |
| Phase 3 | Days 7–9 — Cart, Checkout & Payments | Cart page, checkout flow (4 steps), Razorpay/Cashfree integration for UPI + cards, order confirmation |
| Phase 4 | Days 10–11 — Accounts & Loyalty | Register/Login (email + Google OAuth), user dashboard, order tracking, wishlist, loyalty points engine |
| Phase 5 | Day 12 — Reviews & QA System | Verified-purchase reviews, star ratings, photo upload, admin moderation panel, QA badge display logic |
| Phase 6 | Days 13–14 — QA, Bug Fixes & Launch | Full device testing, performance audit, 0 critical bugs confirmed, deploy to production |

---

## 🔐 10. Privacy & Safety

- All passwords hashed using bcrypt (min 12 rounds)
- HTTPS enforced on all pages — no HTTP fallback
- Payment data never stored on GHUNGHAT servers — handled entirely by Razorpay/Cashfree PCI-DSS compliant vault
- User email and phone collected only for order communication and account recovery
- Birthday (for loyalty bonus) stored as MM/DD only — no year required
- No third-party ad tracking pixels at launch (privacy-first brand positioning)
- Cookie consent banner on first visit (compliant with IT Rules 2021)
- Admin panel protected by separate login with 2FA (TOTP)
- Reviews: usernames shown as 'First Name + Last Initial' only (e.g., Priya S.)
- User can delete account and all data from account settings (right to erasure)

---

## ✅ 11. Definition of Done

**A feature is considered DONE only when ALL of the following are true:**

1. **Functional:** works correctly on Chrome, Firefox, Safari (latest versions)
2. **Responsive:** renders correctly on 320px (iPhone SE), 375px (iPhone 14), 768px (iPad), 1280px (desktop)
3. **Performance:** page loads in < 3 seconds on simulated 3G in Chrome DevTools
4. **Accessible:** all interactive elements reachable via keyboard; images have alt text
5. **Design:** matches the GHUNGHAT design system — no off-brand colors, fonts, or spacing
6. **Error states:** empty states, loading states, and error messages exist for every async action
7. **Tested:** manually tested for the happy path AND at least 2 edge cases
8. **No console errors:** zero JS errors in browser console during normal use

---

## 🎨 12. Design System

### Color Palette

| Token | Value & Usage |
|---|---|
| `--color-primary` | `#8B0000` (Deep Red) — CTAs, headings, nav active state |
| `--color-accent` | `#B8860B` (Dark Gold) — borders, badges, highlights, dividers |
| `--color-bg-cream` | `#FFF8E7` — page background, alternate table rows |
| `--color-bg-dark` | `#2C0A0A` — hero section bg, footer background |
| `--color-text-primary` | `#1A1A1A` — all body text |
| `--color-text-light` | `#FFFFFF` — text on dark backgrounds |
| `--color-text-muted` | `#555555` — captions, meta text, labels |
| `--color-success` | `#2E7D32` — order confirmed, in-stock indicator |
| `--color-warning` | `#F57F17` — low stock alert (< 5 units) |
| `--color-error` | `#C62828` — form errors, out-of-stock |

### Typography

| Element | Spec |
|---|---|
| Brand Wordmark | Georgia, Bold, 48px, #8B0000 |
| Page Headings (H1) | Georgia, Bold, 32px, #8B0000 |
| Section Headings (H2) | Georgia, SemiBold, 24px, #8B0000 |
| Card Titles (H3) | Arial, Bold, 18px, #1A1A1A |
| Body Text | Arial, Regular, 16px, #1A1A1A, line-height 1.6 |
| Captions / Meta | Arial, Regular, 13px, #555555 |
| Buttons | Arial, Bold, 15px, uppercase, letter-spacing 0.08em |
| Price | Arial, Bold, 18px, #8B0000 |

### Component Specs

- **Primary Button:** bg `#8B0000`, text white, border-radius 4px, padding 12px 28px, hover bg `#6B0000`
- **Secondary Button:** border 2px solid `#B8860B`, text `#B8860B`, bg transparent, hover bg `#FFF8E7`
- **Product Card:** white bg, 1px border `#E8D5A3`, border-radius 8px, gold hover shadow, 280×280px image
- **QA Badge:** gold pill shape, 12px text, icon prefix, appears on card bottom-left
- **Input Fields:** 1px border `#CCCCCC`, focus ring `#B8860B`, border-radius 4px, 48px height (mobile-friendly)
- **Nav:** sticky top, bg `#2C0A0A`, logo center on mobile, hamburger menu on < 768px
- **Footer:** bg `#2C0A0A`, text white, gold dividers, 4-column on desktop → stacked on mobile

### Iconography & Patterns

- Icon library: Lucide Icons (open source, consistent stroke width)
- Ethnic pattern: subtle paisley/mandala pattern as SVG watermark on hero and footer — opacity 8%
- Decorative dividers: gold horizontal rule (2px, `#B8860B`) between major sections
- Empty states: illustrated (SVG), not generic — e.g., empty cart shows a royal empty basket

---

*GHUNGHAT PRD v1.0 • Prepared March 2026 • MVP Target: 2 Weeks*

*✦ Beauty Curated. Quality Assured. Royally Delivered. ✦*

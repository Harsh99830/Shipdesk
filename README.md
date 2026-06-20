# ShipDesk

A multi-courier shipping aggregator dashboard for sellers and wholesalers — book shipments, compare courier rates, manage pickups, track failed deliveries, and handle wallet-based billing from one unified panel.

> Inspired by courier aggregator platforms in the Indian logistics space. Built independently — not affiliated with or endorsed by any existing courier aggregator company.

---

## What is this?

Sellers who ship products through multiple courier partners (Delhivery, DTDC, Ekart, Bluedart, etc.) normally have to log into each courier's separate system to book shipments, track packages, and handle issues. ShipDesk aggregates all of that into a single dashboard, so a seller can:

- Book a shipment once and let the system pick (or let them choose) the best courier for that route
- Track every shipment regardless of which courier is handling it
- Manage pickups, payment mode changes, weight disputes, and failed deliveries — all from one place

---

## Core features (planned)

- [ ] **Order creation** — enter pickup/delivery pincode, weight & dimensions, payment mode (Prepaid/COD), invoice value
- [ ] **Courier rate comparison** — fetch and compare live rates across integrated courier partners
- [ ] **Wallet & billing** — prepaid wallet system, auto-deduction per shipment, recharge flow
- [ ] **Pickup requests** — schedule bulk courier pickups from a registered warehouse/location
- [ ] **MOP (Mode of Payment) requests** — change COD ↔️ Prepaid on an already-booked shipment
- [ ] **Weight reconciliation** — surface discrepancies between declared and courier-captured weight, with dispute flow
- [ ] **Delivery appointments** — PO-number and ASN-based scheduled delivery slots for B2B/large-buyer deliveries
- [ ] **NDR & exceptions** — track failed delivery attempts, reasons, and re-attempt/RTO management
- [ ] **Tracking** — unified tracking view by AWB/LR number across all integrated couriers

---

## Tech stack

> _Fill in once finalized._

- **Frontend:** TBD
- **Backend:** TBD
- **Database:** TBD
- **Courier integrations:** TBD (list courier APIs as they're integrated)

---

## Architecture overview

The core idea: most of the data shown in the dashboard (tracking updates, NDR reasons, captured weight, rate quotes) actually originates from each courier's own system and is pulled in via their APIs. What this project owns and builds is:

1. The **aggregation layer** — normalizing different couriers' API responses into one consistent data model
2. The **wallet & billing ledger** — tracking what the seller owes/has paid, independent of any courier
3. The **unified dashboard UI** — one consistent interface instead of N different courier portals
4. **Automation & business rules** on top — e.g. auto-accept weight discrepancies after 7 days, rate comparison logic, request workflows (MOP, pickup, disputes)

```
Seller → ShipDesk Dashboard → Courier API #1 (Delhivery)
                            → Courier API #2 (DTDC)
                            → Courier API #3 (Ekart)
                            → ...
```

---

## Getting started

```bash
# clone the repo
git clone https://github.com/<your-username>/shipdesk.git
cd shipdesk

# install dependencies
npm install

# run locally
npm run dev
```

> _Update these commands once the project scaffold is in place._

---

## Status

🚧 Early-stage / in development. Core screens and data model being scoped out before courier API integration begins.

---

## License

TBD
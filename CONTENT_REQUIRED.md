# ScITech Client Content & Launch Checklist

This document details business assets, credentials, and configuration required to transition this front-end deliverable into a live production launch.

---

## 1. Brand Assets & Visual Media
- [ ] **Official Logo Vector:** High-resolution SVG / EPS vector files for ScITech emblem and wordmark.
- [ ] **Faculty & Staff Photographs:** High-res headshots and bios for the "Meet the Team" section on `about.html`.
- [ ] **Course Video Previews:** Host mp4 / HLS video streams for free course lesson previews in ScITech Academy.

---

## 2. Business Information & Channels
- [ ] **Verified Business Address & Location:** Physical address if required for footer and contact page.
- [ ] **Dedicated WhatsApp Number:** Verified WhatsApp business channel number for `contact.html`.
- [ ] **Legal Policy Documents:** Privacy Policy, Terms of Service, and Refund Policy copy approved by legal counsel.

---

## 3. Integrations & Backend Services
- [ ] **Form Delivery Webhook / SMTP:** Configure API endpoint URL in `src/data/site-config.js` (`SITE_CONFIG.integrations.formSubmitEndpoint`) for live email delivery of consultation inquiries.
- [ ] **Secure Storage Bucket:** Configure AWS S3, Google Cloud Storage, or Cloudflare R2 bucket for consultation document uploads.
- [ ] **LMS / Payment Gateway:** Integrate Stripe / PayPal or LMS webhook endpoints for ScITech Academy course enrollments.

# Handling Payments with Stripe

Stripe is an online service that makes it easy for developers (and less technical folks) to create products, accept payments from a number of different providers, and fulfill orders in a safe way.

Usually, if you want to accept a "digital" payment, you'd have to get access to someone's credit card information and if you're trying to implement subscription-based or recurring payments, you'd also have to store your customer's financial info so that you can charge it again later.

Once you store a credit card number (or any sensitive financial info) on servers under your control, you enter a realm of legal & financial requirements and policies that are designed to safeguard customer's sensitive info, such as [PCI-DSS](https://stripe.com/guides/pci-compliance).

Stripe entered the game to solve that issue for businesses. Rather than each individual business manage its own customer financial data, you set up your products in Stripe and let Stripe handle ALL aspects of payments - storing financial info, providing receipts, handling refunds, etc.

## Stripe Products

For the purpose of Milestone 1, we'll use their easiest integration - Payment Links. Without any code whatsoever, you can create a product on Stripe and have a link that allows someone to submit a purchase.

[See their guide here](https://stripe.com/docs/no-code/payment-links) for creating a Payment Link for a Stripe Product.

You'll get something like [this buy.stripe.com link](https://buy.stripe.com/test_00g2aK9vX1AG4WAaEF) that I made during class.

### Useful things to know

I won't replicate Stripe's documentation here, but I'll share some tidbits to keep in mind while you're messing around on Stripe.

- __Test Mode__ - They offer a "Test" mode where you can receive payments from known [fake credit card numbers](https://stripe.com/docs/testing), and you can navigate your account as if you accepted a real payment
- __Tax Time__ - Stripe pays you and so Stripe has to report payments made to you to the IRS (if you're operating within the US). That means that you are then forced to report your Stripe income when Tax Season arrives.
- __Limitations__ -  Depending on the payment type (credit card, checking account), Stripe only allows payments from certain countries to help them combat fraud - they have an exhaustive [list available here](https://stripe.com/docs/connect/payment-method-available-countries)




# Frontend test for a job position in Oversight.

creating a frontend application
for a coupon system
with login and logout capabilities
and reports system showing the trafic usage of coupons and the option to export to excel

## application requirements  

### Admin
* only admins can create user accounts.
* only admins can create , view , delete or edit coupons.
* has a reports system for coupons :
  - searching all coupons created by a specific user
  - searching all coupons at cetrain dates
  - and export to excel

### user
* be able to login and logout
* has a default 100 nis transaction ready (for testing purposes)
* be able to apply coupon codes 

### coupons
* coupons have descriptions only admins can view
* coupon codes are not public and can only be used by applying its code.
* important : while a user uses a coupon add users ID and time of creation
* coupon can give a discount by % or NIS
* coupon can somtimes have expiry dates.
* some coupons can have a limit and cannot be used with other coupons.
* some coupons can be set with a limited usage.




### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh


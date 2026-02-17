# ICICI Payment Gateway Integration - TODO

## Task: Fix "Order not found" error and implement proper payment flow

### Steps to Complete:

- [ ] 1. Create Payment Model (models/Payment.js)
  - Fields: orderId (merchantTxnNo), transactionId, amount, status, gatewayResponse, createdAt

- [ ] 2. Update iciciController.initiateSale
  - Already saves Order before redirecting ✓
  - Minor improvements for error handling

- [ ] 3. Update iciciController.handleResponse
  - Log full callback response (already does ✓)
  - Extract correct fields from ICICI response
  - Find order using merchantTxnNo
  - Save payment to Payment collection
  - Update Order status (SUCCESS/FAILED)
  - Redirect to https://www.newindiaexport.com/payment-success?merchantTxnNo=XXXX

- [ ] 4. Add ICICI Field Mapping
  - merchantTxnNo, txnId, txnReferenceNo, responseCode, responseMessage, status

### ICICI Callback Fields:
- merchantTxnNo - Our transaction ID
- txnId / txnReferenceNo - ICICI's transaction ID  
- responseCode - Response code (R1000 = success)
- responseMessage - Response description
- status - Payment status (SUCCESS/FAILED)
- amount - Transaction amount
- customerEmailID - Customer email
- customerMobileNo - Customer mobile

### Implementation Status:
- [ ] Create models/Payment.js
- [ ] Update controllers/iciciController.js

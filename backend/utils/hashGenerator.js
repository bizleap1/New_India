const crypto = require('crypto');

/**
 * Generates an HMAC SHA256 hash for ICICI PGPay v2.
 * Logic: Alphabetical Sort of Keys -> Concatenate Values -> HMAC-SHA256
 * 
 * @param {Object} payload - The JSON payload
 * @param {string} secret - The Merchant/Aggregator Secret Key
 */
const generateSecureHash = (payload, secret) => {
    // 1. Sort keys alphabetically
    const keys = Object.keys(payload).sort();

    // 2. Concatenate values
    // Note: Iterate keys and append values directly.
    // If a value is null/undefined/empty, we should verify specific behavior.
    // Standard practice matches the empty string concatenation.
    let valString = "";

    keys.forEach(key => {
        let val = payload[key];
        // Skip null/undefined? Or treat as empty string?
        // In the user example HashText, if aggregatorID was missing/null, it seemed skipped.
        // But if we send it in JSON, it's not null.
        // Converting to string ensures "null" doesn't become the string "null" unless intended.
        // Usually, we filter out null/undefined keys before hashing, OR treat as empty string.
        // Let's use empty string for null/undefined to be safe.
        if (val === null || val === undefined) {
            val = "";
        }
        valString += String(val);
    });

    // Debugging log locally (can be removed later)
    // console.log('Hash String:', valString);

    return crypto
        .createHmac('sha256', secret)
        .update(valString)
        .digest('hex')
        .toLowerCase();
};

/**
 * Verifies the incoming secureHash from ICICI.
 */
const verifySecureHash = (payload, receivedHash, secret) => {
    // Create a copy to avoid mutating original
    const p = { ...payload };
    // Remove secureHash from payload if present before calculating
    delete p.secureHash;

    const calculatedHash = generateSecureHash(p, secret);
    return calculatedHash === receivedHash.toLowerCase();
};

module.exports = {
    generateSecureHash,
    verifySecureHash
};

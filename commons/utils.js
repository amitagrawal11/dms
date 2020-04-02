function isObjectNotEmpty(obj) {
    if (obj && obj !== null && typeof obj === 'object' && Object.keys(obj).length) {
        return true;
    }
    return false;
}

/* Exporting functions  */
module.exports = {
    isObjectNotEmpty
}
function now() {
    return new Date()
}

function stringToDate(YYYY_MM_DD) {
    return new Date(YYYY_MM_DD)
}

module.exports = {
    now: now,
    stringToDate: stringToDate
}
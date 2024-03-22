function getLanguage(headers) {
    const acceptLanguage = headers['accept-language'] || 'en';
    const languages = acceptLanguage.split(',');
    return languages[0].trim();
}

function getMessage(language, messageKey) {
    try{
        let languageData = require(`../language/${language}.json`);
        return languageData[messageKey] || 'Message not found';
    } catch (error) {
        return 'Error loading language data or accessing message';
    }
}

module.exports = { getLanguage, getMessage };
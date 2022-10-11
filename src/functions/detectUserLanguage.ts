function detectUserLanguage() {
    let lang = navigator.language;
    let langSite = '';
    switch (lang) {
        case "ru-RU":
            langSite = "ru";
            break;
        case "en_US":
            langSite = "en";
            break;
        case "uk-UA":
            langSite = "ua";
            break;
        case "no-NO":
            langSite = "no";
            break;
        default:
            langSite = "en"
    }
    return langSite;
}
export default detectUserLanguage;
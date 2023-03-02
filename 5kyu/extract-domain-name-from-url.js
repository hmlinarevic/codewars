// order is important - most chars first
const prefixes = [
    "https://www.",
    "http://www.",
    "https://",
    "http://",
    "www."
]

function domainName(url) {
    const urlPrefix = prefixes.find(prefix => {
        return prefix.split('').every((char, i) => char === url[i])
    })

    if (!urlPrefix) return url.slice(0, url.indexOf('.'))

    const urlWithoutPrefix = url.slice(urlPrefix.length, -1)

    const domainName = urlWithoutPrefix.slice(0, urlWithoutPrefix.indexOf('.'));

    console.log(domainName)
    return domainName
}


domainName("http://google.com")
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("https://youtube.com")





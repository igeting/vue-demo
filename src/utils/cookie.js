export const setCookie = (key, value, days) => {
    let now = new Date()
    now.setDate(now.getDate() + days)
    document.cookie = key + '=' + value + '; expires=' + now
}

export const setCookieMin = (key, value, min) => {
    let now = new Date()
    let afterDate = new Date(now.getTime() + min * 100000)
    document.cookie = key + '=' + value + '; expires=' + afterDate
}

export const getCookie = key => {
    let cookie = document.cookie
    if (!cookie) {
        return null
    }
    let cookies = document.cookie.split(";")
    for (let i = 0; i < cookies.length; i++) {
        let cs = cookies[i].split("=")
        if (cs[0].trim() == key) {
            return cs[1]
        }
    }
    return null
}

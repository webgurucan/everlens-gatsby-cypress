export const isBrowser = () => typeof window !== "undefined"

const USER_KEY = "everlywell-user"
const INNER_NAVIGATE = "inner-navigate"

export const authorize = user =>
  window.localStorage.setItem(USER_KEY, JSON.stringify(user))

export const isAuthorized = () => {
  const user = getUser()

  return !!user?.accessCode
}

export const getUser = () =>
  isBrowser() && window.localStorage.getItem(USER_KEY)
    ? JSON.parse(window.localStorage.getItem(USER_KEY))
    : {}

export const logout = () => {
  window.localStorage.setItem(USER_KEY, JSON.stringify({}))
}

export const setInnerNavigate = () =>
  isBrowser() && window.localStorage.setItem(INNER_NAVIGATE, true)

export const isInnerNavigate = () =>
  isBrowser() ? window.localStorage.getItem(INNER_NAVIGATE)
    : false

export const initInnerNavigate = () => {
  isBrowser() && window.localStorage.removeItem(INNER_NAVIGATE)
}
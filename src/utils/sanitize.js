import * as sanitizeHtml from "sanitize-html"

const sanitize = (dirty, options = {}) => {
  return sanitizeHtml(dirty, { ...options })
}

export default sanitize

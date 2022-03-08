const truncate = (text, limit = 100) => {
  if (!text) {
    return
  }

  return text?.length > limit ? text?.substring(0, limit - 3) + "..." : text
}

export default truncate

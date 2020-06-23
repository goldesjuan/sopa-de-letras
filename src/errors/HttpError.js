class HttpError extends Error {

  constructor(httpCode, description) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)
    this.httpCode = httpCode

    Error.captureStackTrace(this)
  }
}

const httpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER: 500,
}

export { HttpError, httpStatusCodes }

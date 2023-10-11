const enum ErrorTypes {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

function showError(error: ErrorTypes): void {
  if (error === ErrorTypes.BadRequest) {
    alert("Bad request");
  } else if (error === ErrorTypes.Unauthorized) {
    alert("Unauthorized");
  } else if (error === ErrorTypes.Forbidden) {
    alert("Unauthorized");
  } else if (error === ErrorTypes.NotFound) {
    alert("Not found");
  } else if (error === ErrorTypes.InternalServerError) {
    alert("Internal server error");
  } else {
    alert("Unknown error");
  }
}

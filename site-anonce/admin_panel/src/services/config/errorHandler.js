const handleError = (error) => {
  if (error.response) {
    // Handle errors from the server response
    console.error("Error Response:", error.response);
    throw new Error(error.response || "An error occurred");
  } else if (error.request) {
    // Handle errors from no response received
    console.error("Error Request:", error.request);
    throw new Error("No response received from server");
  } else {
    // Handle other types of errors
    console.error("Error Message:", error.message);
    throw new Error(error.message);
  }
};

export default handleError;

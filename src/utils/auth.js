// Fake user
const fakeUser = {
  name: "Anhelina",
  email: "demo@example.com",
  _id: "fake-user-123",
};

// Register
export const register = (name, email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: fakeUser });
    }, 300);
  });
};

// Login
export const authorize = (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: "fake-jwt-token-123" });
    }, 300);
  });
};

// Token check
export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "fake-jwt-token-123") {
        resolve({ data: fakeUser });
      } else {
        reject(new Error("Invalid token"));
      }
    }, 300);
  });
};

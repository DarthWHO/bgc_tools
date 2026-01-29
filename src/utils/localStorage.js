export function getFromLocalStorage(key, defaultValue = null) {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        const item = window.localStorage.getItem(key);
        resolve(item ? JSON.parse(item) : defaultValue);
      } catch (error) {
        console.error(`Error reading localStorage key "${key}":`, error);
        resolve(defaultValue);
      }
    }, 0);
  });
}

export function saveToLocalStorage(key, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (error) {
        console.error(`Error saving to localStorage key "${key}":`, error);
        reject(error);
      }
    }, 0);
  });
}

export function removeFromLocalStorage(key) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        window.localStorage.removeItem(key);
        resolve();
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error);
        reject(error);
      }
    }, 0);
  });
}

export function clearLocalStorage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        window.localStorage.clear();
        resolve();
      } catch (error) {
        console.error("Error clearing localStorage:", error);
        reject(error);
      }
    }, 0);
  });
}

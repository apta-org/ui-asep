const polyfill = (() => {
  let store = {};
  return {
    setItem: (key, item) => {
      store[key] = item.toString();
    },

    getItem: (key) => {
      if (store[key]) return store[key];
      return undefined;
    },

    clear: () => {
      store = {};
    },

    keys: () => Object.keys(store),

    toString: () => JSON.stringify(store)
  };
})();

export default window.localStorage !== undefined ? window.localStorage : polyfill;

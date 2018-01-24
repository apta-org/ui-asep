import localStorage from '../test-util/localStorage';

export const BACKUP_KEY = 'ui-asep-backup';

const sessionKey = (new Date()).getTime();

export function parseStoredState() {
  try {
    const stringState = localStorage.getItem(BACKUP_KEY) || null;
    return stringState ? JSON.parse(stringState) : {};
  } catch (err) {
    // eslint-disable-next-line
    console.error('Failed to parse store state from localStorage', err);
    return {};
  }
}

const sortDesc = (a, b) => b - a;

// helper function to convert stored state to values with human readable dates
export const getSortedStateWithContext = () => {
  const storedState = parseStoredState();
  return Object.keys(storedState).sort(sortDesc).map((key) => {
    const value = storedState[key];
    value.sessionKey = key;
    value.date = (new Date(parseInt(key, 10)).toLocaleString());
    return value;
  });
};

// we keep maxEntries + 1 states in history
export const MAX_ENTRIES = 50;

export const backupState = (stateSessionKey, newState) => {
  const storedState = parseStoredState();
  // sort youngest key to oldest so the most recent session record is first
  const sortedKeys = Object.keys(storedState).sort(sortDesc);
  const newStoredState = {};

  // only store up to {maxEntries} number of previous sessions states
  sortedKeys.reduce((count, key) => {
    // minus 1 since we're adding a new entry
    if (count < MAX_ENTRIES - 1) {
      newStoredState[key] = storedState[key];
    }
    return count + 1;
  }, 0);
  newStoredState[stateSessionKey] = newState;
  localStorage.setItem(BACKUP_KEY, JSON.stringify(newStoredState));
};

export const restoreState = (state, sessionId) => {
  const backupStates = parseStoredState();
  if (backupStates && backupStates[sessionId]) {
    return backupStates[sessionId];
  }
  // if we couldn't find a backup state, return the current state
  return state;
};

export const getLastState = () => {
  const backedUpState = parseStoredState();
  const sortedKeys = Object.keys(backedUpState).sort(sortDesc);
  let index = 0;
  // make sure we return the most recent state that ISN'T the current session
  if (sortedKeys.length > 1 && sortedKeys[0] && sortedKeys[0] === String(sessionKey)) {
    index = 1;
  }
  return backedUpState[sortedKeys[index]];
};

export function backup(currentState) {
  backupState(sessionKey, currentState);
}

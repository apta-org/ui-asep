module.exports = (consoleArguments) => {
  // This is required since this file is not parsed with Babel
  const flags = {};
  consoleArguments.forEach((val) => {
    const flag = /^--([A-z]*)=(.*)$/;
    const matches = val.match(flag);
    if (matches && matches.length > 2) {
      const key = matches[1];
      const value = matches[2];
      flags[key] = value;
    }
  });

  return flags;
};

export default {
  add: () => ({
    type: 'add',
  }),
  set: (key, value) => ({
    type: 'set',
    key,
    value,
  }),
};

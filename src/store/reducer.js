import initState from './state';
export default (state = initState, action) => {
  // console.log(state, action);

  switch (action.type) {
    case 'set':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'add':
      return {
        ...state,
        a: state.a + 1,
      };
    default:
      return state;
  }
};

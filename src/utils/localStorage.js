export const loadState = () =>
  localStorage.getItem('To Do State') ?
    JSON.parse(localStorage.getItem('To Do State')) :
    {
      items: []
    };


export const saveState = state =>
  localStorage
    .setItem(
      'To Do State',
      JSON.stringify(state)
    );
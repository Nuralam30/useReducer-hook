export const PatientsState = {
    patients : []
};

export const patientsReducer = (state, action) =>{
  switch (action.type) {
    case 'ADD_PATIENT':
      return state;
    case 'REMOVE_PATIENT':
      return state;
    default:
      throw new Error();
  }
}

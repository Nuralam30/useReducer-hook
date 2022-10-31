export const PatientsState = {
    patients : []
};

export const patientsReducer = (state, action) =>{
  switch (action.type) {
    case 'ADD_PATIENT':
      const newPatient = {
        id : action.id,
        name : action.name
      }
      const allPatients = [...state.patients, newPatient];
      return {patients: allPatients}

    case 'REMOVE_PATIENT':
      const remaining = state.patients.filter(pt => pt.id !== action.id)
      return {patients: remaining}
    default:
      throw new Error();
  }
}

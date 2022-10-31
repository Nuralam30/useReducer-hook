import React, { useReducer } from 'react';
import { patientsReducer, PatientsState } from '../reducer/reducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientsReducer, PatientsState);

    return (
        <div>
            <h1>Total patients : {state.patients.length}</h1>
        </div>
    );
};

export default PatientManagement;
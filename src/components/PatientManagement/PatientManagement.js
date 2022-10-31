import React, { useReducer, useRef } from 'react';
import { patientsReducer, PatientsState } from '../reducer/reducer';
import './patientManagement.css'

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientsReducer, PatientsState);
    const patientsNum = state.patients.length;

    const addPatient = e =>{
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            id : patientsNum + 1,
            name : nameRef.current.value
        })
        nameRef.current.value = ''
    }

    const removePatient = (patientId) =>{
        dispatch({
            type: 'REMOVE_PATIENT',
            id : patientId
        })
    }

    return (
        <div className='patientManagement'>
            <h1>Total patients : {patientsNum}</h1>
            <form onSubmit={addPatient}>
                <input ref={nameRef} />
                <input type="submit" value="Add" />
            </form>
            {
                state.patients.map( pt => <li key={pt.id}>{pt.name} <button onClick={() => removePatient(pt.id)}>Remove</button></li>)
            }
        </div>
    );
};

export default PatientManagement;
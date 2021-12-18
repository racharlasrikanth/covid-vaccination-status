import React, { useState } from 'react'

const Form = () => {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [vaccinationStatus, setVaccinationStatus] = useState("");
    const [dateOfVaccination, setDateOfVaccination] = useState("");
    const [inState, setInState] = useState("Telangana");
    const [country, setCountry] = useState("India");

    function changeName(e){
        setFullName(e.target.value)
    }

    function changePhoneNumber(e){
        setPhoneNumber(e.target.value)
    }

    function changeVaccinationStatus1(e, status){
        console.log(status);
        if(status == 1){
            setVaccinationStatus(true)
        }
    }
    function changeVaccinationStatus2(e, status){
        console.log(status);
        if(status == 2){
            setVaccinationStatus(false)
        }
    }

    function changeDate(e){
        setDateOfVaccination(e.target.value)
    }

    function changeState(e){
        setInState(e.target.value)
    }

    function changeCountry(e){
        setCountry(e.target.value)
    }

    function onSubmitData(e){
        e.preventDefault();
        const userData = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            vaccinationStatus: vaccinationStatus,
            vaccinationDate: dateOfVaccination,
            state: inState,
            country: country,
            id: new Date().getTime(),
        }

        // set and get in local storage
        var currentData = [];
        var comingData =  JSON.parse(localStorage.getItem('users-list'));
        if(!comingData){
            comingData = [];
        }
        currentData = [...comingData];
        currentData.push(userData);
        localStorage.setItem('users-list', JSON.stringify(currentData));


        // data submitted
        window.location.href = "/success"
    }

    return (
        <div className='form-container section'>
            <div className="title">
                <h2>Covid Vaccination Drive</h2>
            </div>
            <div className="form section-center">
                <div className="form-control">
                    <label htmlFor="fullName">Enter Your Name</label>
                    <input type="text" name="fullName" id="fullName" value={fullName} placeholder="Enter Your Name" required onChange={changeName} />
                </div>
                
                <div className="form-control">
                    <label htmlFor="phoneNumber">Enter Phone Number</label>
                    <input type="number" name="phoneNumber" id="phoneNumber" value={phoneNumber} placeholder='Enter Your Number' required onChange={changePhoneNumber}/>
                </div>
                
                <div className="form-control">
                    <label htmlFor="vaccinationStatus">Vaccination Status</label>
                    <span>
                        <input type="radio" name="vaccinationStatus" id="vaccinationStatus" value="1" onClick={(e) => changeVaccinationStatus1(e, 1)} /> Yes
                        <input type="radio" name="vaccinationStatus" id="vaccinationStatus" value="2" onClick={(e) => changeVaccinationStatus2(e, 2)} /> No
                    </span>
                </div>

                <div className="form-control">
                    <label htmlFor="dateOfVaccination">Date of Vaccination</label>
                    <input type="date" name="dateOfVaccination" id="dateOfVaccination" required value={dateOfVaccination} onChange={changeDate} disabled={!vaccinationStatus}/>
                </div>

                <div className="form-control">
                    <label htmlFor="inState">Select State</label>    
                    <select name="inState" id="inState" value={inState} onChange={changeState}>
                        <option value="Telangana">Telangana</option>
                        <option value="Andrapradesh">Andrapradesh</option>
                        <option value="TamilNadu">TamilNadu</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="country">Select Country</label>    
                    <select name="country" id="country" value={country} onChange={changeCountry}>
                        <option value="India">India</option>
                        <option value="UnitedStates">UnitedStates</option>
                        <option value="Pakistan">Pakistan</option>
                    </select>
                </div>

                <button type="submit" className='btn' onClick={onSubmitData}disabled={!fullName || !phoneNumber || (vaccinationStatus === "")}>Submit</button>
            </div>
        </div>
    )
}

export default Form;

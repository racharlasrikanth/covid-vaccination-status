import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import Plot from 'react-plotly.js';

const PieChartGraph = ({fullData}) => {
    return (
        <Plot
          data={[
            {
            values: fullData.userValues,
            labels: fullData.userLables,
            type: 'pie'
            },
          ]}
          layout={ {width: "100%", height: 440, title: 'Vaccination Status'} }
        />
      );
}

const UserDataList = () => {

    const [userDataList, setUserDataList] = useState(JSON.parse(localStorage.getItem('users-list')));
    const [pieChartData, setPieChartData] = useState({userValues:[30, 70], userLables:["Vaccinated", "Not Vaccinated"]});


    useEffect(() => {
        // debugger
        const newListPercentages = {
            userValues: [],
            userLables: ["Vaccinated", "Not Vaccinated"],
        }

        if(userDataList){
            // getting the values of each user weather he vaccinated or not
            const vaccinationTakenPeopleLength = userDataList.filter((eachPerson)=>{
                return eachPerson.vaccinationStatus;
            }).length;
            const notVaccinatedPeopleLength = userDataList.filter((eachPerson)=>{
                return !eachPerson.vaccinationStatus;
            }).length;

            // converting percentages
            let vaccinatedPercentage = (100 * vaccinationTakenPeopleLength)/userDataList.length;
            let notVaccinatedPercentage = (100 * notVaccinatedPeopleLength)/userDataList.length;

            // adding the percentages in state
            newListPercentages.userValues = [vaccinatedPercentage, notVaccinatedPercentage]
            setPieChartData(newListPercentages);
        }
    }, [userDataList]);



    return (
        <section className='user-data-list-container'>
            <article className="user-data-list">
                <div className="user-data-list-title">
                    <h2>User vaccination status list</h2>
                </div>
                {
                    userDataList <= 0 ?
                    <div  className='nodata-warning-msg'>
                        <h2>no data found</h2>
                    </div>
                    :
                    <table className="main-list">
                        <tbody>
                            {
                                userDataList.map((eachUser, index) => {
                                    return (
                                        index === 0 ? 
                                        <>
                                        <tr index={new Date().getTime()}>
                                            <th key={index}>{"Full Name"}</th>
                                            <th key={index+1}>{"Vaccination Status"}</th>
                                            <th key={index+2}>{"Vaccination Date"}</th>
                                            <th key={index+3}>{"State"}</th>
                                            <th key={index+4}>{"Country"}</th>
                                        </tr>
                                        <tr index={eachUser.id}>
                                            <td key={index}>{eachUser.fullName}</td>
                                            <td key={index+1}>{eachUser.vaccinationStatus ? "true" : "false"}</td>
                                            <td key={index+2}>{eachUser.vaccinationDate}</td>
                                            <td key={index+3}>{eachUser.state}</td>
                                            <td key={index+4}>{eachUser.country}</td>
                                        </tr>
                                        </>
                                        :
                                        <tr index={eachUser.id}>
                                            <td key={index}>{eachUser.fullName}</td>
                                            <td key={index+1}>{eachUser.vaccinationStatus ? "true" : "false"}</td>
                                            <td key={index+2}>{eachUser.vaccinationDate}</td>
                                            <td key={index+3}>{eachUser.state}</td>
                                            <td key={index+4}>{eachUser.country}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </article>

            <article className="user-list-graph">
                {
                    userDataList && <div className="graph-page">
                        <PieChartGraph fullData={pieChartData} />
                    </div>
                }
            </article>
        </section>
    )
}

export default UserDataList;

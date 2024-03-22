import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import Childern from "../Layout/Children"

function ProjectList() {
    const navigate = useNavigate();
    const [AllprojectList, setProjectList] = useState([])

    useEffect(() => {
        // if (localStorage.getItem('token') == null) {
        //     navigate("/");
        // }
        fetchProjectList()
    }, [])

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api',
    });
    const fetchProjectList = () => {
        axiosInstance.get('/insurance/all-data')
            .then(function (response) {
                console.log(response.data.data,"data")
                setProjectList(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const handleDelete = (vehicleNumber) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/insurance/${vehicleNumber}`)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Project deleted successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchProjectList()
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occured!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            }
        })
    }

    const Logout = () => {
        // localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Childern>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Insurance Users</h2>
                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-outline-primary" to="/11">Create New Insurace</Link>
                        <button onClick={() => Logout()} className="btn btn-outline-danger float-end"> Logout </button>
                    </div>
                    <div className="card-body">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Vehicle Type</th>
                                    <th>Variant</th>
                                    <th>Vehicle Type</th>
                                    <th>Insurance timeperiod</th>
                                    <th>Vehicle PurchaseYear</th>
                                    <th>Vehicle Manyr</th>
                                    <th>Premium Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {AllprojectList?.map((project, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{project.vehicleNumber}</td>
                                            <td>{project.VehicleType}</td>
                                            <td>{project.Variant}</td>
                                            <td>{project.insuranceTimePeriod}</td>
                                            <td>{project.vehiclePurchaseYear}</td>
                                            <td>{project.vehicleManufactureYear}</td>
                                            <td>{project.premiumCharges}</td>
                                            
                                            <td>
                                               
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/edit/${project.vehicleNumber}`}>
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(project.vehicleNumber)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Childern>
    );
}
export default ProjectList;




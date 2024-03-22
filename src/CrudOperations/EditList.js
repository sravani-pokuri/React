import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import Children from "../Layout/Children"

function ProjectEdit() {
    const [vehicleNumber, setvehicleNumber] = useState(useParams().vehicleNumber);
    const [VehicleType, setVehicleType] = useState('')
    const [Variant, setVariant] = useState('')
    const [insuranceTimePeriod, setinsuranceTimePeriod] = useState('')
    const [vehiclePurchaseYear, setvehiclePurchaseYear] = useState('')
    const [vehicleManufactureYear, setvehicleManufactureYear] = useState('')
    const [premiumCharges, setpremiumCharges] = useState('')


    const [isSaving, setIsSaving] = useState(false)
    const navigate = useNavigate();

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api/insurance',
    });

    useEffect(() => {
        // if (localStorage.getItem('token') == null) {
        //     navigate("/");
        // }

        axiosInstance.get(`/${vehicleNumber}`)
            .then(function (response) {
                let project = response.data.data
                setvehicleNumber(project.vehicleNumber);
                setVehicleType(project.VehicleType);
                setVariant(project.Variant);
                setinsuranceTimePeriod(project.insuranceTimePeriod);
                setvehiclePurchaseYear(project.vehiclePurchaseYear);
                setvehicleManufactureYear(project.vehicleManufactureYear);
                setpremiumCharges(project.premiumCharges);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred!',
                    showConfirmButton: false,
                    timer: 1500
                })
            })

    }, [])


    const handleSave = () => {
        axiosInstance.put(`/${vehicleNumber}`, {
            VehicleType: VehicleType,
            Variant: Variant,
            insuranceTimePeriod: insuranceTimePeriod,
            vehiclePurchaseYear: vehiclePurchaseYear,
            vehicleManufactureYear: vehicleManufactureYear,
            premiumCharges: premiumCharges,
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Project updated successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false);
                navigate("/ShowList");

            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occurred!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
            });
    }


    return (
        <Children>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Edit Insurance Data</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/list">View All Data
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="vehicleNumber">Vehicle Number</label>
                                <input
                                    onChange={(event) => { setvehicleNumber(event.target.value) }}
                                    value={vehicleNumber}
                                    type="text"
                                    className="form-control"
                                    id="vehicleNumber"
                                    name="vehicleNumber" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="VehicleType">Vehicle Type</label>
                                <input
                                    onChange={(event) => { setVehicleType(event.target.value) }}
                                    value={VehicleType}
                                    type="text"
                                    className="form-control"
                                    id="VehicleType"
                                    name="VehicleType" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Variant">Variant</label>
                                <input
                                    onChange={(event) => { setVariant(event.target.value) }}
                                    value={Variant}
                                    type="number"
                                    className="form-control"
                                    id="Variant"
                                    name="Variant" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="insuranceTimePeriod">insurance TimePeriod</label>
                                <input
                                    onChange={(event) => { setinsuranceTimePeriod(event.target.value) }}
                                    value={insuranceTimePeriod}
                                    type="number"
                                    className="form-control"
                                    id="insuranceTimePeriod"
                                    name="insuranceTimePeriod" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehiclePurchaseYear">vehicle PurchaseYear</label>
                                <input
                                    onChange={(event) => { setvehiclePurchaseYear(event.target.value) }}
                                    value={vehiclePurchaseYear}
                                    type="number"
                                    className="form-control"
                                    id="vehiclePurchaseYear"
                                    name="vehiclePurchaseYear" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="vehicleManufactureYear">insurance TimePeriod</label>
                                <input
                                    onChange={(event) => { setvehicleManufactureYear(event.target.value) }}
                                    value={vehicleManufactureYear}
                                    type="number"
                                    className="form-control"
                                    id="vehicleManufactureYear"
                                    name="vehicleManufactureYear" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="premiumCharges">premium Charges</label>
                                <input
                                    onChange={(event) => { setpremiumCharges(event.target.value) }}
                                    value={premiumCharges}
                                    type="number"
                                    className="form-control"
                                    id="premiumCharges"
                                    name="premiumCharges" />
                            </div>
                            <button
                                disabled={isSaving}
                                onClick={handleSave}
                                type="button"
                                className="btn btn-outline-success mt-3">
                                Update Data
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Children>
    );
}

export default ProjectEdit;

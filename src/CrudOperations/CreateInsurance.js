import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import Childern from "../Layout/Children"

function ProjecCreate() {
    const [vehicleNumber, setvehicleNumber] = useState('');
    const [VehicleType, setVehicleType] = useState('')
    const [Variant, setVariant] = useState('')
    const [insuranceTimePeriod, setinsuranceTimePeriod] = useState('')
    const [vehiclePurchaseYear, setvehiclePurchaseYear] = useState('')
    const [vehicleManufactureYear, setvehicleManufactureYear] = useState('')
    const [premiumCharges, setpremiumCharges] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        // if (localStorage.getItem('token') == null) {
        //     navigate("/");
        // }
    }, [])

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api/insurance',
    });

    const handleSave = () => {
        setIsSaving(true);
        const payload = {
            vehicleNumber: vehicleNumber,
            VehicleType: VehicleType,
            Variant: Variant,
            insuranceTimePeriod: insuranceTimePeriod,
            vehiclePurchaseYear: vehiclePurchaseYear,
            vehicleManufactureYear: vehicleManufactureYear,
            premiumCharges: premiumCharges,
        };

        axiosInstance.post('/addInsurance', payload)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Project saved successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/ShowList");
                setIsSaving(false);
                setvehicleNumber('')
                setVehicleType('')
                setVariant('')
                setinsuranceTimePeriod('')
                setvehiclePurchaseYear('')
                setvehicleManufactureYear('')
                setpremiumCharges('')
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
        <Childern>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Create Vehicle Insurance</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/ShowList">View All Records
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="vehicleNumber">Vehicle Number</label>
                                <input
                                    onChange={(event) => { setVehicleType(event.target.value) }}
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
                                    name="Variant"/>
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
                                <label htmlFor="vehicleManufactureYear">vehicle ManufactureYear</label>
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
                            <div className="text-right">
                                <button
                                    disabled={isSaving}
                                    onClick={handleSave}
                                    type="button"
                                    className="btn btn-outline-primary mt-3">
                                    Save Record
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Childern>
    );
}

export default ProjecCreate;

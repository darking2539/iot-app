import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { APISubmitDevices, APIGetDevices } from '../../api/devices';
import Swal from 'sweetalert2'

const AddDevicePage: React.FC = () => {
    const [id, setId] = useState(null);
    const [deviceId, setDeviceId] = useState('');
    const [deviceName, setDeviceName] = useState('');
    const [deviceProtocol, setDeviceProtocol] = useState('');
    const [searchParams, _] = useSearchParams();
    const history = useNavigate();

    const handleDeviceIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeviceId(event.target.value);
    };

    const handleDeviceNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeviceName(event.target.value);
    };

    const handleDeviceProtocolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDeviceProtocol(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        var jsonParam: any = { id: id, deviceId: deviceId, deviceName: deviceName, protocol: deviceProtocol };
        
        APISubmitDevices(jsonParam).then((resp:any)=> {
            Swal.fire({
                icon: 'success',
                title: resp.data.status,
                text: resp.data.message
              }).then(()=> {
                history("/devices")
              })
        }).catch((err: any) => {
            Swal.fire({
                icon: 'error',
                title: "error",
                text: err.response.data.message
              })
        })
    };

    useEffect(() => {
        
        var idParam = searchParams.get("id");
        if (idParam) {
            APIGetDevices(idParam).then((resp: any)=> {
                setId(resp.data.data._id)
                setDeviceId(resp.data.data.deviceId)
                setDeviceName(resp.data.data.deviceName)
                setDeviceProtocol(resp.data.data.protocol)
            })
        }

    }, [])
    

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto">
                <header className="bg-white shadow">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-2xl font-bold text-gray-800">Add Device</h1>
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deviceId">
                            Device ID
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="deviceId"
                            type="text"
                            placeholder="Enter device ID"
                            value={deviceId}
                            onChange={handleDeviceIdChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deviceName">
                            Device Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="deviceName"
                            type="text"
                            placeholder="Enter device name"
                            value={deviceName}
                            onChange={handleDeviceNameChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deviceProtocol">
                            Protocol
                        </label>
                        <select
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="deviceProtocol"
                            value={deviceProtocol}
                            onChange={handleDeviceProtocolChange}
                        >
                            <option value="">Select protocol</option>
                            <option value="HTTP">HTTP</option>
                            <option value="MQTT">MQTT</option>
                            <option value="CoAP">CoAP</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            {id? "Edit Device":"Add Device"}
                        </button>
                        <button
                            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                            type='button'
                            onClick={() => { history("/devices") }}
                        >
                            Back
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDevicePage;
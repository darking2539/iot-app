import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { APIListDevices, APIDeleteDevices } from '../../api/devices';
import Swal from 'sweetalert2'

const TableListPage: React.FC = () => {

    const history = useNavigate();
    const [listDevices, setListDevices] = useState<any>([]);

    const handleEdit = (id: string) => {
        // Logic for handling edit operation
        history(`/devices/add?id=${id}`)
    };

    const handleDelete = (id: string) => {
        // Logic for handling delete operation
        APIDeleteDevices(id).then((resp: any)=> {
            Swal.fire({
                icon: 'success',
                title: resp.data.status,
                text: resp.data.message
              }).then(()=> {
                CallAPIListDevices();
              })
        })
    };

    const CallAPIListDevices = () => {
        APIListDevices().then((resp: any)=> {
            setListDevices(resp.data.data);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    useEffect(() => {
        CallAPIListDevices();
    }, [])
    

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto">
                <header className="bg-white shadow">
                    <div className="flex justify-between container mx-auto px-4 py-6">
                        <h1 className="text-2xl font-bold text-gray-800">Devices</h1>
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                            onClick={()=> {history("/devices/add");}}
                        >
                            Add device
                        </button>
                    </div>
                </header>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">No</th>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">deviceId</th>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">deviceName</th>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">Protocol</th>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">UpdatedDate</th>
                            <th className="py-3 px-4 bg-gray-200 font-bold text-sm text-gray-700 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listDevices.map((item: any, index: any) => (
                            <tr key={item._id}>
                                <td className="py-3 px-4 border-b text-center">{index+1}</td>
                                <td className="py-3 px-4 border-b text-center">{item.deviceId}</td>
                                <td className="py-3 px-4 border-b text-center">{item.deviceName}</td>
                                <td className="py-3 px-4 border-b text-center">{item.protocol}</td>
                                <td className="py-3 px-4 border-b text-center">{item?.updatedDate.substring(0, 10)}</td>
                                <td className="py-3 px-4 border-b text-center">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                                        onClick={() => handleEdit(item._id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableListPage;

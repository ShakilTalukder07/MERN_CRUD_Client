import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

const Items = () => {

    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: () => fetch('http://localhost:5000/items')
            .then(res => res.json())
    })

    // console.log(items);


    const handleDeleteItem = (item) => {
        console.log(item);
        fetch(`http://localhost:5000/items/${item._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Product deleted successfully')
                }
            })
    }

    return (

        <div>
            <h3 className='font-bold text-3xl my-4'>List</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.length && items.map((item) =>  <tr key={item._id}>
                                <th>{item.userName}</th>
                                <td>{item.number}</td>
                                <td>{item.userEmail}</td>
                                <td>
                                    <button className="btn btn-outline btn-success">Edit</button>

                                </td>
                                <td>
                                    <button className="btn btn-outline btn-error"
                                        onClick={() => handleDeleteItem(item)}
                                    >Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;
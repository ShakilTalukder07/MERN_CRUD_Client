import React from 'react';
import { toast } from 'react-hot-toast';


const Form = () => {

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const items = {
            userName: name,
            userEmail: email,
            number,
        }
        console.log(items);

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.acknowledged)
                if (data.acknowledged) {
                    toast.success("Items Added")
                }
            })

    }

    return (
        <div className='my-10'>
            <h3 className='font-bold text-3xl my-4'>WEB FORM</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 place-items-center'>
                
                <input type="text" name='name' placeholder="User Name" className="input input-bordered w-[300px] text-lg font-bold" />
                
                <input type="email" name='email' placeholder="User Email" className="input input-bordered w-[300px] text-lg font-bold" />
                
                <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-[300px]" />
                <input className='btn btn-ghost bg-sky-400 w-[300px] mx-w-xs' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;
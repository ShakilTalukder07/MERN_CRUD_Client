import React from 'react';

const Modal = () => {


    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        
                        <input  type="text" name='name' placeholder="User Name" className="input input-bordered w-[300px] text-lg font-bold my-2" />

                        <input  type="email" name='email' placeholder="User Email" className="input input-bordered w-[300px] text-lg font-bold mb-2" />

                        <input type="text" name='number' placeholder="Phone Number" className="input input-bordered w-[300px]" />

                        <div className="modal-action">
                            <button type='submit' className="w-full btn my-2">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Modal;
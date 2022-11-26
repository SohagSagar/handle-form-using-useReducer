import React from 'react';
import './Form.css';

const Form = () => {



    return (

        <div className='flex justify-center mt-10'>
            <div className="card  bg-base-100 shadow-xl  ">
                <div className="card-body ">

                    <div className='grid lg:gap-8 sm: gap-4 lg:grid-cols-2 sm:grid-cols-1'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> First name?</span>
                            </label>
                            <input type="text" placeholder="First name" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Last name?</span>
                            </label>
                            <input type="text" placeholder="Last name" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                        </div>

                    </div>

                    <div className='grid lg:gap-8 sm: gap-4 lg:grid-cols-2 sm:grid-cols-1'>

                        <div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Email</span>
                                </label>
                                <input type="text" placeholder="Email" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                            </div>

                            <div className=''>
                                <label className="label">
                                    <span className="label-text"> Education</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs h-10 !outline-none">
                                    <option disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text"> Feedback</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
                            </div>
                        </div>


                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text"> Gender</span>
                                </label>

                                <div className='flex gap-4'>
                                    <div className='gap-2 flex items-center'>
                                        <input style={{ width: 18, height: 18 }} type="radio" name="gender" className="radio" /> Male
                                    </div>

                                    <div className='gap-2 flex items-center'>
                                        <input style={{ width: 18, height: 18 }} type="radio" name="gender" className="radio" /> Female
                                    </div>

                                    <div className='gap-2 flex items-center'>
                                        <input style={{ width: 18, height: 18 }} type="radio" name="gender" className="radio" /> Others
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label className="label mt-4">
                                    <span className="label-text"> Number of PC</span>
                                </label>

                                <div className='flex gap-2 items-center justify-start '>
                                    <button className="btn btn-square btn-primary rounded">-</button>
                                    <div className="h-12 w-full border rounded text-center p-2">0</div>
                                    <button className="btn btn-square btn-primary rounded  ">+</button>

                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="flex lg: justify-between sm: flex-col lg:flex-row gap-5">
                        <div className='gap-2 flex items-center mt-2'>
                            <input style={{ width: 18, height: 18 }} type="checkbox" className="checkbox checkbox-primary" /> Accept terms and conditions
                        </div>
                        <button className="btn btn-primary normal-case hover:text-white w-36">Submit</button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Form;
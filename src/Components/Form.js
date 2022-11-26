import React, { useReducer } from 'react';
import './Form.css';

const Form = () => {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        education: "",
        feedBack: "",
        gender: "",
        quantity: 0,
        agree: false

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                }
            case "TOGGLE":
                return {
                    ...state,
                    agree: !state.agree
                }
            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }

            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (

        <div className='flex justify-center mt-10'>
            <div className="card  bg-base-100 shadow-xl  ">

                <div className="card-body ">
                    <form onSubmit={handleSubmit}>
                        <div className='grid lg:gap-8 sm: gap-4 lg:grid-cols-2 sm:grid-cols-1'>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> First name?</span>
                                </label>
                                <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} type="text" name='firstName' placeholder="First name" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Last name?</span>
                                </label>
                                <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} type="text" name='lastName' placeholder="Last name" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                            </div>

                        </div>

                        <div className='grid lg:gap-8 sm: gap-4 lg:grid-cols-2 sm:grid-cols-1'>

                            <div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> Email</span>
                                    </label>
                                    <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} type="text" name='email' placeholder="Email" className="input input-bordered h-10 w-full max-w-xs !outline-none" />
                                </div>

                                <div className=''>
                                    <label className="label">
                                        <span className="label-text"> Education</span>
                                    </label>
                                    <select onChange={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} name='education' className="select select-bordered w-full max-w-xs h-10 !outline-none">
                                        <option disabled selected>Who shot first?</option>
                                        <option value={'Han Solo'}>Han Solo</option>
                                        <option value={'Greedo'}>Greedo</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text"> Feedback</span>
                                    </label>
                                    <textarea onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} name='feedBack' className="textarea textarea-bordered w-full max-w-xs" placeholder="Bio"></textarea>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <label className="label">
                                        <span className="label-text"> Gender</span>
                                    </label>

                                    <div className='flex gap-4'>
                                        <div className='gap-2 flex items-center'>
                                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} style={{ width: 18, height: 18 }} type="radio" name="gender" value={'male'} className="radio" /> Male
                                        </div>

                                        <div className='gap-2 flex items-center'>
                                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} style={{ width: 18, height: 18 }} type="radio" name="gender" value={'female'} className="radio" /> Female
                                        </div>

                                        <div className='gap-2 flex items-center'>
                                            <input onBlur={(e) => dispatch({ type: "INPUT", payload: { value: e.target.value, name: e.target.name } })} style={{ width: 18, height: 18 }} type="radio" name="gender" value={'others'} className="radio" /> Others
                                        </div>
                                    </div>
                                </div>


                                <div>
                                    <label className="label mt-4">
                                        <span className="label-text"> Number of PC</span>
                                    </label>

                                    <div className='flex gap-2 items-center justify-start '>
                                        <button onClick={() => dispatch({ type: "DECREMENT" })} className="btn btn-square btn-primary rounded">-</button>
                                        <div className="h-12 w-full border rounded text-center p-2">{state?.quantity}</div>
                                        <button onClick={() => dispatch({ type: "INCREMENT" })} className="btn btn-square btn-primary rounded  ">+</button>

                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="flex lg: justify-between sm: flex-col lg:flex-row gap-5">
                            <div className='gap-2 flex items-center mt-2'>
                                <input onClick={() => dispatch({ type: 'TOGGLE' })} name='agree' style={{ width: 18, height: 18 }} type="checkbox" className="checkbox checkbox-primary" /> Accept terms and conditions
                            </div>
                            <button type='submit' disabled={!state.agree} className="btn btn-primary normal-case hover:text-white w-36">Submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    );
};

export default Form;
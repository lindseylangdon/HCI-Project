import React, { useState } from 'react';
import axios from 'axios';

function Error() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if any input is blank
        const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

        if (!isFormValid) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        console.log('State values before submission:', formData);
        
        try {
            const res = await axios.post('http://localhost:5000/submit-report', formData);

            if (res.status === 200) {
                if (res.data === 'Error') {
                    console.error('Server returned an error:', res.data);
                    alert('Failed to submit report. Please try again later.');
                } else {
                    console.log('Server response:', res.data);
                    alert('Submitted report successfully.');
                }

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                });
                setIsValid(true);
            } else {
                console.error('Unexpected response status:', res.status);
                alert('Unexpected error. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting report:', error.message);
            alert('Failed to submit report. Please try again later.');
        }
    };

    return (
        <div className="bg-white container mx-auto rounded-xl sm:mb-6">
            <section className="">
                <div className="lg:grid lg:grid-cols-12">
                    <main className="flex items-center justify-center px-4 py-8 sm:px-8 lg:col-span-7 lg:px-8 lg:py-12 xl:col-span-6">
                        <div className="max-w-xl lg:max-w-3xl w-full">
                            <h1 className="text-2xl font-bold text-gray-900 text-3xl">Submit a Bug Report</h1>

                            <p className="mt-4 leading-relaxed text-gray-500">Please enter the following information.</p>

                            <form
                                action="#"
                                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                                onSubmit={handleSubmit}
                            >
                                <div>
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="firstName"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full rounded-md border focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="LastName"
                                        name="lastName"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full rounded-md border focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        placeholder="johndoe@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full rounded-md border focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
                                        Describe your issue
                                    </label>
                                    <textarea
                                        id="Message"
                                        name="message"
                                        placeholder="Ex: Translation was wrong"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full rounded-md border focus:ring focus:border-blue-300"
                                    />
                                </div>

                                <div className="col-span-2 flex items-center justify-center">
                                    <button
                                        type="submit"
                                        className="inline-block shrink-0 rounded-md bg-dark-mustard px-12 py-3 text-sm font-medium text-white transition hover:bg-mustard-yellow hover:text-gray focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
}

export default Error;
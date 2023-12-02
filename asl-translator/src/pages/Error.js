import React, { useState } from 'react';
import Input from '../components/Input';

function Error() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = () => {
    alert('Submitted report successfully.');

    // Clear input values after submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
    setIsValid(true);
  };

  return (
    <div className="bg-white container mx-auto rounded-xl sm:mb-6">
      <section className="">
        <div className="lg:grid lg:grid-cols-12">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <h1 className="text-2xl font-bold text-gray-900 text-3xl">Submit a Bug Report</h1>

              <p className="mt-4 leading-relaxed text-gray-500">Please enter the following information.</p>

              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    placeholder="johndoe@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-6">
                  <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
                    Describe your issue
                  </label>
                  <Input
                    placeholder="Ex: Translation was wrong"
                    isTextarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
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
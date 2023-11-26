import React from 'react';
import Input from '../components/Input';

function Error() {
  return (
    <div className="bg-white container mx-auto rounded-xl sm:mb-6">
        <section class="">
        <div class="lg:grid lg:grid-cols-12">
            <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
            <div class="max-w-xl lg:max-w-3xl">
                <h1
                class="text-2xl font-bold text-gray-900 text-3xl"
                >
                Submit a Bug Report
                </h1>

                <p class="mt-4 leading-relaxed text-gray-500">
                Please enter the following information.
                </p>

                <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label
                    for="FirstName"
                    class="block text-sm font-medium text-gray-700"
                    >
                    First Name
                    </label>

                    <Input placeholder="John"/>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <label
                    for="LastName"
                    class="block text-sm font-medium text-gray-700"
                    >
                    Last Name
                    </label>

                    <Input placeholder="Doe"/>
                </div>

                <div class="col-span-6">
                    <label for="Email" class="block text-sm font-medium text-gray-700">
                    Email
                    </label>

                    <Input placeholder="johndoe@email.com"/>
                </div>

                <div class="col-span-6">
                    <label for="Message" class="block text-sm font-medium text-gray-700">
                    Describe your issue
                    </label>

                    <Input placeholder="Ex: Translation was wrong" isTextarea/>
                </div>

                <div class="col-span-6">
                    <label for="MarketingAccept" class="flex gap-4">
                    <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span class="text-sm text-gray-700">
                        I am not a robot
                    </span>
                    </label>
                </div>

                <div class="col-span-6">
                    <p class="text-sm text-gray-500">
                    By creating an account, you agree to our terms and conditions and privacy policy.
                    </p>
                </div>

                <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                    class="inline-block shrink-0 rounded-md bg-dark-mustard px-12 py-3 text-sm font-medium text-white transition hover:bg-mustard-yellow hover:text-gray focus:outline-none focus:ring active:text-blue-500"
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
  )
}

export default Error;
import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../Utils/constant";
function AddUser() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/addUser`, formData);
      console.log('User is recorded:', response.data);
      setFormData({
        firstName: '',
        lastName: '',
      });
    } catch (error) {
      console.error('Error adding user:', error.response.data);
    }
  };

  return (
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
       <form onSubmit={handleSubmit} class="space-y-8">
            <div>
              <label for="firstname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Firstname</label>
              <input type="text" name="firstName" id="firstname" value={formData.firstName} onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Firstname" required autoComplete="off" />
            </div>
            <div>
              <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lastname</label>
              <input type="text" name="lastName" id="lastname" value={formData.lastName} onChange={handleChange} class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Lastname" required autoComplete="off" />
            </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  );
}

export default AddUser;
<template>
  <div
      class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white"
    >
      <!-- Header-->
      <div
        class="fixed w-full flex items-center justify-between h-14 text-white z-10"
      >
        <div
          class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-yellow-400 border-none"
        >
          <img
            class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          />
          <span class="hidden md:block">ADMIN</span>
        </div>
      </div>
      <!--Sidebar-->
      <div
        class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-white transition-all duration-300 border-none z-10 sidebar"
      >
        <div
          class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
        >
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Main
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Dashboard</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </span>
                <span @click="gtResidents"  class="ml-2 text-sm tracking-wide truncate"
                  >Residents</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    ></path>
                  </svg>
                </span>
                <span @click="gtAppointment" class="ml-2 text-sm tracking-wide truncate"
                  >Appointments</span
                >
                <span
                  class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full"
                  >New</span
                >
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                </span>
                <span @click="gtRevenue" class="ml-2 text-sm tracking-wide truncate"
                  >Revenue Records</span
                >
                <span
                  class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"
                  >1.2k</span
                >
              </a>
            </li>
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Settings
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Settings</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>

    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
      >
        <div class="pl-36 w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
           
            <h2 class="text-left ml-1 mb-4 text-xl font-bold text-gray-700">
             Barangay Revenues
             </h2>
             
            <div class="flex">
            <p class="pl-4 font-medium text-left">Date:</p>
            <Datepicker class="w-1/4 ml-3 mb-4" v-model="date" :enableTimePicker="false"  range />
             <button 
              type="button"
              class=" ml-3 mb-4 focus:outline-none text-white text-sm py-2.5 px-5 border-b-4 border-amber-600 rounded-md bg-amber-500 hover:bg-yellow-400 font-semibold"
            >
              Print
            </button>
            </div>
           

           
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Date</th>
                  <th class="py-3 px-6 text-left">Recipient</th>
                  <th class="py-3 px-6 text-left">Details</th>
                  <th class="py-3 px-6 text-center">Amount</th>
                  <th class="py-3 px-6 text-center">Username</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>07-04-2022</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Cherry Mae C. Cabanes</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Barangay Clearance w/ Cedula</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>P 130.00</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>admin</span>
                    </div>
                  </td> 
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>02-03-2022</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Dennis C. Lugas</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Barangay Clearance</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>P 70.00</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>admin</span>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>03-04-2022</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Athena Maganda</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Certificate of Residency</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>P 70.00</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>clerk</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <ul class="flex pl-0 list-none rounded my-2 mr-1.5 justify-end">
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"
                >
                  <a class="page-link" href="#">Previous</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">1</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">2</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"
                >
                  <a class="page-link" href="#">3</a>
                </li>
                <li
                  class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"
                >
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </div>

            <!--Modal-->

          </div>
        </div>
      </div>
    </div>
     
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
 components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
}
</script>

<style>

</style>
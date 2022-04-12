<template>
  <!-- component -->
  <div
    class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white"
  >
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
              <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
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
              <span
                @click="gtResidents"
                class="ml-2 text-sm tracking-wide truncate"
                >Residents
              </span>
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
              <span class="ml-2 text-sm tracking-wide truncate"
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
              <span class="ml-2 text-sm tracking-wide truncate"
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
              <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
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
              <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- component -->
    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
      >
        <div class="pl-36 w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
            <h2 class="text-left ml-1 mb-4 text-xl font-bold text-gray-700">
              List
            </h2>
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">No.</th>
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-left">Appointment Date</th>
                  <th class="py-3 px-6 text-center">Purpose</th>
                  <th class="py-3 px-6 text-center">Type</th>
                  <th class="py-3 px-6 text-center">Status</th>
                  <th class="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>1</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Cherry Mae C. Cabanes</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center justify-center">
                      <span>07-04-2022</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Work</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Barangay Clearance</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
                      >Approved</span
                    >
                  </td>

                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>2</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Dennis C. Lugas</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center justify-center">
                      <span>22-04-2022</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Multiple purpose</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Barangay Clearance</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                      >Released</span
                    >
                  </td>

                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>3</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Athena Maganda</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center justify-center">
                      <span>09-04-2022</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>School</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Certificate of Residency</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                      >Disapproved</span
                    >
                  </td>

                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>4</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Apolinario Mabini</span>
                    </div>
                  </td>

                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center justify-center">
                      <span>09-04-2022</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>School</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      <span>Certificate of Residency</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
                      >Ready to Pickup</span
                    >
                  </td>

                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div @click="viewAppointment"
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div
                        @click="editAppointment"
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>

                      <div
                        @click="deleteAppointment"
                        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
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

            <!--Edit Modal-->
            <div
              v-if="editModal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Edit Appointment
                    </p>
                    <div
                      class="modal-close cursor-pointer z-50"
                      onclick="modalClose('main-modal')"
                    >
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="">
                        <div class="">
                          <label
                            for="voter_status"
                            class="text-md text-gray-600"
                            >Request Status</label
                          >
                        </div>
                        <div class="">
                          <select
                            class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          >
                            <option value="">Approved</option>
                            <option value="">Disapproved</option>
                            <option value="">Ready to Pickup</option>
                            <option value="">Released</option>
                            <option value="">Cancel</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!---Delete Modal-->
            <div
              v-if="deleteModal"
              class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
            >
              <div class="bg-white px-16 py-14 rounded-md text-center">
                <h1 class="text-xl mb-4 font-bold text-slate-500">
                  Do you want to delete?
                </h1>
                <button
                  class="bg-indigo-500 px-4 py-2 rounded-md text-md text-white"
                >
                  Cancel
                </button>
                <button
                  class="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
            <!--View--->
            <div
              v-if="viewModal"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">
                  <!--Title-->
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                     View Appointment
                    </p>
                    <div
                      class="modal-close cursor-pointer z-50"
                      onclick="modalClose('main-modal')"
                    >
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <!--Body-->
                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <p>Name: Trexcy Fe M. Torrefiel</p>
                      <p>Purok: Purok 1 </p>
                      <p>Appointment Date: 12-04-2022 10:30 a.m.</p>
                      <p>Civil Status: Single </p>
                      <p>Amount: P 130.00</p>
                    </form>
                  </div>
                  <!--Footer-->
                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                    >
                      Verify
                    </button>
                    <button
                      class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                    >
                      Generate Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editModal: false,
      deleteModal: false,
      viewModal: false,
    };
  },
  methods: {
    editAppointment() {
      this.editModal = true;
    },
    deleteAppointment() {
      this.deleteModal = true;
    },
    viewAppointment(){
      this.viewModal = true;
    }
  },
};
</script>

<style></style>

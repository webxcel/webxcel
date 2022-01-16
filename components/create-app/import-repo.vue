<template>
  <div class="md:max-w-5xl">
    <div class="pb-4 pl-3 text-2xl font-bold border-b-2">
      Import Git Repository
    </div>
    <div
      class="flex pt-3 w-full flex-col md:flex-row md:space-x-4 items-center"
    >
      <div class="flex-1">
        <div class="dropdown">
          <div tabindex="0" class="m-1 btn btn-block">Dropdown</div>
          <ul
            tabindex="0"
            class="p-2 shadow menu ml-1 dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-none">
        <div class="form-control">
          <div class="relative">
            <input
              type="text"
              placeholder="Search repo"
              class="w-full pr-16 input input-primary input-bordered"
            />
            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            >
              <mdi-magnify />
            </button>
          </div>
        </div>
      </div>
    </div>
    <ul class="menu p-4 mt-3 shadow-lg bg-base-100 rounded-box">
      <li class="menu-title">
        <span> Menu Title </span>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            ></path>
          </svg>
          Item with icon
        </a>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
          Item with icon
        </a>
      </li>
      <li>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 mr-2 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            ></path>
          </svg>
          Item with icon
        </a>
      </li>
    </ul>
  </div>
</template>

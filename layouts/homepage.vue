<template>
  <div>
    <div
      id="nav"
      v-bind:class="{
        'border-transparent bg-transparent text-primary-content fixed': isHomepage,
        '!border-base-200 !bg-base-100 !text-base-content': !isHomepage || toggleNavClass(),
        '!sticky': !isHomepage,
      }"
      class="inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out border-b"
    >
      <div class="mx-auto space-x-1 navbar max-w-none">
        <div
          class="flex items-center flex-1"
          v-bind:class="{
            'invisible': !toggleNavClass() && isHomepage,
            'lg:invisible': !isHomepage,
          }"
        >
          <div class="flex-1 lg:pl-16 mx-2">
            <div class="flex space-x-1">
              <div class="lg:text-3xl text-lg font-bold">Quizpen</div>
              <div class="badge badge-sm badge-primary font-bold">Beta</div>
            </div>
          </div>
        </div>

        <div class="flex-none lg:pr-10">
          <div class="flex space-x-1 lg:mr-2">
            <div class="font-bold self-center">Theme</div>
            <div class>
              <div data-tip="Change theme" class="tooltip tooltip-bottom">
                <mobile-theme-changer />
              </div>
            </div>
          </div>

          <div class="md:flex hidden flex-row items-center justify-between space-x-3">
            <a href="/signup" class="text-sm btn btn-sm btn-primary">Sign up</a>
            <a href="login" class="text-sm btn btn-sm">Login</a>
          </div>

          <div class="dropdown dropdown-end lg:dropdown-right lg:hidden">
            <button tabindex="0" class="btn btn-square self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabindex="0"
              class="p-2 shadow menu dropdown-content mr-2 bg-base-200 text-base-content rounded-box mt-3 w-52"
            >
              <li class="my-1">
                <a href="/signup" class="text-xs btn btn-sm btn-primary">Sign up</a>
              </li>
              <li class="my-1">
                <a href="login" class="text-xs btn btn-sm">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="hero bg-gradient-to-br from-primary to-secondary text-primary-content pt-20">
      <div class="flex-col justify-center hero-content w-screen lg:p-10 p-1 lg:flex-row">
        <div class="text-center lg:text-left lg:flex-1">
          <h1 class="mb-5 lg:text-7xl lg:pr-7 text-4xl font-bold">Create a quiz in minutes</h1>
          <p class="mb-5 font-thin text-lg lg:pl-2">Quizpen makes it easy to build beautiful quizzes</p>
          <div class="flex space-x-2 pt-5 justify-center lg:justify-start">
            <a href="login" class="btn btn-lg shadow-lg btn-primary">Get started</a>
            <a href="login" class="btn btn-lg">Try demo</a>
          </div>
        </div>
        <!-- <homepage-quiz /> -->
      </div>
    </div>
    <div></div>

    <footer class="p-10 footer bg-base-200 text-base-content">
      <div class="flex flex-row space-x-1">
        <img
          alt="Oladokun joshua"
          src="https://avatars.githubusercontent.com/u/44656210?v=4"
          height="50px"
          width="50px"
        />
        <div class="flex space-x-1">
          <div class="text-4xl font-bold">Quizpen</div>
          <div class="badge badge-sm badge-primary font-bold">Beta</div>
        </div>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <div class="relative">
            <input type="text" placeholder="your email" class="w-full pr-16 input input-bordered" />
            <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
    <footer class="justify-center z-0 border-t footer bg-base-200 text-base-content">
      <div class="text-center p-5">
        <div class="max-w-md flex lg:flex-row lg:space-x-3 lg:space-y-0 flex-col">
          <!-- <div class="avatar justify-center z-0">
            <div
              class="mb-8 z-0 w-18 h-18 mask mask-squircle ring ring-primary ring-offset-base-content ring-offset-2"
            >
              <img alt="Oladokun joshua" src="https://avatars.githubusercontent.com/u/44656210?v=4" />
            </div>
          </div>-->
          <a
            href="https://www.linkedin.com/in/oladokun-joshua-9901001ab/"
            rel="noopener"
            target="_blank"
            class="flex flex-col lg:items-start space-y-1 lg:pt-5 link"
          >
            <div class="text-xs text-opacity-50 text-base-content">Designed and developed by</div>
            <div class="font-bold">Oladokun joshua</div>
          </a>
        </div>
      </div>
    </footer>
    <slot />
  </div>
</template> 
<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { usePageContext } from '../renderer/usePageContext'

export default defineComponent({
  data() {
    return {
      scrolled: false
    }
  },
  setup(props) {
    const pageContext = usePageContext()
    return { pageContext }
  },
  methods: {
    toggleNavClass() {
      if (this.scrolled == false) {
        return false
      } else {
        return true
      }
    },
  },
  components: {
    // homepageQuiz: defineComponent(() => import('~/components/homepage-quiz.vue'))
  },
  mounted() {
    window.document.onscroll = () => {
      let navBar = document.getElementById('nav');
      if (navBar == null) {
        return
      }
      if (window.scrollY > navBar.offsetTop) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  computed: {
    isHomepage() {
      // return this.$route.path === '/'
      console.log('path', this.pageContext.urlPathname)
      return this.pageContext.urlPathname == '/'
    },
  },
})
</script>
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import ChakraUIVuePlugin, { chakra } from '@chakra-ui/vue-next'
import { domElements } from '@chakra-ui/vue-system'
import {
  feBook,
  feMenu,
  feMessageCircle,
  fePackage,
  feSearch,
  feStar,
  feTwitter,
  feCompass,
  feExternalLink,
} from 'feather-icons-paths'
import { hydrate } from '@emotion/css'
import routes from 'pages-generated'
import 'vue-prism-editor/dist/prismeditor.min.css'

import './styles/main.css'
import customTheme from './assets/custom-theme'

export const createApp = ViteSSG(App, { routes }, ({ app, isClient }) => {
  if (isClient) {
    // @ts-expect-error Need to add $emotionSSRIds to global namespace
    const ssrIds = window?.$emotionSSRIds || []
    hydrate(ssrIds)
  }

  app.use(ChakraUIVuePlugin, {
    extendTheme: customTheme,
    icons: {
      library: {
        feBook,
        feMenu,
        feMessageCircle,
        fePackage,
        feSearch,
        feStar,
        feTwitter,
        feCompass,
        feExternalLink,
      },
      extend: {
        // https://icones.js.org/collection/simple-icons
        discord: {
          path:
            '<path fill="currentColor" d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" fillRule="nonzero" />',
          viewBox: '0 0 146 146',
        },
        github: {
          path: `<path fill="currentColor" d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />`,
          viewBox: '0 0 20 20',
        },
        youtube: {
          path: `<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"></path>`,
          viewbox: '0 0 24 24',
        },
        // fa
        heart: {
          path:
            '<path d="M896 1536q-26 0-44-18L228 916q-10-8-27.5-26T145 824.5T77 727T23.5 606T0 468q0-220 127-344T478 0q62 0 126.5 21.5t120 58T820 148t76 68q36-36 76-68t95.5-68.5t120-58T1314 0q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill="currentColor"></path>',
          viewBox: '0 0 1792 1536',
        },
        moon: {
          path: `<path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792c7.068-8.708-.639-21.43-11.562-19.35c-124.203 23.654-238.262-71.576-238.262-196.954c0-72.222 38.662-138.635 101.498-174.394c9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256c0 141.309 114.511 256 256 256z" fill="currentColor"></path>`,
          viewBox: '0 0 512 512',
        },
        sun: {
          path:
            '<path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z" fill="currentColor"></path><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96s96-43.1 96-96s-43.1-96-96-96zm246.4 80.5l-94.7-47.3l33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5l-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4l-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3l-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5l47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7l100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4l94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0c-49.9-49.9-49.9-131.1 0-181c49.9-49.9 131.1-49.9 181 0c49.9 49.9 49.9 131.1 0 181z" fill="currentColor"></path>',
          viewBox: '0 0 512 512',
        },
        npm: {
          path:
            '<path d="M157.538 164.103h65.641v-32.82h65.642V0H157.538v164.103zM223.18 32.82H256v65.64h-32.82v-65.64zM315.077 0v131.282h65.64V32.821h32.821v98.461h32.821V32.821h32.82v98.461H512V0H315.077zM0 131.282h65.641V32.821h32.82v98.461h32.821V0H0v131.282z" fill="currentColor">',
          viewBox: '0 0 512 165',
        },
        storybook: {
          path: `<path d="M9.872 293.324L.012 30.574C-.315 21.895 6.338 14.54 15.005 14L238.494.032c8.822-.552 16.42 6.153 16.972 14.975c.02.332.031.665.031.998v286.314c0 8.839-7.165 16.004-16.004 16.004c-.24 0-.48-.005-.718-.016l-213.627-9.595c-8.32-.373-14.963-7.065-15.276-15.388z" id="IconifyId-179377ab348-8608e7-6"></path></defs><mask id="IconifyId-179377ab348-8608e7-7" fill="#fff"><use xlink:href="#IconifyId-179377ab348-8608e7-6"></use></mask><use fill="#FF4785" xlink:href="#IconifyId-179377ab348-8608e7-6"></use><path d="M188.665 39.127l1.527-36.716L220.884 0l1.322 37.863a2.387 2.387 0 0 1-3.864 1.96l-11.835-9.325l-14.013 10.63a2.387 2.387 0 0 1-3.829-2.001zm-39.251 80.853c0 6.227 41.942 3.243 47.572-1.131c0-42.402-22.752-64.684-64.415-64.684c-41.662 0-65.005 22.628-65.005 56.57c0 59.117 79.78 60.249 79.78 92.494c0 9.052-4.433 14.426-14.184 14.426c-12.705 0-17.729-6.49-17.138-28.552c0-4.786-48.458-6.278-49.936 0c-3.762 53.466 29.548 68.887 67.665 68.887c36.935 0 65.892-19.687 65.892-55.326c0-63.36-80.961-61.663-80.961-93.06c0-12.728 9.455-14.425 15.07-14.425c5.909 0 16.546 1.042 15.66 24.801z" fill="#FFF" mask="url(#IconifyId-179377ab348-8608e7-7)"></path>`,
          viewBox: '0 0 256 319',
        },
      },
    },
  })

  domElements.forEach((tag) => {
    app.component(`chakra.${tag}`, chakra(tag))
  })
})

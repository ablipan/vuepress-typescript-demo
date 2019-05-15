import Hello from '../../src/components/Hello'
import TypeScript from '../../src/components/TypeScript.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component(Hello.name, Hello)
  Vue.component(TypeScript.name, TypeScript)
}

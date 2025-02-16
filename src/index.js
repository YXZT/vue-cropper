import VueCropper from './vue-cropper'

const install = function(Vue) {
  Vue.component('VueCropper', VueCropper);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { VueCropper }

export default {
  version: '0.6.1',
  install,
  VueCropper,
  vueCropper: VueCropper
}

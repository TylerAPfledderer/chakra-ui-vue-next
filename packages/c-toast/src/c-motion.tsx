import {
  h,
  inject,
  onMounted,
  onUpdated,
  provide,
  ref,
  defineComponent,
} from "vue"
import { createMotionState, createStyles, style } from "@motionone/dom"
import { contextId, presenceId, PresenceState } from "./c-motion.context"

const objectType = {
  type: Object,
}

export const Motion = defineComponent({
  name: "Motion",
  inheritAttrs: true,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    initial: {
      type: [Object, Boolean],
    },
    animate: objectType,
    inView: objectType,
    hover: objectType,
    press: objectType,
    exit: objectType,
    inViewOptions: objectType,
    transition: objectType,
    style: objectType,
  },
  setup(props) {
    const root = ref<Element | null>(null)
    const parentState = inject(contextId, undefined)
    const presenceState = inject(presenceId, undefined) as
      | PresenceState
      | undefined

    const state = createMotionState(
      {
        ...props,
        initial:
          presenceState?.initial === false
            ? presenceState.initial
            : props.initial === true
            ? undefined
            : props.initial,
      },
      parentState
    )

    provide(contextId, state)

    onMounted(() => {
      const unmount = state.mount(root.value!)
      let height = props.animate?.height
      // if (root.value) {
      //   const el = root.value as HTMLElement
      //   const { height: initialHeight } = getComputedStyle(el)
      //   el.style.visibility = "hidden"
      //   el.style.height = props.animate?.height || "auto"
      //   const { height: targetHeight } = getComputedStyle(el)
      //   height = targetHeight
      //   el.style.height = initialHeight
      //   el.style.visibility = "visible"
      // }

      state.update({
        ...props,
        animate: {
          ...props.animate,
          // height: height,
        },
        initial: props.initial === true ? undefined : props.initial,
      })

      return unmount
    })

    let manuallyAppliedMotionStyles = false
    onUpdated(() => {
      // let height = props.exit?.height
      // if (root.value) {
      //   const el = root.value as HTMLElement
      //   const { height: initialHeight } = getComputedStyle(el)
      //   el.style.visibility = "hidden"
      //   el.style.height = props.exit?.height || "auto"
      //   const { height: targetHeight } = getComputedStyle(el)
      //   height = targetHeight
      //   el.style.height = initialHeight
      //   el.style.visibility = "visible"
      // }
      /**
       * Vue reapplies all styles every render, rather than diffing and
       * only reapplying the ones that change. This means that initially
       * calculated motion styles also get reapplied every render, leading
       * to incorrect animation origins.
       *
       * To prevent this, once an element is mounted we hand over these
       * styles to Motion. This will currently still lead to a jump if interrupting
       * transforms in browsers where the number polyfill is used.
       */
      if (!manuallyAppliedMotionStyles && root.value) {
        manuallyAppliedMotionStyles = true

        const styles = createStyles(state.getTarget())
        for (const key in styles) {
          style.set(root.value, key, styles[key])
        }
      }

      state.update({
        ...props,
        animate: {
          ...props.animate,
          // height: height,
        },
        initial: props.initial === true ? undefined : props.initial,
      })
    })

    return {
      state,
      root,
      initialStyles: createStyles(state.getTarget()),
    }
  },
  render() {
    return h(
      this.tag,
      {
        ref: "root",
        style: this.state.isMounted()
          ? this.style
          : { ...this.style, ...this.initialStyles },
      },
      this.$slots.default?.()
    )
  },
})

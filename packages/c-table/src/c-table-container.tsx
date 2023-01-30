import { h, defineComponent, PropType } from "vue"
import {
  chakra,
  ComponentWithProps,
  DeepPartial,
  HTMLChakraProps,
} from "@chakra-ui/vue-system"
import { getValidChildren } from "@chakra-ui/vue-utils"

export interface CTableContainerProps extends HTMLChakraProps<"div"> {}

export const CTableContainer: ComponentWithProps<
  DeepPartial<CTableContainerProps>
> = defineComponent({
  name: "CTableContainer",
  props: {
    overflow: String as PropType<CTableContainerProps["overflow"]>,
    overflowX: String as PropType<CTableContainerProps["overflowX"]>,
  },
  setup(props, { slots, attrs }) {
    return () => (
      <chakra.div
        __css={{
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: props.overflow ?? props.overflowX ?? "auto",
          overflowY: "hidden",
          maxWidth: "100%",
        }}
        {...attrs}
      >
        {() => getValidChildren(slots)}
      </chakra.div>
    )
  },
})

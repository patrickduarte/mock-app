<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab.props.title">
        <a
          @click.prevent="selectedIndex = tab.props.title"
          class="nav-link "
          :class="tab.props.title === selectedIndex && 'active'"
          href="#"
        >
          {{ tab.props.title }}
        </a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane active">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  provide,
  reactive,
  toRefs,
} from "vue";

const isTab = (node) => node.type.name === "Tab";
const isFragment = (node) =>
  typeof node.type === "symbol" && node.type.description === "Fragment";
const hasTabs = (node) =>
  node.children && node.children.length && node.children.some(isTab);
const isTabParent = (node) => isFragment(node) && hasTabs(node);

export default {
  name: "Tabs",
  setup(_, { slots }) {
    const state = reactive({
      selectedIndex: 0,
      tabs: [],
      count: 0,
    });

    provide("TabsProvider", state);

    const selectTab = (i) => {
      state.selectedIndex = i;
    };

    const update = () => {
      if (slots.default) {
        state.tabs = slots
          .default()
          .filter((node) => isTab(node) || isTabParent(node))
          .flatMap((node) => (isTabParent(node) ? node.children : node));
      }
    };

    onBeforeMount(() => update());
    onBeforeUpdate(() => update());

    onMounted(() => {
      selectTab(0);
    });

    return { ...toRefs(state), selectTab };
  },
};
</script>
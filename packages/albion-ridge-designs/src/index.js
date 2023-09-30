import Root from "./components";

const acfOptionsHandler = {
  pattern: "acf-options-page",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`
    });
    const option = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  }
};

export default {
  name: "sticky-header",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch('/menu/main',{ force: true });
        await actions.source.fetch('/menu/footer',{ force: true });
        await actions.source.fetch('/testimonial/main',{ force: true });
        await actions.source.fetch('/review/main',{ force: true });
        await actions.source.fetch('/offering/main',{ force: true });
        await actions.source.fetch('/timeline/main',{ force: true });
        await actions.source.fetch('/blog',{ force: true });
        await actions.source.fetch("acf-options-page");
      },
    },
  },
  libraries: {
    source: {
      // Add the custom handler for ACF options defined above.
      handlers: [acfOptionsHandler]
    }
  }
};

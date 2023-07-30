import Root from "./components";

export default {
  name: "basic-template",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeCSR: () => {
        import("webfontloader").then((WebFontLoader) => {
          WebFontLoader.load({
            google: {
              families: [
                "Montserrat:400",
                "Oswald:300",
                "Oswald:400",
                "Oswald:600",
                "Lora:400"

              ],
            },
          });
        });
      },
    },
  },
};

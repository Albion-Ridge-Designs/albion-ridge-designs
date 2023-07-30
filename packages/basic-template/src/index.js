const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/albion-ridge-designs/src/index.js</pre>
    </>
  );
};

export default {
  name: "albion-ridge-designs",
  roots: {
    albionRidgeDesigns: Root
  },
  state: {
    albionRidgeDesigns: {}
  },
  actions: {
    albionRidgeDesigns: {}
  }
};

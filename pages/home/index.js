const init = async () => {
  if (1) {
    return;
  }

  const { default: asyncTest } = await import('../../loaded-async');

  asyncTest();
};

export default init;

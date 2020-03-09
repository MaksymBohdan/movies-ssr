const getLocalProps = staticContext => {
  let data;
  // eslint-disable-next-line no-undef
  if (__isBrowser__) {
    data = window.__INITIAL_DATA__ && window.__INITIAL_DATA__.data;
    delete window.__INITIAL_DATA__;
  } else {
    data = staticContext && staticContext.data;
  }
  return data;
};

export default getLocalProps;

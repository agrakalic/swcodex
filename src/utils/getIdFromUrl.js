const getIdFromUrl = url => {
  const parts = url.split('/');
  const id = parts[parts.length - 2];
  return id ? id : 0;
};

export default getIdFromUrl;
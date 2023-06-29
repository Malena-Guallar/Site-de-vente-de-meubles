export const filterItem = (curcat, setData, originalData) => {
    const newItem = originalData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setData(newItem);
  };
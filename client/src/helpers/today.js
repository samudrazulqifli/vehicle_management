const getCurrentDate = () => {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return formattedDate;
};

module.exports = { getCurrentDate };

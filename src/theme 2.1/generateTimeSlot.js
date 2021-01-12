export const generateDeliveryTimeSlot = (timeSlot, selectedDate, priorTime) => {
  const dateTime = new Date(selectedDate);
  const timeSplitRes = timeSlot.split(" ");
  let hour = 0;
  let min = 0;
  if (timeSplitRes[0].length < 3) {
    hour =
      timeSplitRes[1].toUpperCase() === "AM"
        ? Number(timeSplitRes[0])
        : Number(timeSplitRes[0]) + 12;
  } else {
    hour = Number(timeSplitRes[0].split(":")[0]);
    min = Number(timeSplitRes[0].split(":")[1]);
  }
  let selectedDateTime = new Date(
    dateTime.getFullYear(),
    dateTime.getMonth(),
    dateTime.getDate(),
    hour,
    min
  );
  const timeDifference = selectedDateTime.getTime() - new Date().getTime();
  const timeLimit = priorTime * 60 * 60 * 1000;

  if (timeDifference > timeLimit) return timeSlot;
};

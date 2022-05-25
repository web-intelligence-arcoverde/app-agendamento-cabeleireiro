function genereteId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const getTimeBlocks = () => {
  const minutesInDay = 1440;
  const timeBlocksArr = [{id: 0, timeString: '12:00 AM', timeValue: '0'}];
  for (let i = 30; i <= minutesInDay - 30; i += 30) {
    const halfHourInLoop = i / 60;

    let formattedBlock = String(halfHourInLoop);
    const hour = formattedBlock.split('.')[0];
    const minute = i % 60 === 0 ? '00' : '30';
    formattedBlock = `${hour}:${minute}`;

    const today = new Date();
    const timeString = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      Number(hour),
      Number(minute),
    );
    timeBlocksArr.push({
      id: genereteId(),
      timeString: timeString.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      timeValue: formattedBlock,
    });
  }

  return timeBlocksArr;
};

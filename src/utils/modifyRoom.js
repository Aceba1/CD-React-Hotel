

export default function modifyRoom(rooms, roomID = 100, setValue = {}) {
  let newRooms = []; // Must create a new array

  for (let f = 0; f < rooms.length; f++) {
    const arr = rooms[f]; let newArr = [];
    for (let r = 0; r < arr.length; r++) {
      let item = arr[r];
      if (item.room === roomID)
        item = { ...item, ...setValue }; // Sets new values here
      newArr.push(item);
    }
    newRooms.push(newArr);
  }
  return newRooms;
}
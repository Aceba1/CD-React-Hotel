
/**
 * @param {*[][]} rooms
 * @param {({renter: string, price: number, room: number}) => boolean} allow 
 * @returns {[]|false}
 */
export default function filterRooms(rooms, allow = (room, fl_index, rm_index) => {return true}) {
  let filter = [];
  let hasContent = false;
  for (let f = 0; f < rooms.length; f++) {
    const floor = rooms[f];
    let arr = [];
    for (let r = 0; r < floor.length; r++) {
      const room = floor[r];
      if (!allow(room, f, r)) continue;
      arr.push(room);
      hasContent = true;
    }
    filter.push({index:f, items:arr});
  }
  if (hasContent) return filter;
  return false;
}
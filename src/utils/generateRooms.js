import roomPrice from "./roomPrice";

export function generateRooms(floors, rooms) {
  let result = [];
  for (let f = 1; f <= floors; f++) {
    let arr = [];
    for (let r = 1; r <= rooms; r++) {
      arr.push({
        room: f * 100 + r,
        renter: null,
        price: roomPrice(f, r)
      });
    }
    result.push(arr);
  }
  return result;
}

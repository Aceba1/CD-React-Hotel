export function roomPrice(floor, room) {
  // Price: ($50 x floorNum) + ($10 x roomNum - 10$) + ($45)
  return (50 * floor) + (10 * room) + 35;
}

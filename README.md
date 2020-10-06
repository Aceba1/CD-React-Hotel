### Todo:
[ ] RoomsContext
  [ ] 
  [ ] RoomsInitializer

### So far:
- 10/6/2020
  - 15:00 - Created React App & Installed NPM packages
  - 15:01 - Added launch.json, server is up and running
  - 15:04 - Initialized Github repository
  - 15:07 - Created RoomsContext.js
  - 15:14 - Finished room initializer with pricing function
  - 15:17 - Added localStorage synchronization, appended to App.js, testing
  - 15:26 - Added NavBar.js, Button.js, Pager.js, Rental.js, Return.js
  - 15:34 - NavBar now displays two buttons for navigating between pages, conditionally shown within Pager
  - 15:36 - Resolving error "props.setPage is not a function
  - 15:39 - Appended Pager to App.js, hooks functional
  - 15:48 - Created RoomsList.js, with array mappings to FloorItem.js and RoomItem.js
  - 16:00 - Created filtering function within Rental.js (Will be moved to utils folder later)
  - 16:02 - Resolving error "Object(...)(...) is not iterable
  - 16:03 - Rooms display is functional! As is filtering and paging
  - 16:05-16:25 - Garbanzo Break
  - 16:32 - Removed App.css, modifying styling in index.css
  - 16:47 - Testing layout and data, going over project guidelines
  - 17:01 - Relocated functions (filterRooms, generateRooms, getprice) to utils folder, populated Return page
  - 17:13 - Created ExpressRental class, form and state controller
  - 17:20 - Expanding filterRoom.js to accept filter callbacks, modifying Rental.js caller to acquire lowest price and room index through callback
  - 17:31 - Completed handleClick function within ExpressRental, it now creates a new array with the modified room set to the renter. Rental and Return pages of site both update accordingly
  - 17:41 - Cleaning up ExpressRental.js & Rental.js, resolved exceptions caused by unsaved files
  - 17:48 - Cleaned up styling, added more information to ExpressRental, back to work
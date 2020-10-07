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
  - 17:56 - Github resync, checked in with class on Slack
  - 18:06 - Added onClick check to RoomItem, restyled display, simplified ExpressRental room property
  - 18:10 - Commented & cleaned up ExpressRental logic, stopped rendering of FloorItem.js if no items present (hide label)
  - 18:24 - RoomItems can now be clicked, and trigger a callback fundtion with the clicked room's name (ID). Added styling to hint functionality
  - 18:31 - Researching modal popups as reference for room return, adding styling and creating PopupReturn.js 
  - 18:37 - Updated RoomItem to hide renter's name, adding state logic within Return page to pass to PopupReturn
  - 18:51 - Adding logic & inputs to PopupReturn, fxied CSS styling, relocating ExpressRental room modifier to utility
  - 19:02 - Modified RoomsList to return room on click, Return page & PopupReturn logic to use room accordingly and wipe renter from specified room  
  - 19:05 - Resolved modal background click bleeding
  - 19:08 - Testing success!
  - 19:19 - Final styling, feedback etcetera
  - 19:33 - Confirmed state with instructor, cleaning up unused code (& recovering from memory crash)
  - 19:50 - Moved modal to new component, updated styling for express & return to match, cleaned up return prompt log, changed prompts to forms to allow enter key
  - 20:00 - Added auto-focusing to prompts, cleaned up all warnings. Done.
- 10/7/2020
  - 13:20 - Created Balance.js & BalanceContext.js
  - 13:28 - Added localStorage saving & loading to BalanceContext.js, incoroprating Context to App.js, and Balance to NavBar.js
  - 13:36 - Styling Balance.js to appear properly on NavBar, decided to make it part of the NavBar buttons. 
  - 13:40 - Added state for Balance.js to conditionally show and hide Modal, defined Modal.js PropTypes
  - 13:43 - Merged Balance types, populating Balance's Modal content
  - 13:46 - Resolved 'missing content' imposed by NavBar styling
  - 13:51 - Synchronized more css styling, removed duplicate entries
  - 14:00 - Reworked BalanceContext.js to hold a pinned-wealth amount, adding functionality to Balance modal
  - 14:06 - Debugging undefined values, discovered previous stored type in local memory and missing 'JSON.stringify' call
  - 14:17 - Added functionality to Balance.js, can now 'deposit' unpinned funds to the 'bank'. Expanded usability of 'inactive' button styling. Testing is responsive
  - 14:27 - Fighting .css theming and logical PEMDAS to individualize NavBar buttons from other elements
  - 14:38 - Finished style reworking, bank property addition within BalanceContext and usage within Balance. *No more*
  - 14:44 - Added 'pinPrice' to roomPrice export, this will be used when renting and returning rooms
  - 14:47 - Updated ExpressRental to use BalanceContext and 'pinPrice', now adds funds to stored Balance
  - 14:55 - Finished integration with PopupReturn, all systems functional. Presenting results to instructor
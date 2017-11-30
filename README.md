# scrabble-kata-5

* Make a Scrabble word finder app with both a server and client. On the client,
  the UI simply is a text input for your up-to-7 letters in your Scrabble rack,
  and a button to send the letters to the server.
* On the server side, efficiently find words which can be made with those
  letters, within a big dictionary. Display the list of found words on the
  client side.
* like before, avoid googling. if you have to google, please note the fact. like
  before, don't use frameworks on the client side, just plain vanilla JS and DOM
  APIs.

## Google Log

* How to set up an express router
* Understanding fs.readFile and createReadStream

## Retrospective

Got caught up trying to optimize the dictionary lookup to finish this kate in a
timely manner. Needed to review how createReadStream works, which segments the
file into a series of events. This is more optimal in the case of this
application because I would have the ability to read parts of the txt file
without having to replicate the file again as a js array. Will attempt again.

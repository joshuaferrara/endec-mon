# endec-mon
--------

endec-mon is a small NodeJS package built to read alerts from the SAGE Model 1822 ENDEC's serial port. I've also set it up to run an IFTTT recipe to turn on a red flashing light indicating an alert has come in. This code is pretty messy and isn't really intended to be used by anyone else, but it does give an idea of how to pull alerts over the ENDEC's serial port.

# installation
--------

1. `git clone https://github.com/joshuaferrara/endec-mon.git`
2. `npm install`
3. `node monitor`
Description
===========

Displays a row of green LEDs., accepts input from 0 to 10. 
Overflow will just be ignored.

Inputs
-------

The widget has one input endpoint which accept numbers (as strings).

Settings
---------

You can set which value should trigger all ten LEDs. Default is ten. 
You can set it to 100 to display percentages.
You can set it to 1.0 if you have input values between 0.0 and 1.0. 
A value of 0 or negative will be ignored.

Caveats
--------

The handling of intermedate values is not well defined yet and may change in the future.


Requirements
-------------

This is a widget for the FIWARE Wirecloud as infrastructure. It should run on all browsers that the Wirecloud supports.
It also runs locally without Wireclod, but it has no way to get input then.
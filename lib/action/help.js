/*:nodoc:*
 * class ActionHelp
 *
 * Support action for printing help
 * This class inherided from [[Action]]
 **/
'use strict';

var util = require('util');

var Action = require('../action');

// Constants
var $$  = require('../const');

/*:nodoc:*
 * new ActionHelp(options)
 * - options (object): options hash see [[Action.new]]
 *
 **/
var ActionHelp = module.exports = function ActionHelp(options) {
  options = options || {};
  if (options.defaultValue !== null) {
    options.defaultValue = options.defaultValue;
  }
  else {
    options.defaultValue = $$.SUPPRESS;
  }
  options.dest = (options.dest !== null? options.dest: $$.SUPPRESS);
  options.nargs = 0;
  Action.call(this, options);

};
util.inherits(ActionHelp, Action);

/*:nodoc:*
 * ActionHelp#call(parser, namespace, values, optionString)
 * - parser (ArgumentParser): current parser
 * - namespace (Namespace): namespace for output data
 * - values (Array): parsed values
 * - optionString (Array): input option string(not parsed)
 *
 * Print help and exit
 **/
ActionHelp.prototype.call = function (parser, namespace, values, optionString) {
  parser.printHelp();
  parser.exit();
};
// source: lens_overlay_client_context.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var lens_overlay_filters_pb = require('./lens_overlay_filters_pb.cjs');
goog.object.extend(proto, lens_overlay_filters_pb);
var lens_overlay_platform_pb = require('./lens_overlay_platform_pb.cjs');
goog.object.extend(proto, lens_overlay_platform_pb);
var lens_overlay_surface_pb = require('./lens_overlay_surface_pb.cjs');
goog.object.extend(proto, lens_overlay_surface_pb);
goog.exportSymbol('proto.lens.ClientLoggingData', null, global);
goog.exportSymbol('proto.lens.LensOverlayClientContext', null, global);
goog.exportSymbol('proto.lens.LensRenderingEnvironment', null, global);
goog.exportSymbol('proto.lens.LocaleContext', null, global);
goog.exportSymbol('proto.lens.RenderingContext', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lens.LensOverlayClientContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lens.LensOverlayClientContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lens.LensOverlayClientContext.displayName = 'proto.lens.LensOverlayClientContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lens.LocaleContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lens.LocaleContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lens.LocaleContext.displayName = 'proto.lens.LocaleContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lens.RenderingContext = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lens.RenderingContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lens.RenderingContext.displayName = 'proto.lens.RenderingContext';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.lens.ClientLoggingData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.lens.ClientLoggingData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.lens.ClientLoggingData.displayName = 'proto.lens.ClientLoggingData';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lens.LensOverlayClientContext.prototype.toObject = function(opt_includeInstance) {
  return proto.lens.LensOverlayClientContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lens.LensOverlayClientContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.LensOverlayClientContext.toObject = function(includeInstance, msg) {
  var f, obj = {
platform: jspb.Message.getFieldWithDefault(msg, 1, 0),
surface: jspb.Message.getFieldWithDefault(msg, 2, 0),
localeContext: (f = msg.getLocaleContext()) && proto.lens.LocaleContext.toObject(includeInstance, f),
appId: jspb.Message.getFieldWithDefault(msg, 6, ""),
clientFilters: (f = msg.getClientFilters()) && lens_overlay_filters_pb.AppliedFilters.toObject(includeInstance, f),
renderingContext: (f = msg.getRenderingContext()) && proto.lens.RenderingContext.toObject(includeInstance, f),
clientLoggingData: (f = msg.getClientLoggingData()) && proto.lens.ClientLoggingData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lens.LensOverlayClientContext}
 */
proto.lens.LensOverlayClientContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lens.LensOverlayClientContext;
  return proto.lens.LensOverlayClientContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lens.LensOverlayClientContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lens.LensOverlayClientContext}
 */
proto.lens.LensOverlayClientContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.lens.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {!proto.lens.Surface} */ (reader.readEnum());
      msg.setSurface(value);
      break;
    case 4:
      var value = new proto.lens.LocaleContext;
      reader.readMessage(value,proto.lens.LocaleContext.deserializeBinaryFromReader);
      msg.setLocaleContext(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 17:
      var value = new lens_overlay_filters_pb.AppliedFilters;
      reader.readMessage(value,lens_overlay_filters_pb.AppliedFilters.deserializeBinaryFromReader);
      msg.setClientFilters(value);
      break;
    case 20:
      var value = new proto.lens.RenderingContext;
      reader.readMessage(value,proto.lens.RenderingContext.deserializeBinaryFromReader);
      msg.setRenderingContext(value);
      break;
    case 23:
      var value = new proto.lens.ClientLoggingData;
      reader.readMessage(value,proto.lens.ClientLoggingData.deserializeBinaryFromReader);
      msg.setClientLoggingData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lens.LensOverlayClientContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lens.LensOverlayClientContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lens.LensOverlayClientContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.LensOverlayClientContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSurface();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLocaleContext();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.lens.LocaleContext.serializeBinaryToWriter
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientFilters();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      lens_overlay_filters_pb.AppliedFilters.serializeBinaryToWriter
    );
  }
  f = message.getRenderingContext();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.lens.RenderingContext.serializeBinaryToWriter
    );
  }
  f = message.getClientLoggingData();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.lens.ClientLoggingData.serializeBinaryToWriter
    );
  }
};


/**
 * optional Platform platform = 1;
 * @return {!proto.lens.Platform}
 */
proto.lens.LensOverlayClientContext.prototype.getPlatform = function() {
  return /** @type {!proto.lens.Platform} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.lens.Platform} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Surface surface = 2;
 * @return {!proto.lens.Surface}
 */
proto.lens.LensOverlayClientContext.prototype.getSurface = function() {
  return /** @type {!proto.lens.Surface} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.lens.Surface} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.setSurface = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional LocaleContext locale_context = 4;
 * @return {?proto.lens.LocaleContext}
 */
proto.lens.LensOverlayClientContext.prototype.getLocaleContext = function() {
  return /** @type{?proto.lens.LocaleContext} */ (
    jspb.Message.getWrapperField(this, proto.lens.LocaleContext, 4));
};


/**
 * @param {?proto.lens.LocaleContext|undefined} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
*/
proto.lens.LensOverlayClientContext.prototype.setLocaleContext = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.clearLocaleContext = function() {
  return this.setLocaleContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lens.LensOverlayClientContext.prototype.hasLocaleContext = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string app_id = 6;
 * @return {string}
 */
proto.lens.LensOverlayClientContext.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional AppliedFilters client_filters = 17;
 * @return {?proto.lens.AppliedFilters}
 */
proto.lens.LensOverlayClientContext.prototype.getClientFilters = function() {
  return /** @type{?proto.lens.AppliedFilters} */ (
    jspb.Message.getWrapperField(this, lens_overlay_filters_pb.AppliedFilters, 17));
};


/**
 * @param {?proto.lens.AppliedFilters|undefined} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
*/
proto.lens.LensOverlayClientContext.prototype.setClientFilters = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.clearClientFilters = function() {
  return this.setClientFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lens.LensOverlayClientContext.prototype.hasClientFilters = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional RenderingContext rendering_context = 20;
 * @return {?proto.lens.RenderingContext}
 */
proto.lens.LensOverlayClientContext.prototype.getRenderingContext = function() {
  return /** @type{?proto.lens.RenderingContext} */ (
    jspb.Message.getWrapperField(this, proto.lens.RenderingContext, 20));
};


/**
 * @param {?proto.lens.RenderingContext|undefined} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
*/
proto.lens.LensOverlayClientContext.prototype.setRenderingContext = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.clearRenderingContext = function() {
  return this.setRenderingContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lens.LensOverlayClientContext.prototype.hasRenderingContext = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ClientLoggingData client_logging_data = 23;
 * @return {?proto.lens.ClientLoggingData}
 */
proto.lens.LensOverlayClientContext.prototype.getClientLoggingData = function() {
  return /** @type{?proto.lens.ClientLoggingData} */ (
    jspb.Message.getWrapperField(this, proto.lens.ClientLoggingData, 23));
};


/**
 * @param {?proto.lens.ClientLoggingData|undefined} value
 * @return {!proto.lens.LensOverlayClientContext} returns this
*/
proto.lens.LensOverlayClientContext.prototype.setClientLoggingData = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.lens.LensOverlayClientContext} returns this
 */
proto.lens.LensOverlayClientContext.prototype.clearClientLoggingData = function() {
  return this.setClientLoggingData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.lens.LensOverlayClientContext.prototype.hasClientLoggingData = function() {
  return jspb.Message.getField(this, 23) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lens.LocaleContext.prototype.toObject = function(opt_includeInstance) {
  return proto.lens.LocaleContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lens.LocaleContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.LocaleContext.toObject = function(includeInstance, msg) {
  var f, obj = {
language: jspb.Message.getFieldWithDefault(msg, 1, ""),
region: jspb.Message.getFieldWithDefault(msg, 2, ""),
timeZone: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lens.LocaleContext}
 */
proto.lens.LocaleContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lens.LocaleContext;
  return proto.lens.LocaleContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lens.LocaleContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lens.LocaleContext}
 */
proto.lens.LocaleContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lens.LocaleContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lens.LocaleContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lens.LocaleContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.LocaleContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string language = 1;
 * @return {string}
 */
proto.lens.LocaleContext.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.lens.LocaleContext} returns this
 */
proto.lens.LocaleContext.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string region = 2;
 * @return {string}
 */
proto.lens.LocaleContext.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.lens.LocaleContext} returns this
 */
proto.lens.LocaleContext.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string time_zone = 3;
 * @return {string}
 */
proto.lens.LocaleContext.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.lens.LocaleContext} returns this
 */
proto.lens.LocaleContext.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lens.RenderingContext.prototype.toObject = function(opt_includeInstance) {
  return proto.lens.RenderingContext.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lens.RenderingContext} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.RenderingContext.toObject = function(includeInstance, msg) {
  var f, obj = {
renderingEnvironment: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lens.RenderingContext}
 */
proto.lens.RenderingContext.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lens.RenderingContext;
  return proto.lens.RenderingContext.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lens.RenderingContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lens.RenderingContext}
 */
proto.lens.RenderingContext.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {!proto.lens.LensRenderingEnvironment} */ (reader.readEnum());
      msg.setRenderingEnvironment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lens.RenderingContext.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lens.RenderingContext.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lens.RenderingContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.RenderingContext.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRenderingEnvironment();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional LensRenderingEnvironment rendering_environment = 2;
 * @return {!proto.lens.LensRenderingEnvironment}
 */
proto.lens.RenderingContext.prototype.getRenderingEnvironment = function() {
  return /** @type {!proto.lens.LensRenderingEnvironment} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.lens.LensRenderingEnvironment} value
 * @return {!proto.lens.RenderingContext} returns this
 */
proto.lens.RenderingContext.prototype.setRenderingEnvironment = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.lens.ClientLoggingData.prototype.toObject = function(opt_includeInstance) {
  return proto.lens.ClientLoggingData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.lens.ClientLoggingData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.ClientLoggingData.toObject = function(includeInstance, msg) {
  var f, obj = {
isHistoryEligible: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.lens.ClientLoggingData}
 */
proto.lens.ClientLoggingData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.lens.ClientLoggingData;
  return proto.lens.ClientLoggingData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.lens.ClientLoggingData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.lens.ClientLoggingData}
 */
proto.lens.ClientLoggingData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsHistoryEligible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.lens.ClientLoggingData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.lens.ClientLoggingData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.lens.ClientLoggingData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.lens.ClientLoggingData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsHistoryEligible();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_history_eligible = 1;
 * @return {boolean}
 */
proto.lens.ClientLoggingData.prototype.getIsHistoryEligible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.lens.ClientLoggingData} returns this
 */
proto.lens.ClientLoggingData.prototype.setIsHistoryEligible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.lens.LensRenderingEnvironment = {
  RENDERING_ENV_UNSPECIFIED: 0,
  RENDERING_ENV_LENS_OVERLAY: 14
};

goog.object.extend(exports, proto.lens);

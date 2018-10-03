//
//  Looper sketch plugin
//  Created by Sures Kumar
//  http://www.sureskumar.com
//  sures.srinivasan@gmail.com
//

var loop, 
ori_layer_name, 
created_looper_group, 
ori_x, 
ori_y;
var opacity_val = 0;
var debugMode = false;
var debugInsideLoop = false;

var MD = {
  init: function (context, command, args) {
    var commandOptions = '' + args;
    this.prefs = NSUserDefaults.standardUserDefaults();
    this.context = context;
    this.version = this.context.plugin.version() + "";
    this.MDVersion = this.prefs.stringForKey("MDVersion") + "" || 0;
    this.extend(context);
    this.pluginRoot = this.scriptPath
      .stringByDeletingLastPathComponent()
      .stringByDeletingLastPathComponent()
      .stringByDeletingLastPathComponent();
    this.pluginSketch = this.pluginRoot + "/Contents/Sketch/scripts";
    this.resources = this.pluginRoot + '/Contents/Resources';
    coscript.setShouldKeepAround(false);
    if (command && command == "init") {
      return false;
    }
    this.document = context.document;
    this.documentData = this.document.documentData();
    this.UIMetadata = context.document.mutableUIMetadata();
    this.window = this.document.window();
    this.pages = this.document.pages();
    this.page = this.document.currentPage();
    this.artboard = this.page.currentArtboard();
    this.current = this.artboard || this.page;
    if (command) {
      switch (command) {
        case "generate-pattern":
          this.Pattern();
          break;
      }
    }
  },
  extend: function(options, target) {
    var target = target || this;
    for (var key in options) {
      target[key] = options[key];
    }
    return target;
  }
};

MD.extend({
    prefix: "MDConfig",
    getConfigs: function(container){
        var configsData;
        if(container){
            configsData = this.command.valueForKey_onLayer(this.prefix, container);
        }
        else{
            configsData = this.UIMetadata.objectForKey(this.prefix);
        }
        return JSON.parse(configsData);
    },
     setConfigs: function(newConfigs, container){
        var configsData;
        newConfigs.timestamp = new Date().getTime();
        if(container){
            configsData = this.extend(newConfigs, this.getConfigs(container) || {});
            this.command.setValue_forKey_onLayer(JSON.stringify(configsData), this.prefix, container);
        }
        else{
            configsData = this.extend(newConfigs, this.getConfigs() || {});
            this.UIMetadata.setObject_forKey (JSON.stringify(configsData), this.prefix);
        }
        var saveDoc = this.addShape();
        this.page.addLayers([saveDoc]);
        this.removeLayer(saveDoc);
        return configsData;
    },
    removeConfigs: function(container){
        if(container){
            this.command.setValue_forKey_onLayer(null, prefix, container);
        }
        else{
            configsData = this.UIMetadata.setObject_forKey (null, this.prefix);
        }
    }
});

MD.extend({
  addShape: function () {
    var shape = MSRectangleShape.alloc().initWithFrame(NSMakeRect(0, 0, 100, 100));
    //return MSShapeGroup.shapeWithPath(shape);
    return shape;
  },
  removeLayer: function (layer) {
    var container = layer.parentGroup();
    if (container) container.removeLayer(layer);
  }
});

MD.extend({
  createCocoaObject: function (methods, superclass) {
    var uniqueClassName = "MD.sketch_" + NSUUID.UUID().UUIDString();
    var classDesc = MOClassDescription.allocateDescriptionForClassWithName_superclass_(uniqueClassName, superclass || NSObject);
    classDesc.registerClass();
    for (var selectorString in methods) {
      var selector = NSSelectorFromString(selectorString);
      [classDesc addInstanceMethodWithSelector:selector function:(methods[selectorString])];
    }
    return NSClassFromString(uniqueClassName).new();
  },

  addFirstMouseAcceptor: function (webView, contentView) {
    var button = this.createCocoaObject({
      'mouseDown:': function (evt) {
        this.removeFromSuperview();
        NSApplication.sharedApplication().sendEvent(evt);
      },
    }, NSButton);
    button.setIdentifier('firstMouseAcceptor');
    button.setTransparent(true);
    button.setTranslatesAutoresizingMaskIntoConstraints(false);
    contentView.addSubview(button);
    var views = {
      button: button,
      webView: webView
    };
    // Match width of WebView.
    contentView.addConstraints([NSLayoutConstraint
            constraintsWithVisualFormat:'H:[button(==webView)]'
            options:NSLayoutFormatDirectionLeadingToTrailing
            metrics:null
            views:views]);
    // Match height of WebView.
    contentView.addConstraints([NSLayoutConstraint
            constraintsWithVisualFormat:'V:[button(==webView)]'
            options:NSLayoutFormatDirectionLeadingToTrailing
            metrics:null
            views:views]);
    // Match top of WebView.
    contentView.addConstraints([[NSLayoutConstraint
            constraintWithItem:button attribute:NSLayoutAttributeTop
            relatedBy:NSLayoutRelationEqual toItem:webView
            attribute:NSLayoutAttributeTop multiplier:1 constant:0]]);
  },

  MDPanel: function (options) {
    var self = this,
      threadDictionary,
      options = this.extend(options, {
        url: this.pluginSketch + "/panel/chips.html",
        width: 240,
        height: 316,
        floatWindow: false,
        hiddenClose: false,
        data: {},
        callback: function (data) { return data; }
      }),
      result = false;
    options.url = encodeURI("file://" + options.url);
    var frame = NSMakeRect(0, 0, options.width, (options.height + 32)),
      titleBgColor = NSColor.colorWithRed_green_blue_alpha(0 / 255, 145 / 255, 234 / 255, 1),
      contentBgColor = NSColor.colorWithRed_green_blue_alpha(1, 1, 1, 1);
    if (options.identifier) {
      threadDictionary = NSThread.mainThread().threadDictionary();
    }
    if (options.identifier && threadDictionary[options.identifier]) {
      return false;
    }
    var Panel = NSPanel.alloc().init();
    Panel.setTitleVisibility(NSWindowTitleHidden);
    Panel.setTitlebarAppearsTransparent(true);
    Panel.standardWindowButton(NSWindowCloseButton).setHidden(options.hiddenClose);
    Panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true);
    Panel.standardWindowButton(NSWindowZoomButton).setHidden(true);
    Panel.setFrame_display(frame, true);
    Panel.setBackgroundColor(contentBgColor);
    Panel.setWorksWhenModal(true);
    if (options.floatWindow) {
      Panel.becomeKeyWindow();
      Panel.setLevel(NSFloatingWindowLevel);
      threadDictionary[options.identifier] = Panel;
      // Long-running script
      COScript.currentCOScript().setShouldKeepAround_(true);
    }
    var contentView = Panel.contentView(),
      webView = WebView.alloc().initWithFrame(NSMakeRect(0, 0, options.width, options.height));
    var windowObject = webView.windowScriptObject();
    contentView.setWantsLayer(true);
    contentView.layer().setFrame(contentView.frame());
    webView.setBackgroundColor(contentBgColor);
    webView.setMainFrameURL_(options.url);
    contentView.addSubview(webView);
    var delegate = new MochaJSDelegate({
      "webView:didFinishLoadForFrame:": (function (webView, webFrame) {
        var MDAction = [
          "function MDAction(hash, data) {",
            "if(data){ window.MDData = encodeURI(JSON.stringify(data)); }",
            "window.location.hash = hash;",
          "}"
        ].join(""),
          DOMReady = [
            "$(", "function(){", "init(" + JSON.stringify(options.data) + ")", "}",");"
          ].join("");
        windowObject.evaluateWebScript(MDAction);
        windowObject.evaluateWebScript(DOMReady);
      }),
      "webView:didChangeLocationWithinPageForFrame:": (function (webView, webFrame) {
        var request = NSURL.URLWithString(webView.mainFrameURL()).fragment();
        if (request == "submit") {
          var data = JSON.parse(decodeURI(windowObject.valueForKey("MDData")));
          options.callback(data);
          result = true;
        }
        if (request == "cancelPanel") {
          sendEvent(MD.context, 'UI Component', 'CANCEL button pressed');
          var data = JSON.parse(decodeURI(windowObject.valueForKey("MDData")));
          options.callback(data, 1);
          result = true;
          windowObject.evaluateWebScript("window.location.hash = 'close';");
        }
        if (request == "closePanel") {
            sendEvent(MD.context, 'UI Component', 'DONE button pressed');
            windowObject.evaluateWebScript("window.location.hash = 'close';");
        }
        if (request == 'drag-end') {
          var data = JSON.parse(decodeURI(windowObject.valueForKey("MDData")));
          MD.Importer().convertSvgToSymbol(data);
          result = true;
        }
        if (request == 'onWindowDidBlur') {
          MD.addFirstMouseAcceptor(webView, contentView);
        }
        if (request == "close") {
          if (!options.floatWindow) {
            Panel.orderOut(nil);
            NSApp.stopModal();
          }
          else {
            Panel.close();
          }
        }
        if (request == "focus") {
          var point = Panel.currentEvent().locationInWindow(),
            y = NSHeight(Panel.frame()) - point.y - 32;
          windowObject.evaluateWebScript("lookupItemInput(" + point.x + ", " + y + ")");
        }
        windowObject.evaluateWebScript("window.location.hash = '';");
      })
    });
    webView.setFrameLoadDelegate_(delegate.getClassInstance());
    if (options.floatWindow) {
      Panel.center();
      Panel.makeKeyAndOrderFront(nil);
    }
    var closeButton = Panel.standardWindowButton(NSWindowCloseButton);
    closeButton.setCOSJSTargetFunction(function (sender) {
      var request = NSURL.URLWithString(webView.mainFrameURL()).fragment();
      if (options.floatWindow && request == "submit") {
        data = JSON.parse(decodeURI(windowObject.valueForKey("MDData")));
        options.callback(data);
      }
      if (options.identifier) {
        threadDictionary.removeObjectForKey(options.identifier);
      }
      self.wantsStop = true;
      if (options.floatWindow) {
        Panel.close();
      }
      else {
        Panel.orderOut(nil);
        NSApp.stopModal();
      }
    });
    closeButton.setAction("callAction:");
    var titlebarView = contentView.superview().titlebarViewController().view(),
    titlebarContainerView = titlebarView.superview();
    closeButton.setFrameOrigin(NSMakePoint(8, 8));
    titlebarContainerView.setFrame(NSMakeRect(0, options.height, options.width, 32));
    titlebarView.setFrameSize(NSMakeSize(options.width, 32));
    titlebarView.setTransparent(true);
    titlebarView.setBackgroundColor(titleBgColor);
    titlebarContainerView.superview().setBackgroundColor(titleBgColor);
    if (!options.floatWindow) {
      NSApp.runModalForWindow(Panel);
    }
    return result;
  },

  patternPanel: function () {
    var self = this,
      data = {};
    var loopedOnce = 0;
    return this.MDPanel({
      url: this.pluginSketch + "/panel/table.html",
      width: 473,
      height: 495,
      data: data,
      identifier: 'com.google.material.pattern',
      floatWindow: false,
      callback: function (data, cl) {
        self.configs = self.setConfigs({
          table: data
        });
        if(self.configs) {  
            if(cl == 1) {
              var layers = MD.current.layers()
                for (var ia=0; ia < [layers count]; ia++) {
                    var layer = [layers objectAtIndex:ia]
                    if(layer.objectID() == created_looper_group){
                      layer.removeFromParent()
                    }
                }
                for (var ib=0; ib < [layers count]; ib++) {
                      var layer = [layers objectAtIndex:ib]
                      if(layer.name() == ori_layer_name){
                        layer.setIsVisible(1);
                        [layer select:true byExpandingSelection:true];
                      }
                  }
            } else {
             if(loopedOnce == 1) {
                  var layers = MD.current.layers()
                  for (var ia=0; ia < [layers count]; ia++) {
                      var layer = [layers objectAtIndex:ia]
                      if(layer.objectID() == created_looper_group){
                        layer.removeFromParent()
                      }
                  }
                  for (var ib=0; ib < [layers count]; ib++) {
                      var layer = [layers objectAtIndex:ib]
                      if(layer.name() == ori_layer_name){
                        //log(layer.name());
                        layer.setIsVisible(1);
                        [layer select:true byExpandingSelection:true];
                        MD.runLooper(layer);
                      }
                  }
              } else {
                  loopedOnce = 1;
                  MD.runLooper();
              }     
            }     
        }
      },
    });
  },

  runLooper: function (loopingLayer) {

    MD.superDebug("- - runLooper function triggered - -");

    // Globals
    var self = MD,
    selection = MD.context.selection;
    var position,
      position_rnd_x,
      position_rnd_y,
      position_inc,
      loop,
      rotate_select,
      opacity,
      scale,
      scale_px,
      scale_pr,
      scale_rnd,
      angle_choice,
      angle,
      angle_sin,
      angle_rnd,
      grid_x,
      grid_y,
      position_grid_x_inc,
      position_grid_y_inc;
    var self = this;

    // Get input from panel
      // COUNT
      loop = MD.configs.table.send_loop;
      MD.superDebug("loop", loop);

      // ANGLE
      rotate_select = MD.configs.table.send_rotate_select;
      MD.superDebug("rotate_select", rotate_select);
      //sendEvent(MD.context, 'Parameter: rotate_select', rotate_select);

      angle = MD.configs.table.send_angle;
      MD.superDebug("angle", angle);

      angle_choice = MD.configs.table.send_rotate_inc_perf;
      MD.superDebug("angle_choice", angle_choice);
      //sendEvent(MD.context, 'Parameter: angle_choice', angle_choice);

      angle_sin = MD.configs.table.send_rotate_sin;
      MD.superDebug("angle_sin", angle_sin);

      angle_rnd = MD.configs.table.send_rotate_rnd;
      MD.superDebug("angle_rnd", angle_rnd);

      // OPACITY
      opacity = MD.configs.table.send_opacity;
      MD.superDebug("opacity", opacity);
      //sendEvent(MD.context, 'Parameter: opacity', opacity);

      // MOVE
      position = MD.configs.table.send_position;
      MD.superDebug("position", position);
      //sendEvent(MD.context, 'Parameter: position', position);

      position_inc = parseFloat(MD.configs.table.send_move_inc);
      MD.superDebug("position_inc", position_inc);

      position_rnd_x = MD.configs.table.send_move_rnd_x;
      MD.superDebug("position_rnd_x", position_rnd_x);

      position_rnd_y = MD.configs.table.send_move_rnd_y;
      MD.superDebug("position_rnd_y", position_rnd_y);


      // GRID
      grid_x = Math.floor(MD.configs.table.send_grid_c);
      //grid_x = MD.configs.table.send_grid_c;
      if(grid_x < 1) { grid_x = 1; }
      MD.superDebug("grid_x", grid_x);
      
      grid_y = Math.floor(MD.configs.table.send_grid_r);
      //grid_y = MD.configs.table.send_grid_r;
      if(grid_y < 1) { grid_y = 1; }
      MD.superDebug("grid_y", grid_y);

      //position_grid_x_inc = Math.floor(MD.configs.table.send_grid_x);
      position_grid_x_inc = parseFloat(MD.configs.table.send_grid_x);
      MD.superDebug("position_grid_x_inc", position_grid_x_inc);

      //position_grid_y_inc = Math.floor(MD.configs.table.send_grid_y);
      position_grid_y_inc = parseFloat(MD.configs.table.send_grid_y);
      MD.superDebug("position_grid_y_inc", position_grid_y_inc);

      // SCALE
      scale = MD.configs.table.send_scale;
      MD.superDebug("scale", scale);
      //sendEvent(MD.context, 'Parameter: scale', scale);

      scale_px = MD.configs.table.send_scale_px;
      MD.superDebug("scale_px", scale_px);

      scale_pr = MD.configs.table.send_scale_pr;
      MD.superDebug("scale_pr", scale_pr);

      scale_rnd = MD.configs.table.send_scale_rnd;
      MD.superDebug("scale_rnd", scale_rnd);

      

      switch(opacity) {
          case 1:
              //No Change
              break;
          case 2:
              //Random opacity
              break;
          case 3:
              //Opacity 0 to 1
              opacity_val = 0;
              break;
          case 4:
              //Opacity 1 to 0
              opacity_val = 100;
              break;
      }

      MD.superDebug("opacity_val", opacity_val);

      // Get selected layer
      MD.superDebug("loopingLayer", loopingLayer);
      var layer;
      if(loopingLayer) {
        layer = loopingLayer;
      } else {
        layer = selection[0];
      }

      // Assign or get looping layer position
      MD.superDebug("ori_x", ori_x);
      MD.superDebug("ori_y", ori_y);

      var frame = [layer frame];
      if(ori_x) {
        [frame setX: ori_x]
        [frame setY: ori_y]
      } else {
        ori_x = [frame x];
        ori_y = [frame y];
      }

      // Hide the original layer
      layer.setIsVisible(0);
      var layerName = layer.name();
      MD.superDebug("ori_layer_name", ori_layer_name);
      if(!ori_layer_name) {
        ori_layer_name = "original_" + layerName + "_" + Math.floor(Math.random() * 100000000);
      }
      layer.setName(ori_layer_name);

      // Create a group
      groupLayer = MSLayerGroup.new();
      groupLayer.setName(layerName + " Group");

      // Duplicate just the first copy
      layer.duplicate();
      layer.setIsVisible(1);
      layer.setName("duplicate_1_" + layerName);

      // Add it to the group
      MD.current.removeLayer(layer);
      groupLayer.addLayers([layer]);

      // Set opacity for the first copy
      MD.setOpacity(layer, loop, opacity, 1);

      // Variable declarations
      var frame, oldWidth, oldHeight, oldXPos, oldYPos, newWidth, newHeight, newXPos, newYPos, rotation, newRotation, cur_angle;
      var grid_row_count = 0;

      frame = [layer frame];
      var grid_old_x = [frame x];
      var grid_old_y = [frame y];
      var grid_old_h = [frame height];
      var grid_old_w = [frame width];

      MD.superDebug("grid_old_x", grid_old_x);
      MD.superDebug("grid_old_y", grid_old_y);
      MD.superDebug("grid_old_h", grid_old_h);
      MD.superDebug("grid_old_w", grid_old_w);

      var tempCount = 0;  
      var counter = 0;

      if(loop < 2) {
        loop = 1;
      }

      if(position == 6) {
        loop = grid_x * grid_y;
      }

      for(var j = 0; j < loop-1; j++){

          MD.superDebug("j", j, 0);

          // Duplicate
          if(loop > 1) {
            layer.duplicate();
            tempCount = j+2;
            layer.setName("duplicate_" + tempCount + "_" + layerName);
          }
          MD.superDebug("tempCount", tempCount, 0);

          // Opacity for rest of the layers
          MD.setOpacity(layer, loop, opacity, j+2);

          // Rotate
          rotation = layer.rotation();
          MD.superDebug("rotation", rotation, 0);
          switch(angle_choice) {
              case 0:
                  //Linear
                  cur_angle = angle;      
                  break;
            case 1:
                  //Sin
                  var increase = Math.PI * angle_sin / 100;
                  MD.superDebug("increase", increase, 0);
                  cur_angle = Math.sin(counter);
                  counter += increase;
                  MD.superDebug("counter", counter, 0);
                  break;
              case 2:
                  //Random
                  cur_angle = (Math.random(angle-angle_rnd, angle+angle_rnd) * 100);    
                  break;
          }

          MD.superDebug("cur_angle", cur_angle, 0);

          if(rotate_select == 0) {
            newRotation = rotation - cur_angle;
            MD.superDebug("newRotation", newRotation, 0);
            layer.setRotation(newRotation);
          }

          // Dimension
          frame = [layer frame];
          oldWidth = [frame width];
          oldHeight = [frame height];
          oldXPos = [frame x];
          oldYPos = [frame y];

          MD.superDebug("oldWidth", oldWidth, 0);
          MD.superDebug("oldHeight", oldHeight, 0);
          MD.superDebug("oldXPos", oldXPos, 0);
          MD.superDebug("oldYPos", oldYPos, 0);

          switch(scale) {
              case 0:
                  //No Scale
                  newWidth = oldWidth;
                  newHeight = oldHeight;
                  break;
              case 1:
                  //Random
                  var r_temp = Math.floor(Math.random() * scale_rnd);
                  MD.superDebug("r_temp", r_temp, 0);
                  if(Math.random() > 0.5) {
                    newWidth = Math.floor(grid_old_w + r_temp);
                    newHeight = Math.floor(grid_old_h + r_temp);
                  } else {
                    newWidth = Math.floor(grid_old_w - r_temp);
                    newHeight = Math.floor(grid_old_h - r_temp);
                  }
                  break;
              case 2:
                  //Scale PX
                  newWidth = Math.floor(oldWidth) + Math.floor(scale_px);
                  var scale_ratio = newWidth / oldWidth;
                  MD.superDebug("scale_ratio", scale_ratio, 0);
                  newHeight = Math.floor(oldHeight) * scale_ratio;
                  break;
              case 3:
                  //Scale Percentage
                  newWidth = Math.round(oldWidth * (scale_pr / 100));
                  newHeight = Math.round(oldHeight * (scale_pr / 100));
                  break;
          }

          MD.superDebug("newWidth", newWidth, 0);
          MD.superDebug("newHeight", newHeight, 0);


          // Position
        switch(position) {
              case 0:
                  //From center
                  newXPos = oldXPos - ((newWidth - oldWidth) / 2);
                  newYPos = oldYPos - ((newHeight - oldHeight) / 2);
                  break;
              case 1:
                  //From corner
                  newXPos = oldXPos;
                  newYPos = oldYPos;
                  break;
              case 2:
                  //Horizontal
                  newXPos = oldXPos + position_inc;
                  newYPos = Math.round(oldYPos - ((newHeight - oldHeight) / 2));
                  break;
                case 3:
                  //Vertical
                  newXPos = Math.round(oldXPos - ((newWidth - oldWidth) / 2));
                  newYPos = oldYPos + position_inc;
                  break;
                case 4:
                  //Diagonal
                  newXPos = oldXPos + position_inc;
                  newYPos = oldYPos + position_inc;
                  break;
                case 5:
                  //Random
                  newXPos = Math.round(Math.floor((Math.random() * position_rnd_x) + 1));
                  newYPos = Math.round(Math.floor((Math.random() * position_rnd_y) + 1));    
                  break;
                case 6:
                  //Grid
                  grid_row_count = grid_row_count + 1;
                  if(grid_row_count >= grid_x) {
                    grid_row_count = 0;
                    //newXPos = Math.round(grid_old_x - ((newWidth - oldWidth) / 2));
                    newXPos = grid_old_x - ((newWidth - oldWidth) / 2);
                    newYPos = grid_old_y + position_grid_y_inc;
                    grid_old_y = newYPos;
                  } else {
                    //newXPos = oldXPos + Math.floor(position_grid_x_inc);
                    newXPos = oldXPos + position_grid_x_inc;
                    //newYPos = Math.round(oldYPos - ((newHeight - oldHeight) / 2));
                    newYPos = oldYPos - ((newHeight - oldHeight) / 2);
                  }
                  break;
          }

          MD.superDebug("newXPos", newXPos, 0);
          MD.superDebug("newYPos", newYPos, 0);

          [frame setWidth: newWidth]
          [frame setHeight: newHeight]
          [frame setX: newXPos]
          [frame setY: newYPos]

      }

      // Create a parent group called 'Looper_Group'
      groupLayer1 = MSLayerGroup.new();
      MD.current.addLayers([groupLayer1]);
      groupLayer1.setName("Looper_Group");
      
      // Remember the group's ID
      created_looper_group = groupLayer1.objectID();
      
      // Add child group and settings text to parent group 'Looper_Group'
      MD.current.removeLayer(groupLayer);
      groupLayer1.addLayers([groupLayer]);

      // Resize group to fit all children
      groupLayer.resizeToFitChildrenWithOption(0);
      groupLayer1.resizeToFitChildrenWithOption(0);

      MD.superDebug("- - runLooper function completed - -");
      
  },

  setOpacity: function( l, lop, o, jj )
  {
    switch(o) {
        case 1:
            //No Change
            break;
        case 2:
            //Random opacity
            [[[l style] contextSettings] setOpacity:(Math.random())]
            break;
        case 3:
            //Opacity 0 to 1
            if(jj > 0) {
              MD.superDebug("jj", jj, 0);
              var opa_inc;
              opa_inc = 100/lop;
              MD.superDebug("opa_inc", opa_inc, 0);
              opacity_val = opacity_val + opa_inc;
              MD.superDebug("opacity_val", opacity_val, 0);
              [[[l style] contextSettings] setOpacity:(opacity_val/100)]
            }
            break;
        case 4:
            //Opacity 1 to 0
            if(jj > 0) {
              MD.superDebug("jj", jj, 0);
              var opa_inc;
              opa_inc = 100/lop;
              MD.superDebug("opa_inc", opa_inc, 0);
              opacity_val = opacity_val - opa_inc;
              MD.superDebug("opacity_val", opacity_val, 0);
              [[[l style] contextSettings] setOpacity:(opacity_val/100)]
            }
            break;
    }
  },

  superDebug: function( lbl, val, insideLoop )
  {
      if(debugMode) {
          if(isNaN(insideLoop)) {
              if(isNaN(val)) {
                  log("LOOPER DEBUG // " + lbl);
              } else {
                  log("LOOPER DEBUG // " + lbl + ": " + val);  
              }
          } else {
              if(debugInsideLoop) {
                  if(isNaN(val)) {
                  log("LOOPER DEBUG // " + lbl);
                  } else {
                      log("LOOPER DEBUG // " + lbl + ": " + val);  
                  } 
              }
          }
      }
  }



});

var app = [NSApplication sharedApplication];

MD["Pattern"] = function()
{ 
    

    var self = MD,
    selection = MD.context.selection;   
    var self = this;

    this.scriptPath = MD.context.scriptPath;
    this.scriptPathRoot = this.scriptPath.stringByDeletingLastPathComponent();
    this.scriptResourcesPath = this.scriptPathRoot.stringByDeletingLastPathComponent() + '/Resources';
    var icon = NSImage.alloc().initByReferencingFile(this.scriptResourcesPath + '/' + "icon.png");


    var runPLugin = function()
    {
      
      sendEvent(MD.context, 'Trigger', 'Plugin triggered');

      var execute_code = 1;
      if (selection.count() <= 0) {
        sendEvent(MD.context, 'Error', 'selection.count() <= 0');
        showDialog("Looper", "Select a layer or group to duplicate. Cheers!");
        execute_code = 0;
      } else if (selection.count() > 1) {
        sendEvent(MD.context, 'Error', 'selection.count() > 1');
        showDialog("Looper", "Select only one layer or group to duplicate. Cheers!");
        execute_code = 0;
      } else {
          for(var i = 0; i < selection.count(); i++){
            var layer = selection[i];
            if (layer == MD.artboard) {
              sendEvent(MD.context, 'Error', 'layer == MD.artboard');
              showDialog("Looper", "Select a layer or group to duplicate. Cheers!");
                  execute_code = 0;
            }
        }
      }

      if(execute_code == 1) {
        sendEvent(MD.context, 'Trigger', 'Modal triggered');
        MD.patternPanel();
      }        
    }
    
    var showDialog = function(title, informativeText) {
      var alert = [[NSAlert alloc] init]
      [alert setMessageText: title]
      [alert setInformativeText: informativeText]
      [alert addButtonWithTitle: "OK"] // 1000
      alert.setIcon(icon);
      var responseCode = [alert runModal]
    }
    
  runPLugin();
}

var kUUIDKey = 'google.analytics.uuid'
var uuid = NSUserDefaults.standardUserDefaults().objectForKey(kUUIDKey)
if (!uuid) {
  uuid = NSUUID.UUID().UUIDString()
  NSUserDefaults.standardUserDefaults().setObject_forKey(uuid, kUUIDKey)
}

function jsonToQueryString(json) {
  return '?' + Object.keys(json).map(function(key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
  }).join('&')
}

var index = function (context, trackingId, hitType, props) {
  var payload = {
    v: 1,
    tid: trackingId,
    ds: 'Sketch%20' + NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString"),
    cid: uuid,
    t: hitType,
    an: context.plugin.name(),
    aid: context.plugin.identifier(),
    av: context.plugin.version()
  }
  if (props) {
    Object.keys(props).forEach(function (key) {
      payload[key] = props[key]
    })
  }

  var url = NSURL.URLWithString(
    NSString.stringWithFormat("https://www.google-analytics.com/collect%@", jsonToQueryString(payload))
  )

  if (url) {
    NSURLSession.sharedSession().dataTaskWithURL(url).resume()
  }
}

var key = 'UA-96570498-1';
var sendEvent = function (context, category, action, label) {
  var payload = {};
  payload.ec = category;
  payload.ea = action;
  return index(context, key, 'event', payload);
}
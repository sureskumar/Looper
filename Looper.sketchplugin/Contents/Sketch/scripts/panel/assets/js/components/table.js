(function () {

  var debugMode = false;

  var _submit,
    _close,
    send_loop,
    send_rotate_select,
    send_position,
    send_angle,
    send_rotate_inc_perf,
    send_rotate_sin,
    send_rotate_rnd,
    send_opacity,
    send_move_inc,
    send_move_rnd_x,
    send_move_rnd_y,
    send_grid_c,
    send_grid_r,
    send_grid_x,
    send_grid_y,
    send_scale,
    send_scale_px,
    send_scale_pr,
    send_scale_rnd;

  _looperDebug = function (lbl, val) {
    if(debugMode) {
        if(isNaN(val)) {
            console.log("LOOPER - " + lbl);
        } else {
            console.log("LOOPER - " + lbl + ": " + val);  
        }
    }
  }

  _close = function () {
    _looperDebug("Close button pressed");
    var options = {};
    MDAction('closePanel', options);
  }

  _cancel = function () {
    _looperDebug("Cancel button pressed");
    var options = {};
    MDAction('cancelPanel', options);
  }

  _submit = function () {
      
    var loop_auto,
    loop,
    rotate_select,
    rotate_center,
    rotate_auto,
    rotate_angle,
    rotate_inc_perf,
    rotate_sin,
    rotate_rnd,
    opacity_select,
    opacity_1,
    opacity_2,
    opacity_3,
    opacity,
    move_select,
    grid_select,
    move_direction,
    move_inc,
    move_rnd_x,
    move_rnd_y,
    scale_selection,
    scale_perf,
    scale_px,
    scale_pr,
    scale_rnd;

    loop = $('#input_count_txt').val().trim(); 
    _looperDebug("loop", loop);
    
    rotate_select = $('#input_angle_checkbox_1').is(':checked'); 
    _looperDebug("rotate_select", rotate_select);
    
    rotate_auto = $('#input_rot_1').is(':checked');    
    _looperDebug("rotate_auto", rotate_auto);

    rotate_angle = $('#input_angle_txt').val().trim(); 
    _looperDebug("rotate_angle", rotate_angle);

    rotate_inc_perf = $('#input_angle_dropdown_1').val().trim(); 
    _looperDebug("rotate_inc_perf", rotate_inc_perf);

    rotate_sin = $('#input_angle_sin_val').val().trim(); 
    _looperDebug("rotate_sin", rotate_sin);

    rotate_rnd = $('#input_angle_rnd_val').val().trim(); 
    _looperDebug("rotate_rnd", rotate_rnd);

    opacity_select = $('#input_opacity_toggle').is(':checked'); 
    _looperDebug("opacity_select", opacity_select);

    opacity_1 = $('#input_opacity_1').is(':checked'); 
    _looperDebug("opacity_1", opacity_1);

    opacity_2 = $('#input_opacity_2').is(':checked'); 
    _looperDebug("opacity_2", opacity_2);

    opacity_3 = $('#input_opacity_3').is(':checked'); 
    _looperDebug("opacity_3", opacity_3);

    move_select = $('#input_move_toggle').is(':checked'); 
    _looperDebug("move_select", move_select);

    move_direction = $('#input_move_dropdown').val().trim(); 
    _looperDebug("move_direction", move_direction);

    move_inc = $('#input_move_txt_1').val().trim(); 
    _looperDebug("move_inc", move_inc);

    move_rnd_x = $('#input_move_txt_2').val().trim(); 
    _looperDebug("move_rnd_x", move_rnd_x);

    move_rnd_y = $('#input_move_txt_3').val().trim(); 
    _looperDebug("move_rnd_y", move_rnd_y);

    grid_select = $('#input_grid_toggle').is(':checked'); 
    _looperDebug("grid_select", grid_select);

    scale_selection = $('#input_scale_toggle').is(':checked'); 
    _looperDebug("scale_selection", scale_selection);

    scale_perf = $('#input_scale_dropdown').val().trim(); 
    _looperDebug("scale_perf", scale_perf);

    scale_px = $('#input_scale_txt_1').val().trim(); 
    _looperDebug("scale_px", scale_px);

    scale_pr = $('#input_scale_txt_2').val().trim(); 
    _looperDebug("scale_pr", scale_pr);

    scale_rnd = $('#input_scale_txt_3').val().trim(); 
    _looperDebug("scale_rnd", scale_rnd);


    // Check if all txt input are numbers
    if(!isNaN(loop) && 
      !isNaN(rotate_angle) && 
      !isNaN(rotate_sin) && 
      !isNaN(rotate_rnd) && 
      !isNaN(move_inc) && 
      !isNaN(move_rnd_x) && 
      !isNaN(move_rnd_y) &&
      !isNaN($('#input_grid_txt_c').val().trim()) &&
      !isNaN($('#input_grid_txt_r').val().trim()) &&
      !isNaN($('#input_grid_txt_x').val().trim()) &&
      !isNaN($('#input_grid_txt_y').val().trim()) &&
      !isNaN(scale_px) && 
      !isNaN(scale_pr) && 
      !isNaN(scale_rnd)) {
          
          var options = {};
          
          // Loop / Count
          options.send_loop = loop;
          
          // Rotate
          if (rotate_select) {
            options.send_rotate_select = 0;
          } else {
            options.send_rotate_select = 1;
          }

          switch(rotate_inc_perf) {
              case "Linear":
                  options.send_rotate_inc_perf = 0;
                  break;
              case "Sinusoidal":
                  options.send_rotate_inc_perf = 1;
                  break;
              case "Random":
                  options.send_rotate_inc_perf = 2;
                  break;
          }

          if (rotate_auto) {
            options.send_angle = (360/loop);
            options.send_rotate_inc_perf = 0;
          } else {
            options.send_angle = rotate_angle;
          }

          options.send_rotate_sin = rotate_sin;
          options.send_rotate_rnd = rotate_rnd;
          
          // Opacity
          if (opacity_select) {
              if (opacity_1) options.send_opacity = 2;
              if (opacity_2) options.send_opacity = 3;
              if (opacity_3) options.send_opacity = 4;
          } else {
              options.send_opacity = 1;
          }

          // Position
          if (move_select) {
              switch(move_direction) {
                  case "Horizontally":
                      options.send_position = 2;
                      break;
                  case "Vertically":
                      options.send_position = 3;
                      break;
                  case "Diagonally":
                      options.send_position = 4;
                      break;
                  case "Randomly":
                      options.send_position = 5;
                      break;
              }
          } else if (grid_select) {
              options.send_position = 6;
          } else {
            options.send_position = 0;
          }

          options.send_grid_c = $('#input_grid_txt_c').val().trim();
          _looperDebug("send_grid_c", $('#input_grid_txt_c').val().trim());

          options.send_grid_r = $('#input_grid_txt_r').val().trim();
          _looperDebug("send_grid_r", $('#input_grid_txt_r').val().trim());

          options.send_grid_x = $('#input_grid_txt_x').val().trim();
          _looperDebug("send_grid_x", $('#input_grid_txt_x').val().trim());

          options.send_grid_y = $('#input_grid_txt_y').val().trim();
          _looperDebug("send_grid_y", $('#input_grid_txt_y').val().trim());

          options.send_move_inc = move_inc;
          options.send_move_rnd_x = move_rnd_x;
          options.send_move_rnd_y = move_rnd_y;

          // Scale
          scale_px = Math.floor(scale_px);
          if (scale_px%2 == 0) {

          } else {
            scale_px = scale_px - 1;            
          }

          if (scale_selection) {
              switch(scale_perf) {
                  case "Pixels":
                      options.send_scale = 2;
                      break;
                  case "Percentage":
                      options.send_scale = 3;
                      break;
                  case "Randomly":
                      options.send_scale = 1;
                      break;
              }
          } else {
              options.send_scale = 0;
              options.send_scale_inc = scale_px;
          }

          options.send_scale_px = scale_px;
          options.send_scale_pr = scale_pr;
          options.send_scale_rnd = scale_rnd;

          //ga('send', 'event', 'table panel', 'submit', 'tables');
          MDAction('submit', options);
          
    }

    $('#close').focus();

  }

  _toggleAngleEnbale = function () {
      if ($('#input_angle_checkbox_1').is(':checked')) {
        $('#input_angle_controls').fadeTo( "fast", 1.0 );
        $('#input_angle_txt').removeAttr('disabled'); // Enable - Rotation angle
        $('#input_angle_dropdown_1').removeAttr('disabled'); // Enable - Rotation increment dropdown

        $('#input_angle_sin_val').removeAttr('disabled'); // Enable - Rotation sin
        $('#input_angle_rnd_val').removeAttr('disabled'); // Enable - Rotation rnd

      } else {
        $('#input_angle_controls').hide();
        $('#input_angle_txt').attr('disabled', 'disabled'); // Disable - Rotation angle
        $('#input_angle_dropdown_1').attr('disabled', 'disabled'); // Disable - Rotation increment dropdown

        $('#input_angle_sin_val').attr('disabled', 'disabled'); // Disable - Rotation sin
        $('#input_angle_rnd_val').attr('disabled', 'disabled'); // Disable - Rotation rnd
      }
  }
  _toggleAngleInc = function () {
      switch($('#input_angle_dropdown_1').val().trim()) {
          case "Linear":
              $('#input_angle_sin_div').hide();
              $('#input_angle_rnd_div').hide();
              break;
          case "Sinusoidal":
              $('#input_angle_sin_div').show();
              $('#input_angle_rnd_div').hide();
              break;
          case "Random":
              $('#input_angle_sin_div').hide();
              $('#input_angle_rnd_div').show();
              break;
      }
  }

  _toggleAngleAuto = function () {
      $('#input_angle_txt_div').fadeTo( "fast", 1.0 );
      $('#rot_perf').fadeTo( "fast", 1.0 );
      
  }
  _toggleAngleAuto1 = function () {
      $('#input_angle_txt_div').hide();
      $('#rot_perf').hide();
      
  }
  _toggleMove = function () {
      if ($('#input_move_toggle').is(':checked')) {
        $('#input_move_controls').fadeTo( "fast", 1.0 );
        $('#input_move_dropdown').removeAttr('disabled'); 
        $('#input_move_txt_1').removeAttr('disabled'); 
        $('#input_move_txt_2').removeAttr('disabled'); 
        $('#input_move_txt_3').removeAttr('disabled'); 
        $('#input_move_txt_3_div').hide();
        $('#input_grid_toggle').prop('checked', false);
        $('#count_div').show();
        $('#count_div').fadeTo( "fast", 1.0 );
      } else {
        $('#input_move_controls').hide();
        $('#input_move_dropdown').attr('disabled', 'disabled');
        $('#input_move_txt_1').attr('disabled', 'disabled');
        $('#input_move_txt_2').attr('disabled', 'disabled');
        $('#input_move_txt_3').attr('disabled', 'disabled'); 
      }
  }
  _toggleMoveDropdown = function () {
      switch($('#input_move_dropdown').val().trim()) {
          case "Horizontally":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              break;
          case "Vertically":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              break;
          case "Diagonally":
              $('#input_move_txt_1_div').show();
              $('#input_move_txt_2_div').hide();
              break;
          case "Randomly":
              $('#input_move_txt_1_div').hide();
              $('#input_move_txt_2_div').show();
              break;
          case "Grid":
              $('#input_move_txt_1_div').hide();
              $('#input_move_txt_2_div').hide();
              break;
      }
  }
  _toggleGridEnbale = function () {
      if ($('#input_grid_toggle').is(':checked')) {
          $('#input_move_txt_3_div').show();
          $('#input_move_controls').hide();
          $('#input_move_toggle').prop('checked', false);
          $('#count_div').fadeTo( "fast", 0.2 );
      } else {
          $('#input_move_txt_3_div').hide();
          $('#count_div').show();
          $('#count_div').fadeTo( "fast", 1.0 );
      }
  }
  _toggleGridEnbale();
  _toggleScale = function () {
      if ($('#input_scale_toggle').is(':checked')) {
        $('#input_scale_controls').fadeTo( "fast", 1.0 );
        $('#input_scale_dropdown').removeAttr('disabled'); 
        $('#input_scale_txt_1').removeAttr('disabled'); 
        $('#input_scale_txt_2').removeAttr('disabled'); 
        $('#input_scale_txt_3').removeAttr('disabled'); 
      } else {
        $('#input_scale_controls').hide();
        $('#input_scale_dropdown').attr('disabled', 'disabled');
        $('#input_scale_txt_1').attr('disabled', 'disabled');
        $('#input_scale_txt_2').attr('disabled', 'disabled');
        $('#input_scale_txt_3').attr('disabled', 'disabled'); 
      }
  }
  _toggleScaleDropdown = function () {
      switch($('#input_scale_dropdown').val().trim()) {
          case "Pixels":
              $('#input_scale_txt_1_div').show();
              $('#input_scale_txt_2_div').hide();
              $('#input_scale_txt_3_div').hide();
              break;
          case "Percentage":
              $('#input_scale_txt_1_div').hide();
              $('#input_scale_txt_2_div').show();
              $('#input_scale_txt_3_div').hide();
              break;
          case "Randomly":
              $('#input_scale_txt_1_div').hide();
              $('#input_scale_txt_2_div').hide();
              $('#input_scale_txt_3_div').show();
              break;
      }
  }
  _toggleOpacity = function () {
      if ($('#input_opacity_toggle').is(':checked')) {
        $('#input_opacity_controls').fadeTo( "fast", 1.0 );
      } else {
        $('#input_opacity_controls').hide();
      }
  }
  if($('#input_rot_1').is(':checked')) {
      $('#input_angle_txt_div').hide();
      $('#rot_perf').hide();
      
  }

  if ($('#input_scale_toggle').is(':checked')) {
      $('#input_scale_controls').fadeTo( "fast", 1.0 );
    } else {
      $('#input_scale_controls').hide();
    }

  if ($('#input_move_toggle').is(':checked')) {
    $('#input_move_controls').fadeTo( "fast", 1.0 );
  } else {
    $('#input_move_controls').hide();
  }




  _incrementTxtValue = function (txt_id, small_inc, large_inc, flt) {
      $(txt_id).on('keydown', function (event) {

            if(flt) {
              var t_val = parseFloat($(txt_id).val().trim());
            } else {
              var t_val = parseInt($(txt_id).val().trim());
            }

            if (event.shiftKey && event.which == 38) { 
                t_val = t_val + large_inc;
                if(flt) {
                  t_val = _roundIt(t_val);
                }
                $(txt_id).val(t_val);
            } else if (event.shiftKey && event.which == 40) { 
                if(t_val > large_inc) {
                  t_val = t_val - large_inc;
                }
                if(flt) {
                  t_val = _roundIt(t_val);
                }
                $(txt_id).val(t_val);
            } else if (event.keyCode == 38) {
                t_val = t_val + small_inc;
                if(flt) {
                  t_val = _roundIt(t_val);
                }
                $(txt_id).val(t_val);
            } else if(event.keyCode == 40) {
                if(t_val > small_inc) {
                  t_val = t_val - small_inc;  
                }
                if(flt) {
                  t_val = _roundIt(t_val);
                }
                $(txt_id).val(t_val);
            }

            _submit();

            $(txt_id).focus();

      });
  }

  _roundIt = function (num) {
      return Math.round( num * 10 ) / 10;
  }


    // Increment Textbox
      // Count
      _incrementTxtValue('#input_count_txt', 1, 10, false);

      // Scale
      _incrementTxtValue('#input_scale_txt_1', 1, 10, false);
      _incrementTxtValue('#input_scale_txt_2', 1, 10, false);
      _incrementTxtValue('#input_scale_txt_3', 1, 10, false);

      // Move
      _incrementTxtValue('#input_move_txt_1', 1, 10, false);
      _incrementTxtValue('#input_move_txt_2', 1, 10, false);
      _incrementTxtValue('#input_move_txt_3', 1, 10, false);

      // Grid
      _incrementTxtValue('#input_grid_txt_c', 1, 10, false);
      _incrementTxtValue('#input_grid_txt_r', 1, 10, false);
      _incrementTxtValue('#input_grid_txt_x', 1, 10, false);
      _incrementTxtValue('#input_grid_txt_y', 1, 10, false);

      // Rotation
      _incrementTxtValue('#input_angle_txt', 1, 10, false);
      _incrementTxtValue('#input_angle_sin_val', 0.1, 1, true);
      _incrementTxtValue('#input_angle_rnd_val', 1, 10, false); 

  
  

  _toggleOpacity();
  _toggleScaleDropdown();
  _toggleMoveDropdown();
  _toggleAngleInc();
  _toggleAngleEnbale();

  
  $('#submit').on('click', _cancel);
  $('#close').on('click', _close);    



  _onChangeInput = function (element) {
    $(element).on('input',function() {
      _submit();  
      /*
      if ($('#preview_checkBox').is(':checked')) {
        _submit();  
      }
      */
    });
  }

  _onChangeTrigger = function (element) {
    $(element).on('click',function() {
        _submit();  
      /*
      if ($('#preview_checkBox').is(':checked')) {
        $('#submit').hide();
        $("#close").html('Done');
        _submit();  
      } else {
          $('#submit').fadeTo( "fast", 1.0 );
          $("#close").html('Close');
      }
      */
    });
  }

  //$('#submit').hide();
    

  // Input updates
      // Count
      _onChangeInput("#input_count_txt");

      // Scale
      _onChangeInput("#input_scale_txt_1");
      _onChangeInput("#input_scale_txt_2");
      _onChangeInput("#input_scale_txt_3");

      // Move
      _onChangeInput("#input_move_txt_1");
      _onChangeInput("#input_move_txt_2");
      _onChangeInput("#input_move_txt_3");

      // Grid
      _onChangeInput("#input_grid_txt_c");
      _onChangeInput("#input_grid_txt_r");
      _onChangeInput("#input_grid_txt_x");
      _onChangeInput("#input_grid_txt_y");

      // Rotation
      _onChangeInput("#input_angle_txt");
      _onChangeInput("#input_angle_sin_val");
      _onChangeInput("#input_angle_rnd_val");        
  
  // Click updates

      // Scale
      _onChangeTrigger("#input_scale_toggle");
      _onChangeTrigger("#input_scale_dropdown");

      // Move
      _onChangeTrigger("#input_move_toggle");
      _onChangeTrigger("#input_move_dropdown");

      // Grid
      _onChangeTrigger("#input_grid_toggle");

      // Rotate
      _onChangeTrigger("#input_angle_checkbox_1");
      _onChangeTrigger("#input_rot_1");
      _onChangeTrigger("#input_rot_2");
      _onChangeTrigger("#input_angle_dropdown_1");

      // Opacity
      _onChangeTrigger("#input_opacity_toggle");
      _onChangeTrigger("#input_opacity_1");
      _onChangeTrigger("#input_opacity_2");
      _onChangeTrigger("#input_opacity_3");

      // Preview checkbox        
      //_onChangeTrigger("#preview_checkBox");
    
    $('#close').focus();
    //$('#preview_checkBox').hide();

    $('#input_grid_toggle').on('change', _toggleGridEnbale); // Grid toggle    
    $('#input_angle_checkbox_1').on('change', _toggleAngleEnbale); // Rotate toggle
    $("#input_rot_1").on('change', _toggleAngleAuto1); // Rotate automatic toggle
    $("#input_rot_2").on('change', _toggleAngleAuto); // Rotate automatic toggle
    $('#input_angle_dropdown_1').on('change', _toggleAngleInc); // Rotate increment dropdown
    $('#input_move_toggle').on('change', _toggleMove); // Rotate automatic toggle
    $('#input_move_dropdown').on('change', _toggleMoveDropdown); // Move dropdown
    $('#input_scale_toggle').on('change', _toggleScale); // Rotate toggle
    $('#input_scale_dropdown').on('change', _toggleScaleDropdown); // Scale dropdown
    $('#input_opacity_toggle').on('change', _toggleOpacity); // Opacity toggle
    
    setTimeout(function () {
        _submit();  
    }, 500);
    

})();
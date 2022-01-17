
      $(".login").click(function () {
    

        alert("hello");
        $("#popout").show();
        $("#coverlayer").show();
        centerize_popout();
      });

      $("a.guanbi").click(function () {
        $("#coverlayer").hide();
        $("#popout").hide();
        
      });

      $(window).resize(function () {
        centerize_popout();
        centerize_popup();

      });
      function centerize_popout() {
        var _top = ($(window).height() - $("#popout").height()) / 2;
        var _left = ($(window).width() - $("#popout").width()) / 2;

        $("#popout").css({ top: _top, left: _left });
        $("#popup").css({ top: _top, left: _left });
      }
      function centerize_popup() {
        var _top = ($(window).height() - $("#popup").height()) / 2;
        var _left = ($(window).width() - $("#popup").width()) / 2;

        $("#popup").css({ top: _top, left: _left });
        $("#popup").css({ top: _top, left: _left });
      }
    
  


      $(".login").click(function () {
        // $("#popout").css({ display: block });

        $("#popout").show();
        $("#coverlayer").show();
        centerize_popout();
      });

      // $("#register").click(
      //   function(){
      //     $("#popout").hide();
      //     $("#popup").show();
      //     centerize_popup();
      //   }
      // )
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
    
    //   $(document).ready(function () {
    //     $("#denglu").mousedown(function (e) {
    //       $(this).css("cursor", "move"); //改变鼠标指针的形状
    //       var offset = $(this).offset(); //DIV在页面的位置
    //       var x = e.pageX - offset.left; //获得鼠标指针离DIV元素左边界的距离
    //       var y = e.pageY - offset.top; //获得鼠标指针离DIV元素上边界的距离
    //       $(document).bind("mousemove", function (ev) {
    //         //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件

    //         $("#popout").stop(); //加上这个之后

    //         var _x = ev.pageX - x; //获得X轴方向移动的值
    //         var _y = ev.pageY - y; //获得Y轴方向移动的值

    //         $("#popout").animate({ left: _x + "px", top: _y + "px" }, 10);
    //       });
    //     });

    //     $(document).mouseup(function () {
    //       $("#popout").css("cursor", "default");
    //       $(this).unbind("mousemove");
    //     });
    //   });

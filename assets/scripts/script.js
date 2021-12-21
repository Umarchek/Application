window.addEventListener("load", function (e) {
  const tweenApplication = new TimelineLite();
  const controllerApplication = new ScrollMagic.Controller();

  tweenApplication.add(
    TweenLite.to(".application-img", 400, {
      scale: 1.3,
      marginLeft: "-100px",
      marginTop: "150px",
    })
  );

  const sceneApplication = new ScrollMagic.Scene({
    triggerElement: ".applications-button",
    duration: 400,
    triggerHook: 10,
  })
    .addIndicators()
    .setTween(tweenApplication)
    .addTo(controllerApplication);

  // ========================================= header start
  const navbar_top_btn = document.querySelector(".button-navbar-top");
  const navbar_top_btn_2 = document.querySelector(".button-navbar-top-2");
  const navbar_top = document.querySelector("header .navbar-top");
  const navbar_bottom_btn = document.querySelector("header .navbar-bottom-btn");
  const navbar_dropdown = document.querySelector(
    "header .navbar-row  .dropdown"
  );
  const dropdown_menu = document.querySelector(
    "header .navbar-row .dropdown-menu"
  );
  const navbar_right_uslugi = document.querySelector(
    "header .navbar-row .navbar_right_uslugi"
  );
  const hover = document.querySelector("header .navbar .navbar_right .hover");

  navbar_top_btn.addEventListener("click", (e) => {
    e.preventDefault();
    navbar_top.style.top = "0";
  });
  navbar_top_btn_2.addEventListener("click", (e) => {
    e.preventDefault();
    navbar_top.style.top = "0";
  });
  navbar_bottom_btn.addEventListener("click", (e) => {
    e.preventDefault();
    navbar_top.style.top = "-150%";
  });

  navbar_dropdown.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown_menu.classList.toggle("opacity");
  });

  navbar_right_uslugi.addEventListener("mouseover", (e) => {
    e.preventDefault();
    hover.style.display = "block";
  });
  navbar_right_uslugi.addEventListener("mouseout", (e) => {
    e.preventDefault();
    hover.style.display = "none";
  });

  // header elephant

  function myFunction1(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "1000px",
            height: "1000px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 750 + scroll / 3.4 + "px",
            height: 750 + scroll / 3.4 + "px",
          });
        }
        if (scroll >= 8000) {
          $(".elephant-header").css({
            width: 750 + scroll / 32 + "px",
            height: 750 + scroll / 32 + "px",
          });
        }
        if (scroll >= 8400) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(min-width: 1701px)");
  myFunction1(x);
  x.addListener(myFunction1);

  function myFunction2(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "790px",
            height: "790px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 600 + scroll / 4.5 + "px",
            height: 600 + scroll / 4.5 + "px",
          });
        }
        if (scroll >= 8000) {
          $(".elephant-header").css({
            width: 540 + scroll / 32 + "px",
            height: 540 + scroll / 32 + "px",
          });
        }
        if (scroll >= 8400) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(max-width: 1700px)");
  myFunction2(x);
  x.addListener(myFunction2);

  function myFunction3(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "740px",
            height: "740px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 550 + scroll / 4.5 + "px",
            height: 550 + scroll / 4.5 + "px",
          });
        }
        if (scroll >= 8000) {
          $(".elephant-header").css({
            width: 490 + scroll / 32 + "px",
            height: 490 + scroll / 32 + "px",
          });
        }
        if (scroll >= 8400) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(max-width: 1500px)");
  myFunction3(x);
  x.addListener(myFunction3);

  function myFunction4(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "690px",
            height: "690px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 500 + scroll / 4.5 + "px",
            height: 500 + scroll / 4.5 + "px",
          });
        }
        if (scroll >= 8000) {
          $(".elephant-header").css({
            width: 440 + scroll / 32 + "px",
            height: 440 + scroll / 32 + "px",
          });
        }
        if (scroll >= 8400) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(max-width: 1000px)");
  myFunction4(x);
  x.addListener(myFunction4);

  function myFunction5(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll < 800) {
          $(".elephant-header").css({
            position: "absolute",
            top: "900px",
          });
        }
        if (scroll >= 800) {
          $(".elephant-header").css({
            position: "fixed",
            top: "90px",
          });
        }
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "690px",
            height: "690px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 500 + scroll / 4.5 + "px",
            height: 500 + scroll / 4.5 + "px",
          });
        }
        if (scroll >= 8000) {
          $(".elephant-header").css({
            width: 440 + scroll / 32 + "px",
            height: 440 + scroll / 32 + "px",
          });
        }
        if (scroll >= 8300) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(max-width: 989px)");
  myFunction5(x);
  x.addListener(myFunction5);

  function myFunction6(x, x2) {
    if (x.matches) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll < 800) {
          $(".elephant-header").css({
            position: "absolute",
            top: "990px",
          });
        }
        if (scroll >= 800) {
          $(".elephant-header").css({
            position: "fixed",
            top: "190px",
          });
        }
        if (scroll >= 850) {
          $(".elephant-header").css({
            width: "600px",
            height: "600px",
            transition: "0s",
          });
        } else {
          $(".elephant-header").css({
            width: 400 + scroll / 4.5 + "px",
            height: 400 + scroll / 4.5 + "px",
          });
        }
        if (scroll >= 8700) {
          $(".elephant-header").css({
            display: "block",
            transition: "1s",
          });
        }
        if (scroll >= 9000) {
          $(".elephant-header").css({
            display: "none",
          });
        }
      });
    }
  }

  var x = window.matchMedia("(max-width: 850px)");
  myFunction6(x);
  x.addListener(myFunction6);

  var controllerElephant = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: ".results",
  })
    .setClassToggle(".elephant-header", "fade-in")
    .addIndicators({
      name: "fade scene",
      colorTrigger: "black",
      colorStart: "yellow",
    })
    .addTo(controllerElephant);

  const tweenMain = new TimelineLite();
  const controllerMain = new ScrollMagic.Controller();



  tweenMain
    .add(
      TweenLite.to(".mainLink1", 1, {
        position: "relative",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink1`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink2", 80, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink2`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink3", 80, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink3`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink4", 50, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink4`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink5", 50, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink5`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink6", 50, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(`.mainLink6`, 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink7", 80, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".MainTextSpan", 80, {
        position: "relative",
        zIndex: "10",
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink7", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".mainLink7", 1, {
        position: "relative",
        zIndex: "10",
        textDecoration: "line-through 3px",
      })
    )
    .add(
      TweenLite.to(".mainLink1", 800, {
        position: "relative",
        zIndex: "10",
        opacity: 1,
      })
    );

  const sceneMain = new ScrollMagic.Scene({
    triggerElement: ".Main",
    duration: 7000,
    triggerHook: 0,
  })
    .setTween(tweenMain)
    .addIndicators()
    .setPin(".Main")
    .addTo(controllerMain);

  // ========================================= header end

  // ------------------------ Toshpolat start ----------------------------

  // ------------------------ Toshpolat end ----------------------------

  // ========================================== Result start

  var duraction = 900;
  var hook = 0.05;

  let fixed_one = ".fixed_one";
  let fixed_two = ".fixed_two";

  function myFunction(w990, w768, w320) {
    if (w990.matches) {
      duraction = 680;
      hook = 0.08;
    }
    if (w768.matches) {
      duraction = 500;
      hook = 0.01;
    }
    if (w320.matches) {
      fixed_one = null;
      fixed_two = null;
    }
    return;
  }

  var w990 = window.matchMedia("(max-width: 1559px)");
  var w768 = window.matchMedia("(max-width: 989px)");
  var w320 = window.matchMedia("(max-width: 767px)");
  myFunction(w990, w768, w320);
  w768.addListener(myFunction);
  w990.addListener(myFunction);
  w320.addListener(myFunction);

  const tweenB = new TimelineLite();
  const tweenB2 = new TimelineLite();

  const controller1 = new ScrollMagic.Controller();
  const scene1 = new ScrollMagic.Scene({
    triggerElement: fixed_one,
    duration: duraction,
    triggerHook: hook,
  })

    .setTween(tweenB)
    .addIndicators()
    .setPin(fixed_one)
    .addTo(controller1);
  // .addIndicators()
  const sceneB = new ScrollMagic.Scene({
    triggerElement: fixed_two,
    duration: duraction,
    triggerHook: hook,
  })
    .setTween(tweenB2)
    .addIndicators()
    .setPin(fixed_two)
    .addTo(controller1);
  // .addIndicators()

  // ========================================== Result end

  // ========================================== Strategy start.
  
  const tween = new TimelineLite();
  const tween2 = new TimelineLite();
  function myFunctionStrategy1231(x) {
    if (x.matches) {
      tween
        .add(
          TweenLite.to(".content1__block", 800, {
            left: "43%",
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 500, {
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "30%",
            left: "247px",
            position: "fixed",
            zIndex: -100,
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            opacity: 1,
            borderRadius: 12,
            left: "247px",
            background: "#EBF2F5",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            width: 490,
            height: 340,
            left: "247px",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0.2,
            left: "247px",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0,
            backgroundImage: "url(./assets/images/site.svg)",
            backgroundColor: "transparent",
            left: "247px",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            display: "flex",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            display: "block",
          })
        );
      tween2
        .add(
          TweenLite.to(".back", 1, {
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            opacity: 0,
            position: "fixed",
            top: "30%",
            left: "247px",
            backgroundImage: "url(./assets/images/site2.svg)",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            top: 0,
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 100, {
            bottom: "5%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 100, {
            top: "50%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 2300, {
            opacity: 1,
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "-150%",
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".back", 400, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 10, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            display: "none",
            left: "247px",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "none",
          })
        );
    } else {
    }
  }

  var x = window.matchMedia("(max-width: 990px)");
  myFunctionStrategy1231(x);
  x.addListener(myFunctionStrategy1231);

  function myFunctionStrategy1232(x1) {
    if (x1.matches) {
      tween
        .add(
          TweenLite.to(".content1__block", 800, {
            left: "139px !important",
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 500, {
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "30%",
            left: "138px !important",
            position: "fixed",
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            opacity: 1,
            borderRadius: 12,
            left: "138px !important",
            background: "#EBF2F5",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            left: "138px !important",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0.2,
            left: "138px !important",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0,
            backgroundImage: "url(./assets/images/site.svg)",
            backgroundColor: "transparent",
            left: "138px !important",
            top: "30%",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            display: "flex",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            display: "block",
          })
        );
      tween2
        .add(
          TweenLite.to(".back", 1, {
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            opacity: 0,
            position: "fixed",
            top: "30%",
            left: "138px !important",
            backgroundImage: "url(./assets/images/site2.svg)",
            left:'213px !important',
            padding:'182px !important'
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            top: 0,
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 100, {
            bottom: "5%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 100, {
            top: "50%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 2300, {
            opacity: 1,
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "-150%",
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".back", 400, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 10, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            display: "none",
            left: "138px !important",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "none",
          })
        );
    } else {
    }
  }

  var x1 = window.matchMedia("(max-width: 989px)");
  myFunctionStrategy1232(x1);
  x1.addListener(myFunctionStrategy1232);

  function myFunctionStrategy1233(x2) {
    if (x2.matches) {
      tween
        .add(
          TweenLite.to(".content1__block", 800, {
            left: "43%",
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 500, {
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "30%",
            left: "38.5%",
            position: "fixed",
            opacity: 0,
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            opacity: 1,
            borderRadius: 12,
            background: "#EBF2F5",
            left: "38.5%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 150, {
            width: 490,
            height: 340,
            left: "38.5%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0.2,
            left: "38.5%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 450, {
            opacity: 0,
            left: "38.5%",
            backgroundImage: "url(./assets/images/site.svg)",
            backgroundColor: "transparent",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            display: "flex",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "block",
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            display: "block",
          })
        );

      tween2
        .add(
          TweenLite.to(".back", 1, {
            top: "0%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            opacity: 0,
            position: "fixed",
            top: "30%",
            // left: "34.5%",
            backgroundImage: "url(./assets/images/site2.svg)",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            top: 0,
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 100, {
            bottom: "5%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 1300, {
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 100, {
            top: "50%",
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".content1__block", 2300, {
            opacity: 1,
          })
        )
        .add(
          TweenLite.to(".back", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 1, {
            top: "-150%",
          })
        )
        .add(
          TweenLite.to(".back", 400, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__icons", 100, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__banners", 10, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".content1__block", 1, {
            display: "none",
          })
        )
        .add(
          TweenLite.to(".strategy__lines", 1, {
            display: "none",
          })
        );
    }
  }

  var x2 = window.matchMedia("(max-width:1559px)");
  myFunctionStrategy1233(x2);
  x2.addListener(myFunctionStrategy1233);

  tween
    .add(
      TweenLite.to(".content1__block", 800, {
        left: "43%",
        top: "0%",
      })
    )
    .add(
      TweenLite.to(".content1__block", 500, {
        opacity: 0,
      })
    )
    .add(
      TweenLite.to(".content1__block", 1, {
        top: "30%",
        left: "45%",
        position: "fixed",
        zIndex: -100,
        opacity: 0,
      })
    )
    .add(
      TweenLite.to(".content1__block", 150, {
        opacity: 1,
        borderRadius: 12,
        background: "#EBF2F5",
      })
    )
    .add(
      TweenLite.to(".content1__block", 150, {
        width: 490,
        height: 340,
        left: "37.1%",
      })
    )
    .add(
      TweenLite.to(".content1__block", 450, {
        opacity: 0.2,
      })
    )
    .add(
      TweenLite.to(".content1__block", 450, {
        opacity: 1,
        backgroundImage: "url(./assets/images/site.svg)",
        backgroundColor: "transparent",
      })
    )
    .add(
      TweenLite.to(".strategy__icons", 1, {
        display: "block",
      })
    )
    .add(
      TweenLite.to(".strategy__banners", 1, {
        display: "flex",
      })
    )
    .add(
      TweenLite.to(".strategy__lines", 1, {
        display: "block",
      })
    )
    .add(
      TweenLite.to(".back", 1, {
        display: "block",
      })
    );

  tween2
    .add(
      TweenLite.to(".back", 1, {
        top: "0%",
      })
    )
    .add(
      TweenLite.to(".content1__block", 1, {
        opacity: 1,
        position: "fixed",
        top: "30%",
        left: "37.1%",
        backgroundImage: "url(./assets/images/site2.svg)",
      })
    )
    .add(
      TweenLite.to(".content1__block", 1300, {
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".strategy__icons", 100, {
        top: 0,
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".content1__block", 1300, {
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".strategy__banners", 100, {
        bottom: "5%",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".content1__block", 1300, {
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".strategy__lines", 100, {
        top: "50%",
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".content1__block", 2300, {
        opacity: 1,
      })
    )
    .add(
      TweenLite.to(".back", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".content1__block", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".strategy__lines", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".strategy__icons", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".strategy__banners", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".strategy__banners", 1, {
        top: "-150%",
      })
    )
    .add(
      TweenLite.to(".back", 400, {
        display: "none",
      })
    )
    .add(
      TweenLite.to(".strategy__icons", 100, {
        display: "none",
      })
    )
    .add(
      TweenLite.to(".strategy__banners", 10, {
        display: "none",
      })
    )
    .add(
      TweenLite.to(".content1__block", 1, {
        display: "none",
      })
    )
    .add(
      TweenLite.to(".strategy__lines", 1, {
        display: "none",
      })
    );

  const Controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
    triggerElement: ".strategy2",
    duration: 3500,
    triggerHook: 0,
  })
    .setTween(tween)
    // .addIndicators()
    .setPin(".strategy2")
    .addTo(Controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".bottom",
    duration: 0,
    triggerHook: 100,
  })
    // .addIndicators()
    .setClassToggle(".center", "toRight")
    .addTo(Controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".blackBg",
    duration: 3000,
    triggerHook: 110,
  })
    .setPin(".blackBg")
    .setTween(tween2)
    // .addIndicators()
    .addTo(Controller);

  // ========================================== Strategy end

  // ==================================== diigital start

  const tweenA = new TimelineLite();
  const ControllerA = new ScrollMagic.Controller();

  const sceneA = new ScrollMagic.Scene({
    duration: 0,
    triggerHook: 0,
  })
    .setTween(tweenA)

    .addTo(ControllerA);

  const scene2a = new ScrollMagic.Scene({
    triggerElement: ".fam_span",
    duration: 0,
    triggerHook: 200,
  })
    .setClassToggle(".dig_h3", "m_l")
    .addTo(ControllerA);

  const scene3a = new ScrollMagic.Scene({
    triggerElement: ".dig_h3",
    duration: 0,
    triggerHook: 200,
  })
    .setClassToggle(".titlee", "fgh")
    .addTo(ControllerA);

  const scene4a = new ScrollMagic.Scene({
    triggerElement: ".jkl",
    duration: 0,
    triggerHook: 200,
  })
    .setClassToggle(".digital_center", "fgh")
    .addTo(ControllerA);
  const scene6a = new ScrollMagic.Scene({
    triggerElement: ".digital_center",
    duration: 0,
    triggerHook: 200,
  })
    .setClassToggle(".diag", "fgh")
    .addTo(ControllerA);

  const scene5a = new ScrollMagic.Scene({
    triggerElement: ".digital_center",
    duration: 0,
    triggerHook: 200,
  })
    .setClassToggle(".grad_blue", "bnm")
    .addTo(ControllerA);

  // ==================================== diigital end
});

//  // ====990

//  const tweenB990 = new TimelineLite();
//  const tweenB2990 = new TimelineLite();

//  const controller1990 = new ScrollMagic.Controller();
//  const scene1990 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_one1",
//    duration: 680,
//    triggerHook: 0.08,
//  })

//    .setTween(tweenB990)
//    .addIndicators()
//    .setPin(".fixed_one1")
//    .addTo(controller1990);
//    // .addIndicators()

//  const sceneB990 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_two1",
//    duration: 680,
//    triggerHook: 0.08,
//  })
//    .setTween(tweenB2990)
//    .addIndicators()
//    .setPin(".fixed_two1")
//    .addTo(controller1990);
//    // .addIndicators()

//  // ========768

//  const tweenB768 = new TimelineLite();
//  const tweenB2768 = new TimelineLite();

//  const controller1768 = new ScrollMagic.Controller();
//  const scene1768 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_one2",
//    duration: 500,
//    triggerHook: 0.01,
//  })

//    .setTween(tweenB768)
//    .addIndicators()
//    .setPin(".fixed_one2")
//    .addTo(controller1768);
//    // .addIndicators()

//  const sceneB768 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_two2",
//    duration: 500,
//    triggerHook: 0.01,
//  })
//    .setTween(tweenB2768)
//    .addIndicators()
//    .setPin(".fixed_two2")
//    .addTo(controller1768);
//    // .addIndicators()

//  // ========320

//  const tweenB320 = new TimelineLite();
//  const tweenB2320 = new TimelineLite();

//  const controller1320 = new ScrollMagic.Controller();
//  const scene1320 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_one3",
//    duration: 500,
//    triggerHook: 0.01,
//  });

//  // .setTween(tweenB320)
//  // .addIndicators()
//  // .setPin('.fixed_one3')
//  // .addTo(controller1320)

//  const sceneB320 = new ScrollMagic.Scene({
//    triggerElement: ".fixed_two3",
//    duration: 500,
//    triggerHook: 0.01,
//  });
//  // .setTween(tweenB2320)
//  // .addIndicators()
//  // .setPin('.fixed_two3')
//  // .addTo(controller1320)

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function ($) {
    "use strict";
    /* owl-carousel */

    if (".banner-slider".length > 0) {
        $(".banner-slider").owlCarousel({
            autoplay: true,
            dots: false,
            nav: true,
            loop: true,
            margin: 30,
            lazyLoad: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    /* highlight js */
    if ('pre code'.length > 0) {
        document.querySelectorAll('pre code').forEach(function (block) {
            hljs.highlightBlock(block);
        });
    }
    /* slimmenu */

    if ('.main-menu'.length > 0) {
        $('.main-menu').slimmenu({
            resizeWidth: "991",
            animSpeed: 500,
            easingEffect: 'easeOutSine'

        });
    }
    /* testimonial slider */

    if ('.testimonial-slider'.length > 0) {
        $('.testimonial-slider').owlCarousel({
            thumbs: true,
            thumbsPrerendered: true,
            autoplay: true,
            dots: false,
            mouseDrag: false,
            stagePadding: 30,
            margin: 60,
            loop: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                    stagePadding: 15
                },
                768: {
                    items: 1,
                    dots: false,
                    stagePadding: 15
                },
                1200: {
                    items: 1,
                    dots: false
                }
            }
        });
    }
    if ('.latest-slider'.length > 0) {
        $('.latest-slider').owlCarousel({
            autoplay: true,
            dots: false,
            margin: 30,
            nav: false,
            loop: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }

    //scrollUp//

    var visible = false;
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (!visible && scrollTop > 100) {
            $(".scrollToTop").fadeIn();
            visible = true;
        } else if (visible && scrollTop <= 100) {
            $(".scrollToTop").fadeOut();
            visible = false;
        }
    });
    $(".scrollToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /*  aos js*/
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 400,
        easing: 'ease',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'

    });
    $(window).on('load', function () {

        /*  Preloader js*/
        var preLoder = $(".overlay-loader");
        preLoder.fadeOut(1000);
    });

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 56
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQyxXQUFTLENBQVQsRUFBWTtBQUNUO0FBQ0E7O0FBQ0EsUUFBSyxnQkFBRCxDQUFtQixNQUFuQixHQUE0QixDQUFoQyxFQUFtQztBQUMvQixVQUFFLGdCQUFGLEVBQW9CLFdBQXBCLENBQWdDO0FBQzVCLHNCQUFVLElBRGtCO0FBRTVCLGtCQUFNLEtBRnNCO0FBRzVCLGlCQUFLLElBSHVCO0FBSTVCLGtCQUFNLElBSnNCO0FBSzVCLG9CQUFRLEVBTG9CO0FBTTVCLHNCQUFVLElBTmtCO0FBTzVCLG9CQUFRLElBUG9CO0FBUTVCLHdCQUFZO0FBQ1IsbUJBQUc7QUFDQywyQkFBTztBQURSLGlCQURLO0FBSVIscUJBQUs7QUFDRCwyQkFBTztBQUROLGlCQUpHO0FBT1Isc0JBQU07QUFDRiwyQkFBTztBQURMO0FBUEU7QUFSZ0IsU0FBaEM7QUFvQkg7QUFDRDtBQUNBLFFBQUssVUFBRCxDQUFhLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsaUJBQVMsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsT0FBdEMsQ0FBOEMsVUFBQyxLQUFELEVBQVc7QUFDckQsaUJBQUssY0FBTCxDQUFvQixLQUFwQjtBQUNILFNBRkQ7QUFHSDtBQUNEOztBQUVBLFFBQUssWUFBRCxDQUFlLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDM0IsVUFBRSxZQUFGLEVBQWdCLFFBQWhCLENBQXlCO0FBQzlCLHlCQUFhLEtBRGlCO0FBRTlCLHVCQUFVLEdBRm9CO0FBR3JCLDBCQUFjOztBQUhPLFNBQXpCO0FBUUg7QUFDSjs7QUFFRyxRQUFLLHFCQUFELENBQXdCLE1BQXhCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3JDLFVBQUUscUJBQUYsRUFBeUIsV0FBekIsQ0FBcUM7QUFDekMsb0JBQVEsSUFEaUM7QUFFekMsK0JBQW1CLElB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SCxFQUVTLGVBRlQ7QUFHQSx1QkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBWEY7QUFjQSxDQTNKQSxFQTJKQyxNQTNKRCxDQUFEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKCQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyogb3dsLWNhcm91c2VsICovXHJcbiAgICBpZiAoKFwiLmJhbm5lci1zbGlkZXJcIikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoXCIuYmFubmVyLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2OiB0cnVlLCBcclxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICAgICAgbWFyZ2luOiAzMCxcclxuICAgICAgICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogaGlnaGxpZ2h0IGpzICovXHJcbiAgICBpZiAoKCdwcmUgY29kZScpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUgY29kZScpLmZvckVhY2goKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgIGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyogc2xpbW1lbnUgKi9cclxuXHJcbiAgICBpZiAoKCcubWFpbi1tZW51JykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICQoJy5tYWluLW1lbnUnKS5zbGltbWVudSh7XHJcblx0XHRcdHJlc2l6ZVdpZHRoOiBcIjk5MVwiLFxyXG5cdFx0XHRhbmltU3BlZWQ6NTAwLFxyXG4gICAgICAgICAgICBlYXNpbmdFZmZlY3Q6ICdlYXNlT3V0RWxhc3RpYycsXHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cclxuICAgIH0gIFxyXG5cdC8qIHRlc3RpbW9uaWFsIHNsaWRlciAqL1xyXG5cclxuICAgIGlmICgoJy50ZXN0aW1vbmlhbC1zbGlkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAkKCcudGVzdGltb25pYWwtc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHR0aHVtYnM6IHRydWUsXHJcblx0XHRcdHRodW1ic1ByZXJlbmRlcmVkOiB0cnVlLFxyXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vdXNlRHJhZzpmYWxzZSwgXHJcblx0XHRcdHN0YWdlUGFkZGluZzozMCxcclxuXHRcdFx0bWFyZ2luOjYwLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgbGF6eUxvYWQ6IHRydWUsXHJcblx0XHRcdHJlc3BvbnNpdmU6IHtcclxuICAgICAgICAgICAgICAgIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogMSxcclxuXHRcdFx0XHRcdGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c3RhZ2VQYWRkaW5nOjE1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG5cdFx0XHRcdFx0ZG90czogZmFsc2UsXHJcblx0XHRcdFx0XHRzdGFnZVBhZGRpbmc6MTUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG5cdFx0XHRcdFx0ZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHRcdCAgfSk7XHJcblxyXG4gICAgfSAgXHJcblx0aWYgKCgnLmxhdGVzdC1zbGlkZXInKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAkKCcubGF0ZXN0LXNsaWRlcicpLm93bENhcm91c2VsKHtcclxuXHRcdFx0YXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG5cdFx0XHRtYXJnaW46MzAsXHJcbiAgICAgICAgICAgIG5hdjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYXp5TG9hZDogdHJ1ZSxcclxuXHRcdFx0cmVzcG9uc2l2ZToge1xyXG4gICAgICAgICAgICAgICAgMDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cdFx0ICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9zY3JvbGxVcC8vXHJcblxyXG5cdCAgdmFyIHZpc2libGUgPSBmYWxzZTtcclxuXHQgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2Nyb2xsVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuXHRcdGlmICghdmlzaWJsZSAmJiBzY3JvbGxUb3AgPiAxMDApIHtcclxuXHRcdCAgJChcIi5zY3JvbGxUb1RvcFwiKS5mYWRlSW4oKTtcclxuXHRcdCAgdmlzaWJsZSA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKHZpc2libGUgJiYgc2Nyb2xsVG9wIDw9IDEwMCkge1xyXG5cdFx0ICAkKFwiLnNjcm9sbFRvVG9wXCIpLmZhZGVPdXQoKTtcclxuXHRcdCAgdmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdCAgfSk7XHJcblx0ICAkKFwiLnNjcm9sbFRvVG9wXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7XHJcblx0XHQgIHNjcm9sbFRvcDogMFxyXG5cdFx0fSwgODAwKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHQgIH0pO1xyXG4gXHJcblxyXG4gXHJcblxyXG4gXHRcclxuICAgIC8qICBhb3MganMqL1xyXG4gICAgQU9TLmluaXQoe1xyXG4gICAgICAgIG9mZnNldDogMTIwLCBcclxuICAgICAgICBkZWxheTogMCwgXHJcbiAgICAgICAgZHVyYXRpb246IDQwMCwgXHJcbiAgICAgICAgZWFzaW5nOiAnZWFzZScsIFxyXG4gICAgICAgIG9uY2U6IHRydWUsIFxyXG4gICAgICAgIG1pcnJvcjogZmFsc2UsXHJcbiAgICAgICAgYW5jaG9yUGxhY2VtZW50OiAndG9wLWJvdHRvbScsXHJcblxyXG4gICAgfSk7XHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLyogIFByZWxvYWRlciBqcyovXHJcbiAgICAgICAgdmFyIHByZUxvZGVyID0gJChcIi5vdmVybGF5LWxvYWRlclwiKTtcclxuICAgICAgICBwcmVMb2Rlci5mYWRlT3V0KDEwMDApO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICQoJ2EuanMtc2Nyb2xsLXRyaWdnZXJbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XHJcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgc2Nyb2xsVG9wOiAodGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDU2KVxyXG4gICAgICAgIH0sIDEwMDAsIFwiZWFzZUluT3V0RXhwb1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG59KGpRdWVyeSkpOyJdfQ==



function getOS() {
    var OSName="unknown";
    if (navigator.appVersion.indexOf("Win")!=-1) return { name: "Windows.zip", icon: "windows"};
    if (navigator.appVersion.indexOf("Linux")!=-1) return { name: "Linux.appimage", icon: "linux"};
    if (navigator.appVersion.indexOf("Mac")!=-1) return { name: "macOS.dmg", icon: "apple"};
    if (navigator.appVersion.indexOf("X11")!=-1) return { name: "Linux.appimage", icon: "linux"};

    return { name: OSName, icon: "download"};
}


const getReleaseVersion = async () => {
    var url = "https://api.github.com/repos/rizinorg/cutter/releases/latest";
    var urlData = await fetch(url);
    var jsonData = await urlData.json();
    var tag = jsonData.tag_name;
    var notes = jsonData.body;
    return [tag, notes];
}



const getReleaseURLForPlatform = async (platform) => {
    var releaseURL = "https://github.com/rizinorg/cutter/releases/latest";
    var tag, notes;
    if (platform != "unknown") {
        [tag, notes] = await getReleaseVersion();
        releaseURL = "https://github.com/rizinorg/cutter/releases/download/" + tag + "/Cutter-" + tag + "-x64." + platform;
    }

    return releaseURL;
}

const setReleaseDownloadLinkForOS = async (os) => {
    if (os.icon) {
        var downloadButton = document.getElementById("downloadBtn");
        downloadButton.insertAdjacentHTML('afterbegin','<i class="fab fa-' + os.icon + '"></i>');
        downloadButton.href = await getReleaseURLForPlatform(os.name);
    }
}

const setDownloadLinksForAllPlatforms = async () => {
    var linuxURL = await getReleaseURLForPlatform("Linux.appimage");
    var windowsURL = await getReleaseURLForPlatform("Windows.zip");
    var macOSURL = await getReleaseURLForPlatform("macOS.dmg");

    document.getElementById("downloadMacOS").href = macOSURL;
    document.getElementById("downloadLinux").href = linuxURL;
    document.getElementById("downloadWindows").href = windowsURL;
}



const fillCutterVersion = async() => {
    const [tag, notes] = await getReleaseVersion();
    document.getElementById("cutterVersion").innerHTML = tag;
    
    var converter = new showdown.Converter();
    document.getElementById("release-notes-content").innerHTML = converter.makeHtml(notes);
}

// run only on main page
if (document.location.pathname.length < 2) {
    fillCutterVersion();
    setReleaseDownloadLinkForOS(getOS());
    setDownloadLinksForAllPlatforms();
}
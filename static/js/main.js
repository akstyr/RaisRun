$(function () {

  $('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });


    $(document).one('click', '.like-review', function(e) {
      $(this).html('<i class="fa fa-heart" aria-hidden="true"></i> You liked this');
      $(this).children('.fa-heart').addClass('animate-like');
    });
  

  $('.header__btn-menu').on('click', function () {
    $('.menu ul').slideToggle();
  });
  $(document).ready(function() {
    $("#single_1").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });

    $("#single_2").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });

    $("#single_3").fancybox({
    	openEffect : 'none',
    	closeEffect	: 'none',
    	helpers : {
    		title : {
    			type : 'outside'
    		}
    	}
    });

    $("#single_4").fancybox({
    	helpers : {
    		title : {
    			type : 'over'
    		}
    	}
    });
});

  $('#asd').html('<img src="img/photos/photo_2.jpg"../>');

  // Exif orientation value to css transform mapping
 // Does not include flipped orientations
 var rotation = {
  1: 'rotate(0deg)',
  3: 'rotate(180deg)',
  6: 'rotate(90deg)',
  8: 'rotate(270deg)'
};

function _arrayBufferToBase64(buffer) {
  var binary = ''
  var bytes = new Uint8Array(buffer)
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return window.btoa(binary);
}
var orientation = function(file, callback) {
  var fileReader = new FileReader();
  fileReader.onloadend = function() {
    var base64img = "data:" + file.type + ";base64," + _arrayBufferToBase64(fileReader.result);
    var scanner = new DataView(fileReader.result);
    var idx = 0;
    var value = 1; // Non-rotated is the default
    if (fileReader.result.length < 2 || scanner.getUint16(idx) != 0xFFD8) {
      // Not a JPEG
      if (callback) {
        callback(base64img, value);
      }
      return;
    }
    idx += 2;
    var maxBytes = scanner.byteLength;
    while (idx < maxBytes - 2) {
      var uint16 = scanner.getUint16(idx);
      idx += 2;
      switch (uint16) {
        case 0xFFE1: // Start of EXIF
          var exifLength = scanner.getUint16(idx);
          maxBytes = exifLength - idx;
          idx += 2;
          break;
        case 0x0112: // Orientation tag
          // Read the value, its 6 bytes further out
          // See page 102 at the following URL
          // http://www.kodak.com/global/plugins/acrobat/en/service/digCam/exifStandard2.pdf
          value = scanner.getUint16(idx + 6, false);
          maxBytes = 0; // Stop scanning
          break;
      }
    }
    if (callback) {
      callback(base64img, value);
    }
  }
  fileReader.readAsArrayBuffer(file);
};
$(function() {
  $('#file').change(function() {
    var file = $(this)[0].files[0];
    if (file) {
      orientation(file, function(base64img, value) {
        $('#placeholder1').attr('src', base64img);
        console.log(rotation[value]);
        var rotated = $('#placeholder2').attr('src', base64img);
        if (value) {
          rotated.css('transform', rotation[value]);
        }
      });
    }
  });
});

var img = new Image();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fileName = "";

$(document).ready(function() {
  $("#brightness-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.brightness(10).render();
    });
  });

  $("#brightness-dec").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.brightness(-10).render();
    });
  });

  $("#contrast-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.contrast(10).render();
    });
  });

  $("#contrast-dec").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.contrast(-10).render();
    });
  });

  $("#saturation-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.saturation(10).render();
    });
  });

  $("#saturation-dec").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.saturation(-10).render();
    });
  });

  $("#vibrance-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.vibrance(10).render();
    });
  });

  $("#vibrance-dec").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.vibrance(-10).render();
    });
  });

  $("#exposure-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.exposure(10).render();
    });
  });

  $("#exposure-dec").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.exposure(-10).render();
    });
  });

  $("#noise-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.noise(10).render();
    });
  });

  $("#sharpen-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.sharpen(10).render();
    });
  });

  $("#sepia-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.sepia(20).render();
    });
  });

  $("#hue-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.hue(10).render();
    });
  });

  $("#blur-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.stackBlur(5).render();
    });
  });

  $("#gamma-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.gamma(0.1).render();
    });
  });

  $("#clip-inc").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.clip(10).render();
    });
  });

  $("#vintage-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.vintage().render();
    });
  });

  $("#lomo-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.lomo().render();
    });
  });

  $("#calrity-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.clarity().render();
    });
  });

  $("#sincity-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.sinCity().render();
    });
  });

  $("#crossprocess-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.crossProcess().render();
    });
  });

  $("#pinhole-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.pinhole().render();
    });
  });

  $("#nostalgia-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.nostalgia().render();
    });
  });

  $("#majestic-btn").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      this.herMajesty().render();
    });
  });

  $("#download-btn").on("click", function(e) {
    var fileExtension = fileName.slice(-4);
    if (fileExtension == ".jpg" || fileExtension == ".png") {
      var actualName = fileName.substring(0, fileName.length - 4);
    }
    download(canvas, actualName + "-edited.jpg");
  });

  $("#render_bnt").on("click", function(e) {
    Caman("#canvas", img, function() {
      this.revert();
      
    });
  });

  $("#upload-file").on("change", function() {
    var file = document.querySelector("#upload-file").files[0];
    var reader = new FileReader();

    if (file) {
      fileName = file.name;
      reader.readAsDataURL(file);
    }

    reader.addEventListener(
      "load",
      function() {
        img = new Image();
        img.src = reader.result;
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          $("#canvas").removeAttr("data-caman-id");
        };
      },
      false
    );
  });
});

function download(canvas, filename) {
  var e;
  var lnk = document.createElement("a");

  lnk.download = filename;

  lnk.href = canvas.toDataURL("image/jpeg", 0.8);

  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );
    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}

});
function viewDiv(){
  document.getElementById("div1").style.display = "block";
};

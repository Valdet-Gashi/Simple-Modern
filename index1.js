$(document).ready(function () {
  $("#nav-about-us").click(function () {
    document.getElementById("circle1").style.fontWeight = "700";
    document.getElementById("circle2").style.fontWeight = "400";
    document.getElementById("circle3").style.fontWeight = "400";
    document.getElementById("circle4").style.fontWeight = "400";
  });
  $("#nav-projects").click(function () {
    document.getElementById("circle1").style.fontWeight = "400";
    document.getElementById("circle2").style.fontWeight = "700";
    document.getElementById("circle3").style.fontWeight = "400";
    document.getElementById("circle4").style.fontWeight = "400";
  });
  $("#nav-news").click(function () {
    document.getElementById("circle1").style.fontWeight = "400";
    document.getElementById("circle2").style.fontWeight = "400";
    document.getElementById("circle3").style.fontWeight = "700";
    document.getElementById("circle4").style.fontWeight = "400";
  });
  $("#nav-contact").click(function () {
    document.getElementById("circle1").style.fontWeight = "400";
    document.getElementById("circle2").style.fontWeight = "400";
    document.getElementById("circle3").style.fontWeight = "400";
    document.getElementById("circle4").style.fontWeight = "700";
  });
});
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        { scrollTop: $(hash).offset().top },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
$(document).ready(function () {
  $(".header__slick-slider-container").slick({ dots: !0, arrows: !1 });
  $(".news__slick-slider").slick({
    infinite: !0,
    centerMode: !0,
    arrows: !1,
    dots: !0,
    centerPadding: "30px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 4000,
    variableWidth: !0,
  });
});
$("#go-back").click(function () {
  $(".news__slick-slider").slick("slickPrev");
});
$("#go-forward").click(function () {
  $(".news__slick-slider").slick("slickNext");
});
let map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 40.6782, lng: -73.9442 },
  zoom: 14,
  styles: [
    { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text", stylers: [{ color: "#aaaaaa" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#999999" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [{ color: "#dddddd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "geometry.fill",
      stylers: [{ color: "#c0c0c0" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "poi.business",
      elementType: "geometry.fill",
      stylers: [{ color: "#c0c0c0" }],
    },
    {
      featureType: "poi.government",
      elementType: "geometry.fill",
      stylers: [{ color: "#c0c0c0" }],
    },
    {
      featureType: "poi.medical",
      elementType: "geometry.fill",
      stylers: [{ color: "#c0c0c0" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#c0c0c0" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ff0080" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{ color: "#e6e6e6" }],
    },
    { featureType: "road.arterial", stylers: [{ visibility: "off" }] },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    { featureType: "road.local", stylers: [{ visibility: "off" }] },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#e5e5e5" }],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ],
});
let officeLocation = { lat: 40.678477, lng: -73.901109 };
let marker = new google.maps.Marker({
  position: officeLocation,
  map: map,
  icon: "../monticello/images/pin.svg",
});
function validateForm() {
  let form = document.getElementsByName("myform");
  let name = document.myform.name.value;
  let email = document.myform.email.value;
  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (name == "") {
    alert("Name must be filled out");
    document.myform.name.style.borderColor = "red";
    document.myform.name.focus();
    event.preventDefault();
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter a valid e-mail address");
    document.myform.email.style.borderColor = "red";
    document.myform.email.focus();
    event.preventDefault();
  } else {
    $(".contact__form").remove();
    alert("Thank you for submitting. We will contact you within 24 hours.");
  }
}

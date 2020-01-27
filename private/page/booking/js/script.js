setuppers['booking'] = async function () {
    console.log("Booking");
    var widget = document.querySelector('[data-widget="booking_form"]');
    var result = widget.addEventListener("submit", function(event) { event.preventDefault(); validateForm(widget); });
}
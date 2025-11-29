
function toggleDay(dayId) {
    document.getElementById(dayId).classList.toggle("hidden");
}

function sendWhatsApp(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let message = document.getElementById('msg').value;

    let full = `Hola Flor, soy ${name}. ${message}`;
    let phone = "+595986859813"; // Cambia este número por el real

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(full)}`;
    window.open(url, "_blank");
}

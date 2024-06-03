function saklar() {
    const toggles = [
        document.getElementById("default-toggle1"),
        document.getElementById("default-toggle2"),
        document.getElementById("default-toggle3"),
        document.getElementById("default-toggle4"),
        document.getElementById("default-toggle5"),
        document.getElementById("default-toggle6"),
        document.getElementById("default-toggle7"),
        document.getElementById("default-toggle8"),
        document.getElementById("default-toggle9"),
        document.getElementById("default-toggle10")
    ];

    const lampus = [
        document.getElementById("lampu1"),
        document.getElementById("lampu2"),
        document.getElementById("lampu3"),
        document.getElementById("lampu4"),
        document.getElementById("lampu5"),
        document.getElementById("lampu6"),
        document.getElementById("lampu7"),
        document.getElementById("lampu8"),
        document.getElementById("lampu9"),
        document.getElementById("lampu10")
    ];

    toggles.forEach((toggle, index) => {
        lampus[index].src = toggle.checked ? "assests/images/on.gif" : "assests/images/off.gif";
    });
}

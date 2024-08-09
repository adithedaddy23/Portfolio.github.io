const move = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {
        duration: 1000, // Adjusted for a smoother follow effect
        fill: "forwards"
    });
}

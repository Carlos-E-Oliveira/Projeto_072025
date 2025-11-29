async function sair() {
    const req = await fetch("../../back-end/php/logout.php");
    const resp = await req.text();

    if (resp === "OK") {
        window.location.href = "../../front-end/html/login.html";
    } else {
        alert("Erro ao sair.");
    }
}

const welcomeDialog = document.getElementById('welcome-back');
const lobbyDialog = document.getElementById('lobby');

checkSession().then(handleInit);

async function checkSession() {
    return true;
}

function handleInit(authorised) {
    if (authorised) {
        welcomeDialog.showModal();
    } else {
        lobbyDialog.showModal();
    }
}

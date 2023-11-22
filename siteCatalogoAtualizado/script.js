function modalLogin(){
    const openModalLogin = document.querySelector("#login");
    const openModalCarrinho = document.querySelector("#carrinho");
    const closeModalButton = document.querySelector("#closeModal");
    const modal = document.querySelector("#modal");
    const fade = document.querySelector("#fade");

    const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    };

    [openModalLogin,openModalCarrinho, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
    });
} 

modalLogin();

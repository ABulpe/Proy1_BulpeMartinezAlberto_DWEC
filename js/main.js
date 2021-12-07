let darkmode = false;

const darkMode =(darkmode)=>{

    if(!darkmode){ debugger
        let link = document.querySelector("link[href='css/index.css']");
        let card_list = document.querySelector(".div__img--CL");
        let deck = document.querySelector(".div__img--D");
        let product = document.querySelector(".div__img--P");
        let notice = document.querySelector(".div__img--N");

        card_list.src = "./img/beelzemon.png";
        deck.src = "./img/d-metalgreymon.png";
        product.src = "./img/skullgreymon.png";
        notice.src = "./img/alphamon.png";
        link.href = 'css/d-index.css';
        return true;

    }
    let link = document.querySelector("link[href='css/d-index.css']");
    let card_list = document.querySelector(".div__img--CL");
    let deck = document.querySelector(".div__img--D");
    let product = document.querySelector(".div__img--P");
    let notice = document.querySelector(".div__img--N");

    card_list.src = "./img/gallantmon.png";
    deck.src = "./img/metalgreymon.png";
    product.src = "./img/venonmyotismon.png";
    notice.src = "./img/omegamon.png";
    link.href = 'css/index.css';
    return false;

}
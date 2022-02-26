//header
if(document.getElementById('navbar')){
    /**
     *
     * @type {HTMLElement}
     */
    const header = document.getElementById('navbar');

    //padding-top body
    /*if(document.getElementById('homepage') === null){
        document.body.style.marginTop = header.offsetHeight + "px";
    }*/

    window.onscroll = () => headerStyle(header)
    window.onload = () => headerStyle(header)
}

/**
 *
 * @param {HTMLElement} header
 */
function headerStyle(header){
    const top = window.scrollY;
    let val = 1
    if(top/(header.offsetHeight*2) <= 1){
        val = top/(header.offsetHeight*2);
    }

    header.style.backgroundColor = 'rgba(255, 255, 255,'+ val +' )';
    header.style.borderBottom = (val) * 2 + 'px solid';
    header.style.borderImage = 'var(--border-btm-color) 50';
}
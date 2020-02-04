import $ from 'jquery';

//let mobile_ele = null;
$(document).ready(function() {

    $(".menu-button").click(function(event){
        const menuCloseListener = event => {
            if (!$(".menu-mobile")[0].contains(event.target) && !$(event.target).hasClass("menu-button") ){       //&& isVisible(element)) { // or use: event.target.closest(selector) === null
              $(".menu-mobile").attr("class", "menu-mobile hide-menu");
              document.removeEventListener('click', menuCloseListener);
            }
        }

        if($(".menu-mobile").hasClass("hide-menu")){
            $(".menu-mobile").attr("class", "menu-mobile");
            document.addEventListener('click', menuCloseListener);
            //hideOnClickOutside($(".menu-mobile")[0]);
        }
        else{
            document.removeEventListener('click', menuCloseListener);
            $(".menu-mobile").attr("class", "menu-mobile hide-menu");
        }
        
    });

});




/*function hideOnClickOutside(element) {
    const outsideClickListener = event => {
        console.log(event);
        if (!element.contains(event.target) && !$(event.target).hasClass("menu-button") ){       //&& isVisible(element)) { // or use: event.target.closest(selector) === null
          $(".menu-mobile").attr("class", "menu-mobile hide-menu");
          removeClickListener()
        }
    }

    const removeClickListener = () => {
        document.removeEventListener('click', outsideClickListener);
    }

    document.addEventListener('click', outsideClickListener);
    //$(".menu-button")[0].addEventListener('click', (event)=>$(".menu-mobile").attr("class", "menu-mobile hide-menu"));
}

const isVisible = elem => !!elem && !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length )*/
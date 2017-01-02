 
$( window ).on( "load", function(){
        var dWidth = $(document).width();

        if(dWidth>420){

            new_element=document.createElement("script");
            new_element.setAttribute("type","text/javascript");
            new_element.setAttribute("src","js/js.js");
            document.body.appendChild(new_element);

        }else{
            new_elemen=document.createElement("script");
            new_elemen.setAttribute("type","text/javascript");
            new_elemen.setAttribute("src","js/mp_js.js");
            document.body.appendChild(new_elemen);
        }
    });


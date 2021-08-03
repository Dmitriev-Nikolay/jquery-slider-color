$(function () {
    let colorSelection = $("<form/>", {
        action: "/",
        class: "color-selection",
    }).appendTo("#slider-color");

    $(colorSelection).append("<fieldset class='fieldset'></fieldset>");
    $(".fieldset").append("<legend class='legend'>Что будешь менять?</legend>");

    $("<input/>", {
        id: "input-color",
        class: "input",
        type: "button",
        name: "input",
        val: "Цвет текста",
    }).appendTo(".fieldset");

    $("<input/>", {
        id: "input-bg",
        class: "input",
        type: "button",
        name: "input",
        val: "Цвет фона",
    }).appendTo(".fieldset");

    let prop = "color";

    $("#input-color").on("click", function () {
        $('input').removeClass('active');
        $(this).addClass('active');
        prop = "color";
    });

    $("#input-bg").on("click", function () {
        $("input").removeClass("active");
        $(this).addClass("active");
        prop = "backgroundColor";

    });

    $("#slider-color").append("<div class='main'></div>");
    $(".main").append("<div class='slider-block'></div>");

    const textInner = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quidem maiores nihil iste voluptate totam ut odit, qui magni ipsa!`;

    $(".slider-block").append('<div id="red"></div>');
    $(".slider-block").append('<div id="green"></div>');
    $(".slider-block").append('<div id="blue"></div>');
    $(".main").append(
        '<div id="swatch" class="ui-widget-content ui-corner-all"></div>'
    );

    $("#swatch").html(`<p>${ textInner }</p>`);
    $("#swatch p").addClass("text");
    /*-------------------------------------------------------------*/
    function hexFromRGB(r, g, b) {
        var hex = [r.toString(16), g.toString(16), b.toString(16)];
        $.each(hex, function (nr, val) {
            if (val.length === 1) {
                hex[nr] = "0" + val;
            }
        });
        return hex.join("").toUpperCase();
    }

    function refreshSwatch() {
        let red = $("#red").slider("value"),
            green = $("#green").slider("value"),
            blue = $("#blue").slider("value"),
            hex = hexFromRGB(red, green, blue);
        $("#swatch").css(`${ prop }`, "#" + hex);
    }

    $(function () {
        $("#red, #green, #blue").slider({
            range: "min",
            max: 255,
            value: 127,
            slide: refreshSwatch,
            change: refreshSwatch,
        });

        $("#red").slider("value", 50);
        $("#green").slider("value", 100);
        $("#blue").slider("value", 200);
    });
});
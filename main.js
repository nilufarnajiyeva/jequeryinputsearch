$(document).ready(function () {
    $("#save").click(function () {
        const list = $('#soz').val();
        $("ol").append('<li>'+list+'</li>');
        $('#soz').val("")
    });
    $("#search").click(function () {
        const text = $('#text').val().toLowerCase().trim();
        $("ol li").filter(function () {
            return $(this).text().toLowerCase().trim().indexOf(text) ==-1
        }).hide();
        $('#text').val("")
    });
})
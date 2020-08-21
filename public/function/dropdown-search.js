$(function(){
    $("#dropdown_filtertype_content a").click(function(){
      $("#dropdown_filtertype:first-child").text($(this).text());
      $("#dropdown_filtertype:first-child").val($(this).text());
   });
   $("#dropdown_searchtype_content a").click(function(){
    $("#dropdown_searchtype:first-child").text($(this).text());
    $("#dropdown_searchtype:first-child").val($(this).text());
    var chosen_type = $(this).text();
    if (chosen_type == "Sách"){
        $("#books_section").show();
        $("#news_section").hide();
    }
    else {
        $("#books_section").hide();
        $("#news_section").show();
    }
 });
});
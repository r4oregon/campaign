const langName = {
 "en" : "English",
 "es" : "español",
 "ru" : "Русский язык",
 "uk" : "українська мова"
};

function langBar(){

var this_page = window.location.pathname.split("/").pop();

if(xpage == "en"){
    var en_button = "<img src=\"button_en.png\" alt=\"English\" \/>";
}else{
    var en_button = "<a href=\"index.html\" lang=\"en\" title=\"English\" target=\"_self\"><img class=\"langButton\" src=\"button_en.png\" alt=\"English\" \/><\/a>";
}

if(xpage == "es"){
    var es_button = "<img src=\"button_es.png\" alt=\"español\" \/>";
}else{
    var es_button = "<a href=\"index_es.html\" lang=\"es\" title=\"español\" target=\"_self\"><img class=\"langButton\" src=\"button_es.png\" alt=\"español\" \/><\/a>";
}

if(xpage == "ru"){
    var ru_button = "<img src=\"button_ru.png\" alt=\"Русский язык\" \/>";
}else{
    var ru_button = "<a href=\"index_ru.html\" lang=\"ru\" title=\"Русский язык\" target=\"_self\"><img class=\"langButton\" src=\"button_ru.png\" alt=\"Русский язык\" \/><\/a>";
}

if(xpage == "uk"){
    var uk_button = "<img src=\"button_uk.png\" alt=\"українська мова\" \/>";
}else{
    var uk_button = "<a href=\"index_uk.html\" lang=\"uk\" title=\"українська мова\" target=\"_self\"><img class=\"langButton\" src=\"button_uk.png\" alt=\"українська мова\" \/><\/a>";
}

// return("<p class=\"stealth_link\">" + en_button + " " + es_button + "<\/p><p> &nbsp; <\/p>");
return("<p class=\"stealth_link\">" + en_button + " " + es_button + " " + ru_button + " " + uk_button + "<\/p><p> &nbsp; <\/p>");
};
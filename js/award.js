$(document).ready(function(){

    var pictures = [ "zhiqing", "henry","darek","denis","cissy"];
    var department = ["Department of Information Technology","Department of Operations","Department of Operations","Department of Human Resources","Department of Marketing"]
    var name = ["ZhiQing Guo","Henry Yu","Darek Deng","Denis Xu","Cissy Xiang"]

    $.each(pictures, function(value) {
        $("div.imageDiv").append(' <div class="col-lg-3 col-md-4">\n' +
            '                <div\n' +
            '                  class="single_performer wow fadeInUp"\n' +
            '                  data-wow-duration="1s"\n' +
            '                  data-wow-delay=".4s"\n' +
            '                >\n' +
            '                  <div data-tilt class="thumb">\n' +
            '                    <img src="img/2021award/'+ pictures[value] +'.jpg" alt="" />\n' +
            '                  </div>\n' +
            '                  <div class="performer_heading">\n' +
            '                    <h4>'+ name[value] +'</h4>\n' +
            '                    <span class="title">'+ department[value] +'</span><br />\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '              </div>');
    });

})



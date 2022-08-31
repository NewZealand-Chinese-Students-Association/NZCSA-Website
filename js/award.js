$(document).ready(function(){

    var pictures = [ "zhiqing", "henry","darek","denis","cissy","renee"];
    var department = ["Department of Information Technology","Department of Marketing","Department of Operations","Department of Business Development","Department of Marketing","Department of Human Resources"]
    var name = ["ZhiQing Guo","Henry Yu","Darek Deng","Denis Xu","Cissy Xiang","Renee Fang"]

    $.each(pictures, function(value) {
        $("div.imageDiv").append(' <div class="col-lg-3 col-md-4" style="margin-bottom: 1px">\n' +
            '                <div\n' +
            '                  class="single_performer wow fadeInUp"\n' +
            '                  data-wow-duration="1s"\n' +
            '                  data-wow-delay=".4s" style="margin-bottom: 30px"\n' +
            '                >\n' +
            '                  <div data-tilt class="thumb">\n' +
            '                    <img src="img/2021award/'+ pictures[value] +'.jpg" alt="" />\n' +
            '                  </div>\n' +
            '                  <div class="performer_heading" style="margin-top: 10px">\n' +
            '                    <h4>'+ name[value] +'</h4>\n' +
            '                    <span class="title">'+ department[value] +'</span>\n' +
            '                  </div>\n' +
            '                </div>\n' +
            '              </div>');
    });

})



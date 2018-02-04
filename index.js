var path = require("path");
var fs = require('fs');
hexo.extend.filter.register('after_post_render', function(data){
    var file_content = fs.readFileSync(path.join(__dirname,"./push.js"),"utf-8");
        data.content += file_content;
    return data;
});

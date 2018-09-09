const port = 8082;
const handler = require('serve-handler');
const http = require('http');
const server = http.createServer((request, response) => {
    // You pass two more arguments for config and middleware
    // More details here: https://github.com/zeit/serve-handler#options
    return handler(request, response, {
        public: "webapp",  //设置要提供的子目录
        // cleanUrls: ["/abc/**"],  // (Boolean|Array)将.html扩展名从路径中删除;默认值为可省略.html
        // rewrites: [
        //     { "source": "app/**", "destination": "/index.html" },
        //     { "source": "projects/*/edit", "destination": "/edit-project.html" },
        //     { "source": "/projects/:id/edit", "destination": "/edit-project-:id.html" },
        // ], //重写到不同路径的路径
        // redirects: [
        //     { "source": "/from", "destination": "/to" },
        //     { "source": "/old-pages/**", "destination": "/home" },
        //     { "source": "/old-docs/:id", "destination": "/new-docs/:id" },
        //     { "source": "/old", "destination": "/new", "type": 302 }
        // ],   //转发到不同路径或外部URL的路径
        directoryListing: false,  //(Boolean|Array)对于路径不是文件，而是目录，该包将自动呈现该目录中包含的所有文件和目录的漂亮列表
        // unlisted: [
        //     ".DS_Store",
        //     ".git"
        // ],  //从目录列表中排除路径
        // trailingSlash: true,  //删除或添加尾部斜杠到所有路径
        // renderSingle: true  //如果目录只包含一个文件，请进行渲染
    });
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});

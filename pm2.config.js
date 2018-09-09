module.exports = {
    apps: [
        {
            "name": "nodeService",              // 应用名称
            "script": "./config/service.js",    // 实际启动脚本
            "instances": 1,                     // 进程数据
            "watch": ["webapp"],                //(Boolen|Array)["app","src"] 添加受监控的文件，以便自动更新;文件更改时，它将重新启动应用
            // "ignore_watch": [],              //通过监视功能忽略某些文件或文件夹名称的正则表达式列表
            "exec_mode": "fork",                // 可选:fork(服务器单核推荐) cluster(多核推荐)
            // "merge_logs": true,              //同一应用程序的所有实例的日志合并到同一个文件中
            "log_date_format": "YYYY-MM-DD HH:mm Z",
            "cwd": "./",
            "error_file": "./logs/err.log",
            "out_file": "./logs/out.log",
            // "env":
            // {
            //     "NODE_ENV": "development",
            //     "AWESOME_SERVICE_API_TOKEN": "xxx"
            // },
            // "env_production":
            // {
            //     "NODE_ENV": "production"
            // },
            // "env_staging":
            // {
            //     "NODE_ENV": "staging",
            //     "TEST": true
            // }
        }
    ]
}
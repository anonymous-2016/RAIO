// node.js & process.env

console.log(`process version: \n ${process.version}`);
// v8.9.1
console.log(`process versions: \n ${process.versions}`);

console.log(`process title: \n ${process.title}`);
// npm
console.log(`process moduleLoadList: \n ${process.moduleLoadList}`);

/*
Binding contextify,Binding natives,Binding config,NativeModule events,Binding async_wrap,Binding icu,NativeModule util,NativeModule internal/errors,NativeModule internal/encoding,NativeModule internal/util,Binding util,Binding constants,NativeModule internal/util/types,Binding buffer,NativeModule buffer,NativeModule internal/buffer,Binding uv,NativeModule internal/process,NativeModule internal/process/warning,NativeModule internal/process/next_tick,NativeModule async_hooks,NativeModule internal/process/promises,NativeModule internal/process/stdio,Binding performance,NativeModule perf_hooks,NativeModule internal/linkedlist,NativeModule internal/inspector_async_hook,Binding inspector,NativeModule timers,Binding timer_wrap,NativeModule assert,NativeModule module,NativeModule internal/module,NativeModule internal/url,NativeModule internal/querystring,NativeModule querystring,Binding url,NativeModule vm,NativeModule fs,NativeModule path,Binding fs,NativeModule stream,NativeModule internal/streams/legacy,NativeModule _stream_readable,NativeModule internal/streams/BufferList,NativeModule internal/streams/destroy,NativeModule _stream_writable,NativeModule _stream_duplex,NativeModule _stream_transform,NativeModule _stream_passthrough,Binding fs_event_wrap,NativeModule
internal/fs,NativeModule internal/loader/Loader,NativeModule internal/loader/ModuleWrap,Internal Binding module_wrap,NativeModule internal/loader/ModuleMap,NativeModule internal/loader/ModuleJob,NativeModule internal/safe_globals,NativeModule internal/loader/ModuleRequest,NativeModule url,NativeModule internal/loader/search,NativeModule console,Binding tty_wrap,NativeModule tty,NativeModule net,NativeModule internal/net,Binding cares_wrap,Binding tcp_wrap,Binding pipe_wrap,Binding stream_wrap,NativeModule dns,NativeModule readline,NativeModule string_decoder,NativeModule internal/readline,Binding signal_wrap

*/
console.log(`process arch: \n ${process.arch}`);
// x64
console.log(`process platform: \n ${process.platform}`);
// win32
console.log(`process release: \n ${process.release}`);



console.log(`process argv: \n ${process.argv}`);
console.log(`process config: \n ${process.config}`);
//
console.log(`process pid: \n ${process.pid}`);
// 5840
console.log(`process cpuUsage: \n ${process.cpuUsage}`);
// function

// console.log(`process object \n`, JSON.stringify(process, null, 4));
let keys = Object.keys(process),
    values = Object.values(process);

// console.log(`process keys \n`, JSON.stringify(keys, null, 4));
// console.log(`process values \n`, values);
// console.log(`process values \n`, JSON.stringify(values, null, 4));

// console.log(`process.env \n`, process.env);
// console.log(`process.env \n`, JSON.stringify(process.env, null, 4));


// The process.cwd() method returns the current working directory of the Node.js process.
// console.log(`Current directory: ${process.cwd()}`);


/*

process.env.test = null;
console.log(process.env.test);
// => 'null'

process.env.test = undefined;
console.log(process.env.test);
// => 'undefined'


process.env.TEST = 1;
delete process.env.TEST;
console.log(process.env.TEST);
// => undefined

// On Windows operating systems, environment variables are case-insensitive.

process.env.TEST = 1;
console.log(process.env.test);
// => 1

*/

/*

process keys
 [
    "title",
    "version",
    "moduleLoadList",
    "versions",
    "arch",
    "platform",
    "release",
    "argv",
    "execArgv",
    "env",
    "pid",
    "features",
    "_needImmediateCallback",
    "execPath",
    "debugPort",
    "_startProfilerIdleNotifier",
    "_stopProfilerIdleNotifier",
    "_getActiveRequests",
    "_getActiveHandles",
    "reallyExit",
    "abort",
    "chdir",
    "cwd",
    "umask",
    "_kill",
    "_debugProcess",
    "_debugPause",
    "_debugEnd",
    "hrtime",
    "cpuUsage",
    "dlopen",
    "uptime",
    "memoryUsage",
    "binding",
    "_linkedBinding",
    "_setupDomainUse",
    "_events",
    "_rawDebug",
    "_eventsCount",
    "domain",
    "_maxListeners",
    "_fatalException",
    "_exiting",
    "assert",
    "config",
    "emitWarning",
    "nextTick",
    "_tickCallback",
    "_tickDomainCallback",
    "stdout",
    "stderr",
    "stdin",
    "openStdin",
    "exit",
    "kill",
    "argv0",
    "mainModule"
]

*/


/*


e:\**\fast-preview>npm start

> stock-f9-fv@1.1.1 start e:\**\fast-preview
> node ./env-app.js

process.env
 {
    "ALLUSERSPROFILE": "C:\\ProgramData",
    "APPDATA": "C:\\Users\\***\\AppData\\Roaming",
    "CommonProgramFiles": "C:\\Program Files\\Common Files",
    "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files",
    "CommonProgramW6432": "C:\\Program Files\\Common Files",
    "COMPUTERNAME": "NB-6662",
    "ComSpec": "C:\\Windows\\system32\\cmd.exe",
    "ELECTRON_NO_ATTACH_CONSOLE": "1",
    "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer",
    "FPS_BROWSER_USER_PROFILE_STRING": "Default",
    "GOOGLE_API_KEY": "AIzaSyAQfxPJiounkhOjODEO5ZieffeBv6yft2Q",
    "HOME": "C:\\Users\\***",
    "HOMEDRIVE": "C:",
    "HOMEPATH": "\\Users\\***",
    "INIT_CWD": "e:\\**\\fast-preview",
    "LANG": "en_US.UTF-8",
    "LOCALAPPDATA": "C:\\Users\\***\\AppData\\Local",
    "LOGONSERVER": "\\\\AD",
    "NODE": "H:\\Program Files\\nodejs\\node.exe",
    "NODE_EXE": "H:\\Program Files\\nodejs\\\\node.exe",
    "NPM_CLI_JS": "C:\\Users\\***\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",
    "npm_config_access": "",
    "npm_config_allow_same_version": "",
    "npm_config_also": "",
    "npm_config_always_auth": "",
    "npm_config_argv": "{\"remain\":[],\"cooked\":[\"start\"],\"original\":[\"start\"]}",
    "npm_config_auth_type": "legacy",
    "npm_config_bin_links": "true",
    "npm_config_browser": "",
    "npm_config_ca": "",
    "npm_config_cache": "C:\\Users\\***\\AppData\\Roaming\\npm-cache",
    "npm_config_cache_lock_retries": "10",
    "npm_config_cache_lock_stale": "60000",
    "npm_config_cache_lock_wait": "10000",
    "npm_config_cache_max": "Infinity",
    "npm_config_cache_min": "10",
    "npm_config_cafile": "",
    "npm_config_cert": "",
    "npm_config_cidr": "",
    "npm_config_color": "true",
    "npm_config_commit_hooks": "true",
    "npm_config_depth": "Infinity",
    "npm_config_description": "true",
    "npm_config_dev": "",
    "npm_config_dry_run": "",
    "npm_config_editor": "notepad.exe",
    "npm_config_engine_strict": "",
    "npm_config_fetch_retries": "2",
    "npm_config_fetch_retry_factor": "10",
    "npm_config_fetch_retry_maxtimeout": "60000",
    "npm_config_fetch_retry_mintimeout": "10000",
    "npm_config_force": "",
    "npm_config_git": "git",
    "npm_config_git_tag_version": "true",
    "npm_config_global": "",
    "npm_config_globalconfig": "C:\\Users\\***\\AppData\\Roaming\\npm\\etc\\npmrc",
    "npm_config_globalignorefile": "C:\\Users\\***\\AppData\\Roaming\\npm\\etc\\npmignore",
    "npm_config_global_style": "",
    "npm_config_group": "",
    "npm_config_ham_it_up": "",
    "npm_config_heading": "npm",
    "npm_config_https_proxy": "",
    "npm_config_if_present": "",
    "npm_config_ignore_prepublish": "",
    "npm_config_ignore_scripts": "",
    "npm_config_init_author_email": "",
    "npm_config_init_author_name": "",
    "npm_config_init_author_url": "",
    "npm_config_init_license": "ISC",
    "npm_config_init_module": "C:\\Users\\***\\.npm-init.js",
    "npm_config_init_version": "1.0.0",
    "npm_config_json": "",
    "npm_config_key": "",
    "npm_config_legacy_bundling": "",
    "npm_config_link": "",
    "npm_config_local_address": "",
    "npm_config_loglevel": "notice",
    "npm_config_logs_max": "10",
    "npm_config_long": "",
    "npm_config_maxsockets": "50",
    "npm_config_message": "%s",
    "npm_config_metrics_registry": "https://registry.npmjs.org/",
    "npm_config_node_version": "8.9.1",
    "npm_config_offline": "",
    "npm_config_onload_script": "",
    "npm_config_only": "",
    "npm_config_optional": "true",
    "npm_config_otp": "",
    "npm_config_package_lock": "true",
    "npm_config_parseable": "",
    "npm_config_prefer_offline": "",
    "npm_config_prefer_online": "",
    "npm_config_prefix": "C:\\Users\\***\\AppData\\Roaming\\npm",
    "npm_config_production": "",
    "npm_config_progress": "true",
    "npm_config_proxy": "",
    "npm_config_read_only": "",
    "npm_config_rebuild_bundle": "true",
    "npm_config_registry": "https://registry.npmjs.org/",
    "npm_config_rollback": "true",
    "npm_config_save": "true",
    "npm_config_save_bundle": "",
    "npm_config_save_dev": "",
    "npm_config_save_exact": "",
    "npm_config_save_optional": "",
    "npm_config_save_prefix": "^",
    "npm_config_save_prod": "",
    "npm_config_scope": "",
    "npm_config_scripts_prepend_node_path": "warn-only",
    "npm_config_script_shell": "",
    "npm_config_searchexclude": "",
    "npm_config_searchlimit": "20",
    "npm_config_searchopts": "",
    "npm_config_searchstaleness": "900",
    "npm_config_send_metrics": "",
    "npm_config_shell": "C:\\Windows\\system32\\cmd.exe",
    "npm_config_shrinkwrap": "true",
    "npm_config_sign_git_tag": "",
    "npm_config_sso_poll_frequency": "500",
    "npm_config_sso_type": "oauth",
    "npm_config_strict_ssl": "true",
    "npm_config_tag": "latest",
    "npm_config_tag_version_prefix": "v",
    "npm_config_timing": "",
    "npm_config_tmp": "C:\\Users\\***\\AppData\\Local\\Temp",
    "npm_config_umask": "0000",
    "npm_config_unicode": "",
    "npm_config_unsafe_perm": "true",
    "npm_config_usage": "",
    "npm_config_user": "",
    "npm_config_userconfig": "C:\\Users\\***\\.npmrc",
    "npm_config_user_agent": "npm/5.5.1 node/v8.9.1 win32 x64",
    "npm_config_version": "",
    "npm_config_versions": "",
    "npm_config_viewer": "browser",
    "npm_execpath": "C:\\Users\\***\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",
    "npm_lifecycle_event": "start",
    "npm_lifecycle_script": "node ./env-app.js",
    "npm_node_execpath": "H:\\Program Files\\nodejs\\node.exe",
    "npm_package_author_name": "xgqfrms, gildata",
    "npm_package_bin_bin": "./bin.js",
    "npm_package_bin_f9_fv": "f9-fv",
    "npm_package_dependencies_browserify": "^14.5.0",
    "npm_package_dependencies_requirejs": "^2.3.5",
    "npm_package_dependencies_systemjs": "^0.20.19",
    "npm_package_dependencies_webpack": "^3.8.1",
    "npm_package_description": "ES6/7/8 to ES5",
    "npm_package_devDependencies_babel": "^6.23.0",
    "npm_package_devDependencies_babel_cli": "^6.26.0",
    "npm_package_devDependencies_babel_core": "^6.26.0",
    "npm_package_devDependencies_babel_loader": "^7.1.2",
    "npm_package_devDependencies_babel_plugin_transform_object_rest_spread": "^6.26.0",
    "npm_package_devDependencies_babel_polyfill": "^6.26.0",
    "npm_package_devDependencies_babel_preset_env": "^1.6.1",
    "npm_package_devDependencies_babel_preset_react": "^6.24.1",
    "npm_package_devDependencies_clean_webpack_plugin": "^0.1.17",
    "npm_package_devDependencies_colors": "^1.1.2",
    "npm_package_devDependencies_css_loader": "^0.28.7",
    "npm_package_devDependencies_es_module_loader": "^2.2.8",
    "npm_package_devDependencies_file_loader": "^1.1.5",
    "npm_package_devDependencies_html_webpack_plugin": "^2.30.1",
    "npm_package_devDependencies_node_sass": "^4.7.2",
    "npm_package_devDependencies_rimraf": "^2.6.2",
    "npm_package_devDependencies_sass_loader": "^6.0.6",
    "npm_package_devDependencies_style_loader": "^0.19.0",
    "npm_package_devDependencies_uglifyjs_webpack_plugin": "^1.0.1",
    "npm_package_devDependencies_uglify_es": "^3.2.1",
    "npm_package_devDependencies_uglify_js": "^3.2.1",
    "npm_package_devDependencies_url_loader": "^0.6.2",
    "npm_package_keywords_0": "webapck",
    "npm_package_keywords_1": "auto_transpile",
    "npm_package_keywords_2": "es6/7/8",
    "npm_package_keywords_3": "es5",
    "npm_package_license": "MIT",
    "npm_package_main": "webpack.config.js",
    "npm_package_module": "webpack.config.mjs",
    "npm_package_name": "stock-f9-fv",
    "npm_package_readmeFilename": "readme.md",
    "npm_package_scripts_app": "npm run rmrf && webpack -p",
    "npm_package_scripts_app_new": "webpack -p",
    "npm_package_scripts_bat": "start start-browser.bat",
    "npm_package_scripts_dev": "npm run rmrf && webpack -p -w",
    "npm_package_scripts_dev___prod": "??? webpack --config webpack.prod.js ???",
    "npm_package_scripts_env": "node ./env-app.js",
    "npm_package_scripts_hot_modules_loader": "??? webpack hot HMR ???",
    "npm_package_scripts_linux_rmrf": "rm -rf build/js",
    "npm_package_scripts_open": "cd ../ && browser-sync start --server --files './fast-preview/*.*' && start http://localhost:3000/fast-preview/sidebar.html",
    "npm_package_scripts_rmrf": "rimraf build/js",
    "npm_package_scripts_start": "node ./env-app.js",
    "npm_package_scripts_starts": "start http://localhost:7777/datas/ && start http://localhost:7777/Info/",
    "npm_package_scripts_test": "echo \"Error: no test specified\" && exit 1",
    "npm_package_scripts_windows_clear": "rimraf build/js",
    "npm_package_scripts_xapp": "npm run build && cd build && browser-sync start --server --files 'index.html'",
    "npm_package_version": "1.1.1",
    "NPM_PREFIX_NPM_CLI_JS": "C:\\Users\\***\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js",
    "NUMBER_OF_PROCESSORS": "4",
    "OneDrive": "C:\\Users\\***\\OneDrive",
    "OS": "Windows_NT",
    "Path": "C:\\Users\\***\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\node-gyp-bin;e:\\**\\fast-preview\\node_modules\\.bin;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;H:\\Program Files\\TortoiseSVN\\bin;H:\\Program Files\\nodejs\\;H:\\Microsoft VS Code\\bin;H:\\Program Files\\Sublime Text 3\\;C:\\Users\\***\\AppData\\Local\\Microsoft\\WindowsApps;H:\\Microsoft VS Code\\bin;C:\\Users\\***\\AppData\\Local\\Desktop\\bin;C:\\Users\\***\\AppData\\Roaming\\npm;H:\\Program Files (x86)\\Nmap",
    "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC",
    "PROCESSOR_ARCHITECTURE": "AMD64",
    "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 61 Stepping 4, GenuineIntel",
    "PROCESSOR_LEVEL": "6",
    "PROCESSOR_REVISION": "3d04",
    "ProgramData": "C:\\ProgramData",
    "ProgramFiles": "C:\\Program Files",
    "ProgramFiles(x86)": "C:\\Program Files (x86)",
    "ProgramW6432": "C:\\Program Files",
    "PROMPT": "$P$G",
    "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files\\Intel\\",
    "PUBLIC": "C:\\Users\\Public",
    "SESSIONNAME": "Console",
    "SystemDrive": "C:",
    "SystemRoot": "C:\\Windows",
    "TEMP": "C:\\Users\\***\\AppData\\Local\\Temp",
    "TERM_PROGRAM": "vscode",
    "TERM_PROGRAM_VERSION": "1.18.1",
    "TMP": "C:\\Users\\***\\AppData\\Local\\Temp",
    "USERDNSDOMAIN": "GILDATA.COM",
    "USERDOMAIN": "GILDATA",
    "USERDOMAIN_ROAMINGPROFILE": "GILDATA",
    "USERNAME": "666",
    "USERPROFILE": "C:\\Users\\***",
    "VSCODE_CLI": "1",
    "VSCODE_CWD": "C:\\Users\\***",
    "VSCODE_IPC_HOOK": "\\\\.\\pipe\\09020a7d6ee250084af59760ab7c0393-1.18.1-main-sock",
    "VSCODE_NLS_CONFIG": "{\"locale\":\"zh-cn\",\"availableLanguages\":{\"*\":\"zh-cn\"}}",
    "VSCODE_NODE_CACHED_DATA_DIR_9292": "C:\\Users\\***\\AppData\\Roaming\\Code\\CachedData\\929bacba01ef658b873545e26034d1a8067445e9",
    "VSCODE_PID": "9292",
    "windir": "C:\\Windows"
}


*/

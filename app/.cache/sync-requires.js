const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/.cache/dev-404-page.js"))),
  "component---src-pages-create-task-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/create-task.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/index.js"))),
  "component---src-pages-login-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/login.js"))),
  "component---src-pages-pag-filho-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/pag-filho.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/register.js"))),
  "component---src-pages-view-task-js": hot(preferDefault(require("/Users/ifmaker-fridakahlo/Desktop/appfull/app/src/pages/view-task.js")))
}


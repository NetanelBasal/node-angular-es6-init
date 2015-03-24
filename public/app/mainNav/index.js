export default (app) => {
  require('./mainNav.controller')(app);
  require('./mainNav.directive')(app);
}


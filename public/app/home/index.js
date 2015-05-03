export default (app) => {
  require('./home.controller')(app);
  require('./home.directive')(app);
}


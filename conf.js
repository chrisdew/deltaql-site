exports.server = { // where the server should listen
  host: '0.0.0.0',
  port: 8000
};
exports.persistor = {
  path: '/tmp/site.json';
}
exports.dql = {
  transports: [
    //'websocket',
    'htmlfile',
    'xhr-polling',
    //'xhr-multipart',
    //'flashsocket'
    //'jsonp-polling'
  ]
};


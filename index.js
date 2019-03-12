'use strict';

module.exports = (pluginContext) => {
  function startup() {
  }
 
  function search(query, res) {
    if(query != undefined && query.length > 0) {
        res.add({
            id: 'callbytel',
            title: 'Call '+query+'',
            desc: 'Call '+query+' with the registered tel:// URL Handler',
            payload: query.replace(/\s+/g, ''),
            icon: '#fa fa-phone'
        });
    }
  }

  function execute(id, payload) {
      if(id == "callbytel" &&  payload != undefined && payload.length > 0) {
          var url = 'tel://'+payload;
          var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
          require('child_process').exec(start + ' ' + url);
      }
  }
  
  function renderPreview(id, payload, render) {
  }

  return { startup, search, execute, renderPreview };
};
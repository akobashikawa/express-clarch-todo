exports.callbackMaker = function(controller) {
  return async (req, res) => {
    const request = {
      params: req.params,
      query: req.query,
      body: req.body,
    };
    try {
      const response = await controller(request);
      console.log('response', response);
      res.json(response);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };
};

exports.renderCallbackMaker = function ({ controller, view }) {
  return (req, res) => {
    const response = controller(req);
    res.render(view, response);
  };
};

exports.syncCallbackMaker = function (controller) {
  return (req, res) => {
    const request = {
      params: req.params,
      query: req.query,
      body: req.body,
    };
    const response = controller(request);
    res.json(response);
  };
};
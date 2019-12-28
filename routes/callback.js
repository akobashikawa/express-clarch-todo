exports.callbackMaker = function(controller) {
  return async function (req, res) {
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
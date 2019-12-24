const getCallbackAdapter = function ({ controller }) {
    return async (req, res) => {
        const request = {
            query: req.query,
            params: req.params,
        };
        try {
            const result = await controller(request);
            const response = {
                request,
                result,
            };
            res.json(response);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                request,
                result: 'Error'
            });
        }

    };
};

const getSyncCallbackAdapter = function ({ controller }) {
    return (req, res) => {
        const request = {
            query: req.query,
            params: req.params,
        };
        const result = controller(request);
        const response = {
            request,
            result,
        };
        res.json(response);
    };
};

const renderCallbackAdapter = function ({ view, controller }) {
    return (req, res) => {
        const response = controller(req);
        res.render(view, response);
    };
};

module.exports = { getCallbackAdapter, getSyncCallbackAdapter, renderCallbackAdapter };

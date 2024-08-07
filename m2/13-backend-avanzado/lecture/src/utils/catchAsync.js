//Función de orden superior

// const catchAsync = (fn) => (req, res, next) => {
//     fn(req, res, next).catch(next);
// }

const catchAsync = (controller) => {
  return (req, res, next) => {
    controller(req, res).catch((err) => next(err));
  };
};

module.exports =  catchAsync 
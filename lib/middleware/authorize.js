module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You are not authorized to view this page');

    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

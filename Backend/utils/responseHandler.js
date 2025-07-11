exports.success = (res, data, message = 'Success') => {
  res.status(200).json({ success: true, message, data });
};

exports.error = (res, error, status = 500) => {
  res.status(error.status || status).json({ success: false, message: error.message || 'Server Error' });
};

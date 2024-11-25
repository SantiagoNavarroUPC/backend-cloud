exports.success = (res, message = 'Operación exitosa', status = 200) => {
  if (!res || typeof res.status !== 'function') {
    throw new Error('El objeto `res` no es válido');
  }
  res.status(status).json({
    body: message,
  });
};

exports.error = (res, message = 'Error interno del servidor', status = 500) => {
  if (!res || typeof res.status !== 'function') {
    throw new Error('El objeto `res` no es válido');
  }
  res.status(status).json({
    error: true,
    status,
    body: message,
  });
};


  
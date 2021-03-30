exports.handler = (event, context, callback) => {
  console.log(JSON.stringify(event))
  console.log(JSON.stringify(context))
  const response = {
    status: '200',
    body: event,
  };
  
  callback(null,  response);
};

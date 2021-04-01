export async function handler(event: any) {
  const request = event.Records[0].cf.request;
  console.log(request)
  console.log('Event: %j', event)
  console.log('CountryCodeTable: %j', process.env.COUNTRY_CODE_TABLE)
  console.log('CountryCodeTable Type: %s', typeof(process.env.COUNTRY_CODE_TABLE))
  const countryCodeTable = process.env.COUNTRY_CODE_TABLE

  let newDomainName: string;
  let viewerCountry: string;

  if (request.headers['cloudfront-viewer-country']) {
    viewerCountry = request.headers['cloudfront-viewer-country'][0].value;
    console.log('Got viewer country: %j', viewerCountry )
    newDomainName = countryCodeTable[viewerCountry]
    console.log('new domain name: %j', newDomainName)
    if (newDomainName) {
      request.origin.custom.domainName = newDomainName;
      request.headers['host'] = [{ key: 'host', value: newDomainName }];
    }
  }

  return request
};

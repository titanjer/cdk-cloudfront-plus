# API Reference

**Classes**

Name|Description
----|-----------
[Distribution](#cdk-cloudfront-plus-distribution)|*No description*
[ModifyResponseHeader](#cdk-cloudfront-plus-modifyresponseheader)|*No description*
[ServerlessApp](#cdk-cloudfront-plus-serverlessapp)|*No description*


**Structs**

Name|Description
----|-----------
[DistributionProps](#cdk-cloudfront-plus-distributionprops)|*No description*
[ServerlessAppProps](#cdk-cloudfront-plus-serverlessappprops)|*No description*


**Interfaces**

Name|Description
----|-----------
[IExtensions](#cdk-cloudfront-plus-iextensions)|*No description*



## class Distribution  <a id="cdk-cloudfront-plus-distribution"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new Distribution(scope: Construct, id: string, props: DistributionProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[DistributionProps](#cdk-cloudfront-plus-distributionprops)</code>)  *No description*
  * **defaultBehavior** (<code>[BehaviorOptions](#aws-cdk-aws-cloudfront-behavioroptions)</code>)  The default behavior for the distribution. 
  * **additionalBehaviors** (<code>Map<string, [BehaviorOptions](#aws-cdk-aws-cloudfront-behavioroptions)></code>)  Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to. __*Default*__: no additional behaviors are added.
  * **certificate** (<code>[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)</code>)  A certificate to associate with the distribution. __*Default*__: the CloudFront wildcard certificate (*.cloudfront.net) will be used.
  * **comment** (<code>string</code>)  Any comments you want to include about the distribution. __*Default*__: no comment
  * **defaultRootObject** (<code>string</code>)  The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/). __*Default*__: no default root object
  * **domainNames** (<code>Array<string></code>)  Alternative domain names for this distribution. __*Default*__: The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)
  * **enabled** (<code>boolean</code>)  Enable or disable the distribution. __*Default*__: true
  * **enableIpv6** (<code>boolean</code>)  Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address. __*Default*__: true
  * **enableLogging** (<code>boolean</code>)  Enable access logging for the distribution. __*Default*__: false, unless `logBucket` is specified.
  * **errorResponses** (<code>Array<[ErrorResponse](#aws-cdk-aws-cloudfront-errorresponse)></code>)  How CloudFront should handle requests that are not successful (e.g., PageNotFound). __*Default*__: No custom error responses.
  * **geoRestriction** (<code>[GeoRestriction](#aws-cdk-aws-cloudfront-georestriction)</code>)  Controls the countries in which your content is distributed. __*Default*__: No geographic restrictions
  * **httpVersion** (<code>[HttpVersion](#aws-cdk-aws-cloudfront-httpversion)</code>)  Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront. __*Default*__: HttpVersion.HTTP2
  * **logBucket** (<code>[IBucket](#aws-cdk-aws-s3-ibucket)</code>)  The Amazon S3 bucket to store the access logs in. __*Default*__: A bucket is created if `enableLogging` is true
  * **logFilePrefix** (<code>string</code>)  An optional string that you want CloudFront to prefix to the access log filenames for this distribution. __*Default*__: no prefix
  * **logIncludesCookies** (<code>boolean</code>)  Specifies whether you want CloudFront to include cookies in access logs. __*Default*__: false
  * **minimumProtocolVersion** (<code>[SecurityPolicyProtocol](#aws-cdk-aws-cloudfront-securitypolicyprotocol)</code>)  The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections. __*Default*__: SecurityPolicyProtocol.TLS_V1_2_2019
  * **priceClass** (<code>[PriceClass](#aws-cdk-aws-cloudfront-priceclass)</code>)  The price class that corresponds with the maximum price that you want to pay for CloudFront service. __*Default*__: PriceClass.PRICE_CLASS_ALL
  * **webAclId** (<code>string</code>)  Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution. __*Default*__: No AWS Web Application Firewall web access control list (web ACL).



### Properties


Name | Type | Description 
-----|------|-------------
**extensions** | <code>Array<[IExtensions](#cdk-cloudfront-plus-iextensions)></code> | <span></span>



## class ModifyResponseHeader  <a id="cdk-cloudfront-plus-modifyresponseheader"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable), [IExtensions](#cdk-cloudfront-plus-iextensions)
__Extends__: [ServerlessApp](#cdk-cloudfront-plus-serverlessapp)

### Initializer




```ts
new ModifyResponseHeader(scope: Construct, id: string)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*



### Properties


Name | Type | Description 
-----|------|-------------
**eventType** | <code>[LambdaEdgeEventType](#aws-cdk-aws-cloudfront-lambdaedgeeventtype)</code> | <span></span>
**functionArn** | <code>string</code> | <span></span>
**functionVersion** | <code>[Version](#aws-cdk-aws-lambda-version)</code> | <span></span>



## class ServerlessApp  <a id="cdk-cloudfront-plus-serverlessapp"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new ServerlessApp(scope: Construct, id: string, props: ServerlessAppProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[ServerlessAppProps](#cdk-cloudfront-plus-serverlessappprops)</code>)  *No description*
  * **applicationId** (<code>string</code>)  *No description* 
  * **semanticVersion** (<code>string</code>)  *No description* 



### Properties


Name | Type | Description 
-----|------|-------------
**resource** | <code>[CfnResource](#aws-cdk-core-cfnresource)</code> | <span></span>



## struct DistributionProps  <a id="cdk-cloudfront-plus-distributionprops"></a>






Name | Type | Description 
-----|------|-------------
**defaultBehavior** | <code>[BehaviorOptions](#aws-cdk-aws-cloudfront-behavioroptions)</code> | The default behavior for the distribution.
**additionalBehaviors**? | <code>Map<string, [BehaviorOptions](#aws-cdk-aws-cloudfront-behavioroptions)></code> | Additional behaviors for the distribution, mapped by the pathPattern that specifies which requests to apply the behavior to.<br/>__*Default*__: no additional behaviors are added.
**certificate**? | <code>[ICertificate](#aws-cdk-aws-certificatemanager-icertificate)</code> | A certificate to associate with the distribution.<br/>__*Default*__: the CloudFront wildcard certificate (*.cloudfront.net) will be used.
**comment**? | <code>string</code> | Any comments you want to include about the distribution.<br/>__*Default*__: no comment
**defaultRootObject**? | <code>string</code> | The object that you want CloudFront to request from your origin (for example, index.html) when a viewer requests the root URL for your distribution. If no default object is set, the request goes to the origin's root (e.g., example.com/).<br/>__*Default*__: no default root object
**domainNames**? | <code>Array<string></code> | Alternative domain names for this distribution.<br/>__*Default*__: The distribution will only support the default generated name (e.g., d111111abcdef8.cloudfront.net)
**enableIpv6**? | <code>boolean</code> | Whether CloudFront will respond to IPv6 DNS requests with an IPv6 address.<br/>__*Default*__: true
**enableLogging**? | <code>boolean</code> | Enable access logging for the distribution.<br/>__*Default*__: false, unless `logBucket` is specified.
**enabled**? | <code>boolean</code> | Enable or disable the distribution.<br/>__*Default*__: true
**errorResponses**? | <code>Array<[ErrorResponse](#aws-cdk-aws-cloudfront-errorresponse)></code> | How CloudFront should handle requests that are not successful (e.g., PageNotFound).<br/>__*Default*__: No custom error responses.
**geoRestriction**? | <code>[GeoRestriction](#aws-cdk-aws-cloudfront-georestriction)</code> | Controls the countries in which your content is distributed.<br/>__*Default*__: No geographic restrictions
**httpVersion**? | <code>[HttpVersion](#aws-cdk-aws-cloudfront-httpversion)</code> | Specify the maximum HTTP version that you want viewers to use to communicate with CloudFront.<br/>__*Default*__: HttpVersion.HTTP2
**logBucket**? | <code>[IBucket](#aws-cdk-aws-s3-ibucket)</code> | The Amazon S3 bucket to store the access logs in.<br/>__*Default*__: A bucket is created if `enableLogging` is true
**logFilePrefix**? | <code>string</code> | An optional string that you want CloudFront to prefix to the access log filenames for this distribution.<br/>__*Default*__: no prefix
**logIncludesCookies**? | <code>boolean</code> | Specifies whether you want CloudFront to include cookies in access logs.<br/>__*Default*__: false
**minimumProtocolVersion**? | <code>[SecurityPolicyProtocol](#aws-cdk-aws-cloudfront-securitypolicyprotocol)</code> | The minimum version of the SSL protocol that you want CloudFront to use for HTTPS connections.<br/>__*Default*__: SecurityPolicyProtocol.TLS_V1_2_2019
**priceClass**? | <code>[PriceClass](#aws-cdk-aws-cloudfront-priceclass)</code> | The price class that corresponds with the maximum price that you want to pay for CloudFront service.<br/>__*Default*__: PriceClass.PRICE_CLASS_ALL
**webAclId**? | <code>string</code> | Unique identifier that specifies the AWS WAF web ACL to associate with this CloudFront distribution.<br/>__*Default*__: No AWS Web Application Firewall web access control list (web ACL).



## interface IExtensions  <a id="cdk-cloudfront-plus-iextensions"></a>

__Implemented by__: [ModifyResponseHeader](#cdk-cloudfront-plus-modifyresponseheader)



### Properties


Name | Type | Description 
-----|------|-------------
**functionArn** | <code>string</code> | <span></span>
**functionVersion** | <code>[Version](#aws-cdk-aws-lambda-version)</code> | <span></span>



## struct ServerlessAppProps  <a id="cdk-cloudfront-plus-serverlessappprops"></a>






Name | Type | Description 
-----|------|-------------
**applicationId** | <code>string</code> | <span></span>
**semanticVersion** | <code>string</code> | <span></span>




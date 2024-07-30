Here is a comprehensive list of 100 HTTP status codes, with brief descriptions, that you might encounter or use in an Express.js server:

### Informational (1xx)
1. **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
2. **101 Switching Protocols**: The server is switching protocols as requested by the client.
3. **102 Processing**: The server is processing the request but no response is available yet. (WebDAV)
4. **103 Early Hints**: Used to return some response headers before the final response. (Experimental)

### Success (2xx)
5. **200 OK**: The request was successful, and the server returned the requested data.
6. **201 Created**: The request was successful, and a new resource was created.
7. **202 Accepted**: The request has been accepted for processing, but the processing is not complete.
8. **203 Non-Authoritative Information**: The request was successful, but the information is from a third-party source.
9. **204 No Content**: The request was successful, but there is no content to return.
10. **205 Reset Content**: The request was successful, and the client should reset the view.
11. **206 Partial Content**: The server is delivering only part of the resource due to a range header.
12. **207 Multi-Status**: The response contains multiple status codes for different parts of a resource. (WebDAV)
13. **208 Already Reported**: The members of a DAV binding have already been enumerated in a previous reply. (WebDAV)
14. **226 IM Used**: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance manipulations applied to the current instance. (Delta encoding)

### Redirection (3xx)
15. **300 Multiple Choices**: There are multiple options for the resource, and the client must choose.
16. **301 Moved Permanently**: The resource has been moved to a new URI permanently.
17. **302 Found**: The resource is temporarily under a different URI.
18. **303 See Other**: The response is located at a different URI using the GET method.
19. **304 Not Modified**: The resource has not been modified since the last request.
20. **305 Use Proxy**: The requested resource must be accessed through a specified proxy.
21. **306 Switch Proxy**: No longer used. Originally meant to specify a proxy that should be used.
22. **307 Temporary Redirect**: The request should be redirected to a different URI temporarily.
23. **308 Permanent Redirect**: The request should be redirected to a different URI permanently.

### Client Error (4xx)
24. **400 Bad Request**: The server could not understand the request due to invalid syntax.
25. **401 Unauthorized**: Authentication is required and has failed or was not provided.
26. **402 Payment Required**: Reserved for future use, typically for payment-related responses.
27. **403 Forbidden**: The server understands the request but refuses to authorize it.
28. **404 Not Found**: The requested resource could not be found on the server.
29. **405 Method Not Allowed**: The request method is not allowed for the resource.
30. **406 Not Acceptable**: The resource is not available in a format acceptable to the client.
31. **407 Proxy Authentication Required**: The client must authenticate itself with a proxy.
32. **408 Request Timeout**: The server timed out waiting for the request.
33. **409 Conflict**: There is a conflict with the current state of the resource.
34. **410 Gone**: The resource is no longer available and will not be available again.
35. **411 Length Required**: The request did not specify the length of its content, which is required.
36. **412 Precondition Failed**: A condition in the request headers was not met.
37. **413 Payload Too Large**: The request is larger than the server can process.
38. **414 URI Too Long**: The URI provided was too long for the server to process.
39. **415 Unsupported Media Type**: The media type of the request is not supported by the server.
40. **416 Range Not Satisfiable**: The client asked for a part of the resource that cannot be fulfilled.
41. **417 Expectation Failed**: The server cannot meet the requirements of the Expect header.
42. **418 I'm a teapot**: (RFC 2324) The teapot refuses to brew coffee, as it's not designed for it.
43. **421 Misdirected Request**: The request was directed at a server that cannot produce a response.
44. **422 Unprocessable Entity**: The request was well-formed but was unable to be followed due to semantic errors.
45. **423 Locked**: The resource is locked and cannot be accessed.
46. **424 Failed Dependency**: The request failed due to a previous request failure.
47. **425 Too Early**: The server is unwilling to process the request to avoid potential replay.
48. **426 Upgrade Required**: The server requires the client to upgrade to a different protocol.
49. **427 Unassigned**: Reserved for future use.
50. **428 Precondition Required**: The server requires the request to be conditional.
51. **429 Too Many Requests**: The user has sent too many requests in a given amount of time.
52. **430 Unassigned**: Reserved for future use.
53. **431 Request Header Fields Too Large**: The request's header fields are too large.
54. **451 Unavailable For Legal Reasons**: The resource is unavailable due to legal reasons.

### Server Error (5xx)
55. **500 Internal Server Error**: The server encountered an unexpected condition that prevented it from fulfilling the request.
56. **501 Not Implemented**: The server does not support the functionality required to fulfill the request.
57. **502 Bad Gateway**: The server received an invalid response from an upstream server it needed to access in order to complete the request.
58. **503 Service Unavailable**: The server is currently unable to handle the request due to temporary overloading or maintenance.
59. **504 Gateway Timeout**: The server did not receive a timely response from an upstream server or some other auxiliary server.
60. **505 HTTP Version Not Supported**: The server does not support the HTTP protocol version used in the request.
61. **506 Variant Also Negotiates**: The server has an internal configuration error resulting in a circular reference.
62. **507 Insufficient Storage**: The server is unable to store the representation needed to complete the request.
63. **508 Loop Detected**: The server detected an infinite loop while processing a request.
64. **510 Not Extended**: Further extensions to the request are required for the server to fulfill it.

### Additional Codes
65. **100 Continue**: The server has received the request headers and the client should proceed to send the request body.
66. **101 Switching Protocols**: The server is switching protocols as requested by the client.
67. **102 Processing**: The server is processing the request but no response is available yet. (WebDAV)
68. **103 Early Hints**: Used to return some response headers before the final response. (Experimental)
69. **208 Already Reported**: The members of a DAV binding have already been enumerated in a previous reply. (WebDAV)
70. **226 IM Used**: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance manipulations applied to the current instance. (Delta encoding)
71. **305 Use Proxy**: The requested resource must be accessed through a specified proxy.
72. **306 Switch Proxy**: No longer used. Originally meant to specify a proxy that should be used.
73. **407 Proxy Authentication Required**: The client must authenticate itself with a proxy.
74. **408 Request Timeout**: The server timed out waiting for the request.
75. **409 Conflict**: There is a conflict with the current state of the resource.
76. **410 Gone**: The resource is no longer available and will not be available again.
77. **411 Length Required**: The request did not specify the length of its content, which is required.
78. **412 Precondition Failed**: A condition in the request headers was not met.
79. **413 Payload Too Large**: The request is larger than the server can process.
80. **414 URI Too Long**: The URI provided was too long for the server to process.
81. **415 Unsupported Media Type**: The media type of the request is not supported by the server.
82. **416 Range Not Satisfiable**: The client asked for a part of the resource that cannot be fulfilled.
83. **417 Expectation Failed**: The server cannot meet the requirements of the Expect header.
84. **418 I'm a teapot**: (RFC 2324) The teapot refuses to brew coffee, as it's not designed for it.
85. **421 Misdirected Request**: The request was directed at a server that cannot produce a response.
86. **422 Unprocessable Entity**: The request was well-formed but was unable to be followed due to semantic errors.
87. **423 Locked**: The resource is locked and cannot be accessed.
88. **424 Failed Dependency**: The request failed due to a previous request failure.
89. **425 Too Early**: The server is unwilling to process the request to avoid potential replay.
90. **426 Upgrade Required**: The server requires the client to upgrade to a different protocol.
91. **427 Unassigned**: Reserved for future use.
92
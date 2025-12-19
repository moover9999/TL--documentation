# Why do I get SSL/connection errors when using proxies with certain sites (e.g., api.axs.com)?

Our proxies are fully functional and support HTTPS requests. For example, requests to services like **ip-api.com** work without issue. However, some websites — particularly high-security or ticketing platforms like **api.axs.com** — enforce strict anti-bot and traffic filtering policies.

In these cases, the site may:

* Reject traffic coming from known proxy networks.
* Terminate the SSL/TLS handshake, resulting in errors such as `SSLEOFError` or `ProxyError`.
* Apply additional security layers that block automated or non-direct connections.

This behavior is not caused by a fault in the proxies themselves but is a result of the target website’s security controls. If you require access to highly restrictive platforms, you may need specialized proxy solutions or direct integrations that can better align with the site’s security requirements.

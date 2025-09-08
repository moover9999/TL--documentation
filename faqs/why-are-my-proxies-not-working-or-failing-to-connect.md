# Why are my proxies not working or failing to connect?

If your proxies are not connecting, timing out or returning errors, it can be caused by several technical factors. Below are the most common reasons and how to troubleshoot them:

1. **Authentication Errors**
   * Verify that your IP is correctly whitelisted (if using IP authentication).
   * If using username:password authentication, ensure the credentials are correct and entered in the proper format (`user:password@host:port`).
   * A mismatch between your selected authentication method and actual configuration can cause connection failures.
2. **Expired or Inactive Subscription**
   * Proxies tied to an expired or suspended plan will no longer connect.
   * Check your account dashboard to confirm your subscription status and remaining bandwidth/validity.
3. **Incorrect Proxy Format or Port Usage**
   * Make sure you’re using the correct proxy string (e.g., `http://user:pass@host:port`).
   * Verify whether the target requires **HTTP** or **HTTPS** proxy protocol. Using the wrong type can result in connection failures.
4. **Target Website Restrictions**
   * Many websites actively detect and block certain proxy types.
   * If you’re getting frequent CAPTCHA challenges, 403 errors or blocks, try:
     * Switching proxy pools (Residential or ISP).
     * Rotating to a different location or session type (rotating vs. sticky).
     * Slowing down request frequency to mimic human traffic.
5. **Local Network / Firewall Limitations**
   * Firewalls, VPNs or corporate networks may block proxy traffic.
   * Test the proxy connection on a different network or device to confirm.
   * Ensure required ports (commonly 80, 443, 60000+) are open on your network.
6. **Software or Integration Misconfiguration**
   * If using proxies in a scraper, bot or browser extension, confirm that the proxy settings are properly configured.
   * Some applications require separate fields for host, port, username and password.
7. **Bandwidth or Rate Limits**
   * Proxies may stop responding once allocated bandwidth is used up.
   * Sending too many concurrent requests can also trigger temporary bans or throttling.

If you’ve checked the above and still face issues, please contact our support team with the error details requested below. We’ll be happy to investigate and assist further.

**Next Steps:**

* Test your proxy in a simple cURL command or browser extension to rule out integration issues.
* Check account status, authentication and proxy format first.
* If issues persist, provide our support team with:
  * The proxy string you’re testing.
  * Error messages or status codes.
  * Target website details.
  * Your test method (cURL, Postman, bot, etc.).

This information will help us quickly identify and resolve the issue.

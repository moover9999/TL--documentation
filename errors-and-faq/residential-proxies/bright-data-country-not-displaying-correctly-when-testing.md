# ❔ Bright data, country not displaying correctly when testing

* With Bright, the way it works is that there is a main server that accepts the requests coming to the proxies first. This server then routes the traffic to the proxies in the correct region. Like most people who have a plan with Bright, they set up their servers in the US to accept the initial traffic. Some bots/proxy testers will show that the proxies are pinning in the US no matter what region they generate because they are just pining the proxies and not actually creating a request using the proxies. In reality, the actual proxy is going to be the correct region. So it will still work during geo-locking and all during drops.
* Anyway, the proxies actually work regardless of what any tester says the region is.
* To test accurately to see which country the proxy is pinging from, please log in to chrome using the proxy by following this guide: [https://oxylabs.io/blog/how-to-set-up-a-chrome-proxy](https://oxylabs.io/blog/how-to-set-up-a-chrome-proxy)
* Next, please visit this link to verify what country your proxy is from: [https://lumtest.com/myip.json](https://lumtest.com/myip.json)

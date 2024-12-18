---
icon: tags
---

# White Labeling the X Residential

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

{% hint style="info" %}
Here, There are 14 different pools are available and you have to create DNS records for each.
{% endhint %}

1. Identify a common White Labeling name for all the 14 plans.
2. Generate a list of DSN record names. You can use below file to generate those easily.

[White Labeling X Residential](https://docs.google.com/spreadsheets/d/1_BZHP51hSfuzeRtQB5uDJaB2g50J-fxALYgEIPQKb5w/copy)&#x20;

3. We have provided a automated file for your ease. You can create a copy using the above link and insert the common White Labeling name to Cell C2 (#1).  Then, based on the name, API (#2) will be updated and Domain (#3) and Port (#4) keeps fixed.

<figure><img src="../../.gitbook/assets/CleanShot 2024-12-17 at 2 .00.56@2x.jpg" alt=""><figcaption></figcaption></figure>

4. The common format of DNS records are as follows. You have to replace "<\<Your White Labeling Name>>" with the name you decided in step 01.

<table data-full-width="false"><thead><tr><th width="346">API</th><th width="128">Record Type</th><th width="332">Domain</th><th width="87">Port</th></tr></thead><tbody><tr><td>&#x3C;&#x3C;Your White Labeling Name>>usax</td><td>CNAME</td><td>usax.x.proxiess.com</td><td>6000</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>usatx</td><td>CNAME</td><td>usatx.x.proxiess.com</td><td>6001</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>aux</td><td>CNAME</td><td>aux.x.proxiess.com</td><td>6002</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>ukx</td><td>CNAME</td><td>ukx.x.proxiess.com</td><td>6003</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>ukcx</td><td>CNAME</td><td>ukcx.x.proxiess.com</td><td>6004</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>ukvx</td><td>CNAME</td><td>ukvx.x.proxiess.com</td><td>6005</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>dex</td><td>CNAME</td><td>dex.x.proxiess.com</td><td>6006</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>dedx</td><td>CNAME</td><td>dedx.x.proxiess.com</td><td>6007</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>nlx</td><td>CNAME</td><td>nlx.x.proxiess.com</td><td>6008</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>nldx</td><td>CNAME</td><td>nldx.x.proxiess.com</td><td>6009</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>nlvx</td><td>CNAME</td><td>nlvx.x.proxiess.com</td><td>6010</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>geox</td><td>CNAME</td><td>geox.x.proxiess.com</td><td>6011</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>geoxeu</td><td>CNAME</td><td>geoxeu.x.proxiess.com</td><td>6012</td></tr><tr><td>&#x3C;&#x3C;Your White Labeling Name>>geoxasia</td><td>CNAME</td><td>geoxasia.x.proxiess.com</td><td>6013</td></tr></tbody></table>



5. Open the DNS configuration for your domain.
6. Create a CNAME Record pointing to the domain.
7. Whatever you enter in the name/host will decide the domain which points to our API IP.
8. You have to create 14 records for each API name shown above.
9. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the X Residential domain, your usax proxy will be formatted testuasx.yourdomain.com:port:user:pass
10. An example on Godaddy is linked below:

<figure><img src="../../.gitbook/assets/CleanShot 2024-12-17 at 2 .04.24.jpg" alt=""><figcaption></figcaption></figure>

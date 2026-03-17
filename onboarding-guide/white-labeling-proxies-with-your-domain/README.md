# 〽️ White labeling proxies with your domain



{% hint style="info" %}
This process allows you to brand the proxies with your company name. For example, if you are using packet stream the default proxies will have [packetstream.io](http://packetstream.io) in the name. However, using the following guide you can use your domain instead to brand the proxies.
{% endhint %}

#### Quick Domain Links

{% hint style="info" %}
Please make sure to have two different names for the default and EU products (i.e. Oxylabs , Smart) when entering to DNS settings. Having the same name for the different products may lead to generating non-functioning proxies.&#x20;
{% endhint %}

<table><thead><tr><th>API</th><th width="116.92708333333331">Record Type</th><th>Domain</th></tr></thead><tbody><tr><td>Smartproxy (Default)</td><td>CNAME</td><td>smrt.x.proxiess.com</td></tr><tr><td>Smartproxy EU</td><td>CNAME</td><td>smrteu.x.proxiess.com</td></tr><tr><td>Smartproxy Asia</td><td>CNAME</td><td>smrtasia.x.proxiess.com</td></tr><tr><td>Smartproxy (Default) - SOCKS5</td><td>CNAME</td><td>sockssmrt.x.proxiess.com</td></tr><tr><td>Smartproxy EU - SOCKS5</td><td>CNAME</td><td>sockssmrteu.x.proxiess.com</td></tr><tr><td>Smartproxy Asia - SOCKS5</td><td>CNAME</td><td>sockssmrtasia.x.proxiess.com</td></tr><tr><td>Oxylabs (Default)</td><td>CNAME</td><td>oxy.x.proxiess.com</td></tr><tr><td>Oxylabs EU</td><td>CNAME</td><td>oxyeu.x.proxiess.com</td></tr><tr><td>Oxylabs Asia</td><td>CNAME</td><td>oxyasia.x.proxiess.com</td></tr><tr><td>Oxylabs (Default) - SOCKS5</td><td>CNAME</td><td>socksoxy.x.proxiess.com</td></tr><tr><td>Oxylabs EU - SOCKS5</td><td>CNAME</td><td>socksoxyeu.x.proxiess.com</td></tr><tr><td>Oxylabs Asia - SOCKS5</td><td>CNAME</td><td>socksoxyasia.x.proxiess.com</td></tr><tr><td>IPRoyal (Default)</td><td>CNAME</td><td>iproyal.x.proxiess.com</td></tr><tr><td>IPRoyalEU</td><td>CNAME</td><td>iproyaleu.x.proxiess.com</td></tr><tr><td>IPRoyalAsia</td><td>CNAME</td><td>iproyalasia.x.proxiess.com</td></tr><tr><td>IPRoyal (Default) - SOCKS5</td><td>CNAME</td><td>socksiproyal.x.proxiess.com</td></tr><tr><td>IPRoyalEU - SOCKS5</td><td>CNAME</td><td>socksiproyaleu.x.proxiess.com</td></tr><tr><td>IPRoyalAsia - SOCKS5</td><td>CNAME</td><td>socksiproyalasia.x.proxiess.com</td></tr><tr><td>Packetstream (Default)</td><td>CNAME</td><td>pkt.x.proxiess.com</td></tr><tr><td>PacketstreamEU</td><td>CNAME</td><td>pkteu.x.proxiess.com</td></tr><tr><td>PacketstreamAsia</td><td>CNAME</td><td>pktasia.x.proxiess.com</td></tr><tr><td>Packetstream (Default) - SOCKS5</td><td>CNAME</td><td>sockspkt.x.proxiess.com</td></tr><tr><td>PacketstreamEU - SOCKS5</td><td>CNAME</td><td>sockspkteu.x.proxiess.com</td></tr><tr><td>PacketstreamAsia - SOCKS5</td><td>CNAME</td><td>sockspktasia.x.proxiess.com</td></tr><tr><td>Brightdata (Default)</td><td>CNAME</td><td>brd.x.proxiess.com</td></tr><tr><td>Brightdata EU</td><td>CNAME</td><td>brdeu.x.proxiess.com</td></tr><tr><td>Brightdata Asia</td><td>CNAME</td><td>brdasia.x.proxiess.com</td></tr><tr><td>Brightdata (Default) - SOCKS5</td><td>CNAME</td><td>socksbrd.x.proxiess.com</td></tr><tr><td>Brightdata EU - SOCKS5</td><td>CNAME</td><td>socksbrdeu.x.proxiess.com</td></tr><tr><td>Brightdata Asia - SOCKS5</td><td>CNAME</td><td>socksbrdasia.x.proxiess.com</td></tr><tr><td>Geonode</td><td>CNAME</td><td>premium-residential.geonode.com</td></tr><tr><td>X Residential</td><td>CNAME</td><td>Refer "White Labeling the X Residential"</td></tr><tr><td>Netnut (Default)</td><td>CNAME</td><td>netnut.x.proxiess.com</td></tr><tr><td>Netnut EU</td><td>CNAME</td><td>netnuteu.x.proxiess.com</td></tr><tr><td>Netnut Asia</td><td>CNAME</td><td>netnutasia.x.proxiess.com</td></tr><tr><td>Netnut (Default) - SOCKS5</td><td>CNAME</td><td>socksnetnut.x.proxiess.com</td></tr><tr><td>Netnut EU - SOCKS5</td><td>CNAME</td><td>socksnetnuteu.x.proxiess.com</td></tr><tr><td>Netnut Asia - SOCKS5</td><td>CNAME</td><td>socksnetnutasia.x.proxiess.com</td></tr></tbody></table>



**X Residential**

This guide outlines the white labeling process for **X Residential**.

{% content-ref url="white-labeling-the-residential-plan-x.md" %}
[white-labeling-the-residential-plan-x.md](white-labeling-the-residential-plan-x.md)
{% endcontent-ref %}

#### PacketStream

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a CNAME Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="187">API</th><th width="145">Authentication</th><th width="249">Host</th><th>Port</th></tr></thead><tbody><tr><td>Packetstream</td><td>HTTP/HTTPS</td><td>pkt.x.proxiess.com</td><td>31112</td></tr><tr><td>Packetstream EU</td><td>HTTP/HTTPS</td><td>pkteu.x.proxiess.com</td><td>31113</td></tr><tr><td>Packetstream Asia</td><td>HTTP/HTTPS</td><td>pktasia.x.proxiess.com</td><td>31114</td></tr><tr><td>Packetstream</td><td>SOCKS5</td><td>sockspkt.x.proxiess.com</td><td>31115</td></tr><tr><td>Packetstream EU</td><td>SOCKS5</td><td>sockspkteu.x.proxiess.com</td><td>31116</td></tr><tr><td>Packetstream Asia</td><td>SOCKS5</td><td>sockspktasia.x.proxiess.com</td><td>31117</td></tr></tbody></table>



#### Oxylabs

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter "`oxy.x.proxiess.com`."
5. Save the changes and allow some time for DNS propagation.
6. Your custom oxylabs domain will now be accessible via the URL: `example.mydomain.com`
7. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table data-header-hidden><thead><tr><th width="126.5859375"></th><th width="147.30078125"></th><th width="245.98828125"></th><th></th></tr></thead><tbody><tr><td><strong>API</strong></td><td><strong>Authentication</strong></td><td><strong>Domain</strong></td><td><strong>Port</strong></td></tr><tr><td>Oxylabs</td><td>HTTP/HTTPS</td><td>oxy.x.proxiess.com</td><td>7777</td></tr><tr><td>Oxylabs EU</td><td>HTTP/HTTPS</td><td>oxyeu.x.proxiess.com</td><td>7778</td></tr><tr><td>Oxylabs Asia</td><td>HTTP/HTTPS</td><td>oxyasia.x.proxiess.com</td><td>7779</td></tr><tr><td>Oxylabs</td><td>SOCKS5</td><td>socksoxy.x.proxiess.com</td><td>7780</td></tr><tr><td>Oxylabs EU</td><td>SOCKS5</td><td>socksoxyeu.x.proxiess.com</td><td>7781</td></tr><tr><td>Oxylabs Asia</td><td>SOCKS5</td><td>socksoxyasia.x.proxiess.com</td><td>7782</td></tr></tbody></table>

#### Smart Proxies

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter "[smrt.x.proxiess.com](http://smrt.x.proxiees.com/)."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

8. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="161.125">API</th><th width="143.4296875">Authentication</th><th width="272.52734375">Domain</th><th>Port</th></tr></thead><tbody><tr><td>Smartproxy</td><td>HTTP/HTTPS</td><td>smrt.x.proxiess.com</td><td>7000</td></tr><tr><td>Smartproxy EU</td><td>HTTP/HTTPS</td><td>smrteu.x.proxiess.com</td><td>7002</td></tr><tr><td>Smartproxy Asia</td><td>HTTP/HTTPS</td><td>smrtasia.x.proxiess.com</td><td>7003</td></tr><tr><td>Smartproxy</td><td>SOCKS5</td><td>sockssmrt.x.proxiess.com</td><td>7004</td></tr><tr><td>Smartproxy EU</td><td>SOCKS5</td><td>sockssmrteu.x.proxiess.com</td><td>7005</td></tr><tr><td>Smartproxy Asia</td><td>SOCKS5</td><td>sockssmrtasia.x.proxiess.com</td><td>7006</td></tr></tbody></table>

#### IP Royal

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="155">API</th><th width="168">Authentication</th><th width="323">Host</th><th>Port</th></tr></thead><tbody><tr><td>IPRoyal</td><td>HTTP/HTTPS</td><td>iproyal.x.proxiess.com</td><td>12321</td></tr><tr><td>IPRoyal EU</td><td>HTTP/HTTPS</td><td>iproyaleu.x.proxiess.com</td><td>12323</td></tr><tr><td>IPRoyal Asia</td><td>HTTP/HTTPS</td><td>iproyalasia.x.proxiess.com</td><td>12322</td></tr><tr><td>IPRoyal</td><td>SOCKS5</td><td>socksiproyal.x.proxiess.com</td><td>12324</td></tr><tr><td>IPRoyal EU</td><td>SOCKS5</td><td>socksiproyaleu.x.proxiess.com</td><td>12326</td></tr><tr><td>IPRoyal Asia</td><td>SOCKS5</td><td>socksiproyalasia.x.proxiess.com</td><td>12325</td></tr></tbody></table>



**Brightdata**

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

<figure><img src="../../.gitbook/assets/image (85).png" alt=""><figcaption></figcaption></figure>

6. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="202">API</th><th width="126.44140625">Authentication</th><th width="254.09375">Domain</th><th>Port</th></tr></thead><tbody><tr><td>Brightdata (Default)</td><td>HTTP/HTTPS</td><td>brd.x.proxiess.com</td><td>22225</td></tr><tr><td>Brightdata EU</td><td>HTTP/HTTPS</td><td>brdeu.x.proxiess.com</td><td>22226</td></tr><tr><td>Brightdata Asia</td><td>HTTP/HTTPS</td><td>brdasia.x.proxiess.com</td><td>22227</td></tr><tr><td>Brightdata (Default)</td><td>SOCKS5</td><td>socksbrd.x.proxiess.com</td><td>22228</td></tr><tr><td>Brightdata EU</td><td>SOCKS5</td><td>socksbrdeu.x.proxiess.com</td><td>22229</td></tr><tr><td>Brightdata Asia</td><td>SOCKS5</td><td>socksbrdasia.x.proxiess.com</td><td>22230</td></tr></tbody></table>

#### Geonode

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the host.
4. In the "value" field, enter `"premium-residential.geonode.com"`
5. Save the changes and allow some time for DNS propagation.
6. Your custom oxylabs domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:

#### NetNut

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. Here are the white labeling data summary for HTTP/HTTPS and SOCKS5:

<table><thead><tr><th width="171.5546875">API</th><th width="174.46484375">Authentication</th><th width="261.70703125">Domain</th><th>Port</th></tr></thead><tbody><tr><td>Netnut</td><td>HTTP/HTTPS</td><td>netnut.x.proxiess.com</td><td>6500</td></tr><tr><td>Netnut EU</td><td>HTTP/HTTPS</td><td>netnuteu.x.proxiess.com</td><td>6501</td></tr><tr><td>Netnut Asia</td><td>HTTP/HTTPS</td><td>netnutasia.x.proxiess.com</td><td>6502</td></tr><tr><td>Netnut (Default)</td><td>SOCKS5</td><td>socksnetnut.x.proxiess.com</td><td>6503</td></tr><tr><td>Netnut EU</td><td>SOCKS5</td><td>socksnetnuteu.x.proxiess.com</td><td>6504</td></tr><tr><td>Netnut Asia</td><td>SOCKS5</td><td>socksnetnutasia.x.proxiess.com</td><td>6505</td></tr></tbody></table>


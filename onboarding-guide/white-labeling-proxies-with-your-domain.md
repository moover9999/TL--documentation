# 〽 White labeling proxies with your domain



{% hint style="info" %}
This process allows you to brand the proxies with your company name. For example, if you are using packet stream the default proxies will have [packetstream.io](http://packetstream.io) in the name. However, using the following guide you can use your domain instead to brand the proxies.
{% endhint %}

#### Quick Domain Links

{% hint style="info" %}
Please make sure to have two different names for the default and EU products (i.e. Oxylabs , Smart) when entering to DNS settings. Having the same name for the different products may lead to generating non-functioning proxies.&#x20;
{% endhint %}

| API                    | Record Type | Domain                                                                                               |
| ---------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| Smartproxies (Default) | CNAME       | smrt.x.proxiess.com                                                                                  |
| Oxylabs (Default)      | CNAME       | oxy.x.proxiess.com                                                                                   |
| Packetstream           | CNAME       | proxy.packetstream.io                                                                                |
| Private                | A           | 159.89.245.182                                                                                       |
| IPRoyal                | CNAME       | proxy.iproyal.com                                                                                    |
| Brightdata             | CNAME       | [pmgr-customer-hl\_e65c4ff1.brd.superproxy.io](http://pmgr-customer-hl\_e65c4ff1.brd.superproxy.io/) |
| SmartEU                | CNAME       | smrteu.x.proxiess.com                                                                                |
| OxylabsEU              | CNAME       | oxyeu.x.proxiess.com                                                                                 |

#### PacketStream

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

![](../.gitbook/assets/Screen\_Shot\_2021-08-14\_at\_10.45.30\_PM.png)

#### Private Resis

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a Name Record pointing to the domain {**159.89.245.182}**.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium pointing to the oxylabs domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

![](../.gitbook/assets/Screen\_Shot\_2021-08-14\_at\_10.06.51\_PM.png)

#### Oxylabs

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the value.
4. In the "Hostname" field, enter "`oxy.x.proxiess.com`."
5. Save the changes and allow some time for DNS propagation.
6. Your custom oxylabs domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:

#### OxylabsEU

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "exampleeu" as the value, appending "eu" at the end. Please note this must be the same value entered for `oxy.x.proxiess.com` with eu at the end.
4. In the "Hostname" field, enter "`oxyeu.x.proxiess.com`."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `exampleeu.mydomain.com`
7. An example on Godaddy is linked below:

#### Smart Proxies

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "example" as the value.
4. In the "Hostname" field, enter "[smrt.x.proxiees.com](http://smrt.x.proxiees.com/)."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `example.mydomain.com`
7. An example on Godaddy is linked below:

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

#### SmartEU

1. Log in to your domain hosting provider account and navigate to the DNS management section.
2. Locate the option to add a new CNAME record for your domain.
3. Enter the desired subdomain as the CNAME record value. For example, if you want your subdomain to be "example," enter "exampleeu" as the value, appending "eu" at the end. Please note this must be the same value entered for [smrt.x.proxiees.com](http://smrt.x.proxiees.com/) with eu at the end.
4. In the "Hostname" field, enter "[smrteu.x.proxiees.com](http://smrteu.x.proxiees.com/)."
5. Save the changes and allow some time for DNS propagation.
6. Your custom domain will now be accessible via the URL: `exampleeu.mydomain.com`
7. An example on Godaddy is linked below:

#### IP Royal

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

<figure><img src="../.gitbook/assets/IP Royal.png" alt=""><figcaption></figcaption></figure>

#### Brightdata

Use this method to brand your proxies with your own domain/company name

To brand the proxies under your domain follow these steps:

1. Open the DNS configuration for your domain.
2. Create a C Name Record pointing to the domain.
3. Whatever you enter in the name/host will decide the domain which points to our API IP.
4. Thus if your domain is [API.com](http://api.com/) and you enter the host premium or whatever you want to call it pointing to the PacketStream domain, your proxies will be formatted [premium.yourdomain.com](http://premium.yourdomain.com/):port:user:pass
5. An example on Godaddy is linked below:

<figure><img src="../.gitbook/assets/Screen Shot 2022-09-09 at 2.26.02 PM.png" alt=""><figcaption></figcaption></figure>


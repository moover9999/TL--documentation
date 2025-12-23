---
icon: question
---

# What is the Torch Labs ISP API V2

Our ISP (Static Residential) products in TL ISP API V2 are optimized for high-demand use cases across sneakers, tickets and retail platforms. With coverage in the US, UK, Canada and Germany, our proxy pools leverage top-tier ISPs like AT\&T, BT, Rogers and Dtag. Sneaker plans are designed for low-security retail sites, while specialized ticketing options support platforms like Ticketmaster, AXS and SeatGeek. RetailPlus offers enhanced support for stores like Pokémon Center, Popmart and Target.



## **Product Name / Location / ISP Carriers / Target Use Case**

Each ISP pool is assigned to a specific geographic region, ISP carrier and target use case:

**USA**

| Product Name                                                           | Location    | ISP Carrier(s)                                           | Use Case                                                  |
| ---------------------------------------------------------------------- | ----------- | -------------------------------------------------------- | --------------------------------------------------------- |
| ISP\_US\_SNEAKERS                                                      | Ashburn     | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum, Frontier | Low-security sneaker & retail sites, general web scraping |
| ISP\_US\_TICKETS                                                       | Ashburn     | AT\&T, Windstream, RCN, Wave, Spectrum, Frontier         | Ticketmaster, AXS                                         |
| ISP\_US\_RETAILPLUS                                                    | Ashburn     | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum, Frontier | PKC, Popmart (+ sneaker sites)                            |
| ISP\_US\_SOCIAL                                                        | Ashburn     | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum, Frontier | Zero fraud score on Scamalytics                           |
| <p>SN_US_SNEAKERS </p><p><em>(<strong>Subnet Plan</strong>)</em></p>   | Ashburn     | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum, Frontier | Low-security sneaker & retail sites, web scraping         |
| <p>SN_NY_TICKETS </p><p><em>(<strong>Subnet Plan</strong>)</em></p>    | New York    | AT\&T, Windstream, RCN, Wave, Spectrum, Frontier         | Ticketmaster, AXS                                         |
| <p>SN_LA_TICKETS </p><p><em>(<strong>Subnet Plan</strong>)</em></p>    | Los Angeles | AT\&T, Windstream, RCN, Wave, Spectrum, Frontier         | Ticketmaster, AXS                                         |
| <p>SN_US_TICKETS </p><p><em>(<strong>Subnet Plan</strong>)</em></p>    | Ashburn     | AT\&T, Windstream, RCN, Wave, Spectrum, Frontier         | Ticketmaster, AXS                                         |
| <p>SN_US_RETAILPLUS </p><p><em>(<strong>Subnet Plan</strong>)</em></p> | Ashburn     | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum, Frontier | PKC, Popmart (+ sneaker sites)                            |

**UK**

| Product Name                                                           | Location | ISP Carrier(s)                 | Use Case                                                  |
| ---------------------------------------------------------------------- | -------- | ------------------------------ | --------------------------------------------------------- |
| ISP\_UK\_SNEAKERS                                                      | London   | Virgin Media, British Telecom  | Low-security sneaker & retail sites, general web scraping |
| ISP\_UK\_TICKETS                                                       | London   | Virgin Media, British Telecom  | Ticketmaster, AXS                                         |
| ISP\_UK\_RETAILPLUS                                                    | London   | Virgin Media, British Telecom  | PKC (+ sneaker sites)                                     |
| <p>SN_UK_TICKETS </p><p><em>(<strong>Subnet Plan</strong>)</em></p>    | London   | Virgin Media, BT, Dtag, Orange | Ticketmaster, AXS                                         |
| <p>SN_UK_RETAILPLUS </p><p><em>(<strong>Subnet Plan</strong>)</em></p> | London   | Virgin Media, British Telecom  | PKC, Popmart (+ sneaker sites)                            |

**Germany**

| Product Name        | Location  | ISP Carrier(s) | Use Case                                                  |
| ------------------- | --------- | -------------- | --------------------------------------------------------- |
| ISP\_DE\_SNEAKERS   | Frankfurt | Dtag           | Low-security sneaker & retail sites, general web scraping |
| ISP\_DE\_TICKETS    | Frankfurt | Dtag           | Ticketmaster, AXS                                         |
| ISP\_DE\_RETAILPLUS | Frankfurt | Dtag           | PKC, Popmart (+ sneaker sites)                            |

**Canada**

| Product Name                                                        | Location | ISP Carrier(s) | Use Case                                                  |
| ------------------------------------------------------------------- | -------- | -------------- | --------------------------------------------------------- |
| ISP\_CA\_SNEAKERS                                                   | Toronto  | Rogers         | Low-security sneaker & retail sites, general web scraping |
| ISP\_CA\_TICKETS                                                    | Toronto  | Rogers         | Ticketmaster, AXS                                         |
| <p>SN_CA_TICKETS </p><p><em>(<strong>Subnet Plan</strong>)</em></p> | Toronto  | Rogers         | Ticketmaster, AXS                                         |

**Australia**

| Product Name        | Location | ISP Carrier(s) | Use Case                                |
| ------------------- | -------- | -------------- | --------------------------------------- |
| ISP\_AU\_TICKETS    | Sydney   | Vocus          | Ticketmaster, Tiketek                   |
| ISP\_AU\_RETAILPLUS | Sydney   | Vocus          | PKC, Popmart (+ sneaker & retail sites) |

**Hong Kong**

| Product Name        | Location  | ISP Carrier(s) | Use Case                                |
| ------------------- | --------- | -------------- | --------------------------------------- |
| ISP\_HK\_RETAILPLUS | Hong Kong | HGC            | PKC, Popmart (+ sneaker & retail sites) |
| ISP\_HK\_TICKETS    | Hong Kong | HGC            | HKC (Cityline not confirmed)            |

**Korea**

| Product Name                                                     | Location | ISP Carrier(s) | Use Case                                                  |
| ---------------------------------------------------------------- | -------- | -------------- | --------------------------------------------------------- |
| ISP\_KR\_SNEAKERS                                                | Seoul    | Korea Telecom  | Low-security sneaker & retail sites, eBay, Coupang, Naver |
| <p>SN_KR_SNEAKERS<br>(<em><strong>Subnet Plan</strong></em>)</p> | Seoul    | Korea Telecom  | Low-security sneaker & retail sites, eBay, Coupang, Naver |

**Japan**

| Product Name        | Location | ISP Carrier(s) | Use Case                                                  |
| ------------------- | -------- | -------------- | --------------------------------------------------------- |
| ISP\_JP\_RETAILPLUS |          |                | Low-security sneaker & retail sites, eBay, Coupang, Naver |

{% hint style="info" %}
**Please note the following: any product name that starts with '**<mark style="color:red;">**ISP\_**</mark>**' refers to a single IP order, while those starting with '**<mark style="color:red;">**SN\_**</mark>**' refer to subnets containing 256 IPs.**
{% endhint %}

{% hint style="info" %}
**ISP\_** is 1 IP

**SN\_** is a subnet that has 256 IPs
{% endhint %}

#### **Speed Benchmarks** <a href="#speed-benchmarks" id="speed-benchmarks"></a>

* Average latency: **10–60 ms,** measured from the server’s respective location.

#### **Protocols Supported**  <a href="#protocols-supported" id="protocols-supported"></a>

* HTTP/HTTPS
* SOCKS5
* UDP (User Datagram Protocol)
* TCP (Transmission Control Protocol)

#### **Concurrent Threads** <a href="#concurrent-threads" id="concurrent-threads"></a>

* **No limitations** on concurrent threads.

#### **IP Allocation** <a href="#ip-allocation" id="ip-allocation"></a>

* You receive access to **all available IPs in stock** at the time of order.


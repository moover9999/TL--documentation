---
icon: question
---

# What is the Torch Labs ISP API V2

Our ISP (Static Residential) products in TL ISP API V2 are optimized for high-demand use cases across sneakers, tickets and retail platforms. With coverage in the US, UK, Canada and Germany, our proxy pools leverage top-tier ISPs like AT\&T, BT, Rogers and Dtag. Sneaker plans are designed for low-security retail sites, while specialized ticketing options support platforms like Ticketmaster, AXS and SeatGeek. RetailPlus offers enhanced support for stores like Pokémon Center, Popmart and Target.



## **Product Name / Location / ISP Carriers / Target Use Case**

Each ISP pool is assigned to a specific geographic region, ISP carrier and target use case:

| **Product Name**                                   | **Location**       | **ISPs/Carriers**                                                                | **Target Use Case**                                                                  |
| -------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ISP\_CA\_SNEAKERS                                  | Toronto, Canada    | Rogers                                                                           | Low-security sneaker and retail sites (excl. Tickets, Popmart)                       |
| ISP\_DE\_SNEAKERS                                  | Frankfurt, Germany | DTAG                                                                             | Low-security sneaker and retail sites (excl. Tickets, Popmart)                       |
| ISP\_UK\_SNEAKERS                                  | London, UK         | Virgin Media, British Telecom, Dtag, Orange _(moving to just BT and Virgin)_     | Low-security sneaker and retail sites (excl. Tickets, Popmart)                       |
| ISP\_US\_SNEAKERS                                  | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum/Charter, Frontier _(coming soon)_ | Low-security sneaker and retail sites (excl. Tickets, Popmart)                       |
| SN\_US\_SNEAKERS (**Subnets**)                     | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum/Charter, Frontier _(coming soon)_ | Low-security sneaker and retail sites (excl. Tickets, Popmart)                       |
| ISP\_CA\_TICKETS                                   | Toronto, Canada    | Rogers                                                                           | High-demand ticketing platforms (TM, AXS, SG)                                        |
| ISP\_DE\_TICKETS                                   | Frankfurt, Germany | DTAG                                                                             | High-demand ticketing platforms (TM, AXS, SG)                                        |
| ISP\_UK\_TICKETS                                   | London, UK         | British Telecom                                                                  | High-demand ticketing platforms (TM, AXS, SG)                                        |
| ISP\_US\_TICKETS                                   | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Spectrum/Charter, Frontier _(coming soon)_         | High-demand ticketing platforms (TM, AXS, SG)                                        |
| SN\_NY\_TICKETS (Subnets)                          | New York, USA      | AT\&T, Windstream, RCN, Wave, Spectrum/Charter, Frontier _(coming soon)_         | High-demand ticketing platforms (TM, AXS, SG)                                        |
| SN\_UK\_TICKETS (**Subnets**)                      | London, UK         | Virgin Media, British Telecom, Dtag, Orange _(moving to just BT and Virgin)_     | High-demand ticketing platforms (TM, AXS, SG)                                        |
| <p>SN_CA_TICKETS<br>(<strong>Subnets</strong>)</p> | Toronto, Canada    | Rogers                                                                           | High-demand ticketing platforms (TM, AXS, SG)                                        |
| SN\_US\_TICKETS (**Subnets**)                      | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Spectrum/Charter, Frontier _(coming soon)_         | High-demand ticketing platforms (TM, AXS, SG)                                        |
| ISP\_US\_RETAILADVANCED                            | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum/Charter, Frontier _(coming soon)_ | Pokemon Centre, Popmart, Target and retail sites (**DOES NOT WORK FOR EVENT SITES**) |
| SN\_US\_RETAILPLUS (Subnets)                       | Ashburn, USA       | AT\&T, Windstream, RCN, Wave, Cogent, Spectrum/Charter, Frontier _(coming soon)_ | Retail sites such as Pokemon Centre, Popmart, Target                                 |

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


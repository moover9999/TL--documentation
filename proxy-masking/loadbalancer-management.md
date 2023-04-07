# ⚖ Loadbalancer management

{% hint style="info" %}
This guide will go over on how to properly scale and manage your load balancer to ensure you have the optimal performance on your proxies. Managing the load balancer is very important as this determines how much traffic you can accept. If your load balancer is not set up for the right amount of traffic (too small) then all the proxies will fail. Therefore, it is essential to follow the below recommendations.&#x20;
{% endhint %}

{% hint style="danger" %}
DO NOT CHANGE ANYTHING IN THE SERVER/DROPLET SECTION. Changing anything here will cause the masking to not work and all your proxies will fail to connect.
{% endhint %}

Based on your setup, your DO account should look something like the below image:

![](../.gitbook/assets/Screen\_Shot\_2022-02-23\_at\_10.22.07\_AM.png)

The **LOAD BALANCERS** is where all your load balancers exist

The **DROPTLETS** is where all your servers exist



### What is a load balancer?

_Load balancing_ refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.

### What is a server (DO refers to servers as droplet)?

In computing, a server is a piece of computer hardware or software that provides functionality for other programs or devices, called "clients".

### Managing your load balancer

Our special masking script is installed on your servers. This script routes the traffic to the proxy domain via the server acting as a middle man. However, all the initial traffic comes to one main point which is the load balancers. Then the load balancer distributes this traffic to one or more connected servers.

![](<../.gitbook/assets/image (1).png>)

A load balancer on DO can handle 10,000 simultaneous connections and 10,000 connections per second. What this means is that each connection is one proxy connection coming from a user. So based on how many users you have and how much demand you anticipate for a drop you need to increase the number of load balancer nodes. Each extra node gives you an additional 10,000 simultaneous connections.&#x20;

For example, you have one user who is running 2000 tasks. These 2000 tasks would equate to basically 2000 simultaneous connections. You need to determine the demand for each drop and the number of running users and scale the load balancer accordingly.&#x20;

You are charged an additional cost for each node by DO, however, you can scale back down after the drop to avoid incurring large costs. By scaling up and down manually you can avoid getting charged a lot of money and you can still have a very smooth drop.



### Resize your load balancer

1. Click on your load balancer

2\. Go to settings

![](<../.gitbook/assets/Screen Shot 2022-03-20 at 3.44.21 PM.png>)

3\. Go to scaling configuration and click resize

![](<../.gitbook/assets/Screen Shot 2022-03-20 at 3.44.59 PM.png>)

4\. From here you can select the size of nodes you want. You can increase or decrease the number of nodes.

![](<../.gitbook/assets/Screen Shot 2022-03-20 at 3.45.33 PM.png>)

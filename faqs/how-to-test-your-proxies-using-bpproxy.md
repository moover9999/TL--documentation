# How to Test Your Proxies using BPProxy

### **BPProxy Chrome Extension User Guide** <a href="#x9qn3py4tet4" id="x9qn3py4tet4"></a>

#### **1. Installing the BPProxy Chrome Extension** <a href="#id-5edfgmfry67q" id="id-5edfgmfry67q"></a>

**Step-by-step:**

1. Open Google Chrome.
2. Visit the Chrome Web Store.
3. Search for **"BPProxy"**.

![](../.gitbook/assets/0.png)

4. Click on the extension, then select Add to Chrome.

![](<../.gitbook/assets/1 (2).png>)

5. Confirm by clicking Add extension.<br>

#### **2. Opening the Extension and Initial Setup** <a href="#ncwx8v6bo2hq" id="ncwx8v6bo2hq"></a>

1. Click the **BPProxy icon** in your Chrome toolbar (top-right corner).

![](<../.gitbook/assets/2 (2).png>)

2. A dropdown window will appear for proxy configuration.

![](<../.gitbook/assets/3 (1).png>)

3. Click the **"Add Proxy"** or “**Edit**” button.<br>

#### **3. Adding a Proxy** <a href="#id-7dl027wessso" id="id-7dl027wessso"></a>

Fill out the following fields:

* **Proxy Type**: HTTP, HTTPS, SOCKS4, or SOCKS5
* **Host**: IP address of the proxy
* **Port**: Usually 8080, 3128, or another depending on your provider
* **Username/Password** (if required): For authenticated proxies<br>

![](<../.gitbook/assets/4 (1).png>)

![](../.gitbook/assets/5.png)

Then click **OK** to save.<br>

#### **4. Switching or Enabling a Proxy** <a href="#br7l9493qsiu" id="br7l9493qsiu"></a>

1. After saving, your proxy will be listed.
2. To activate it, click the **toggle switch** next to the proxy.

![](../.gitbook/assets/6.png)

3. You’ll see the list of proxies that were added and select one from the drop down to **enable** the proxy active.

![](../.gitbook/assets/7.png)<br>

#### **5. Testing If Your Proxy Works** <a href="#j3myf0ytuxwv" id="j3myf0ytuxwv"></a>

**Method 1: IP Leak Test**

1. Visit[ https://ipinfo.io](https://ipinfo.io/) or[ https://whatismyipaddress.com](https://whatismyipaddress.com/).
2. Check the IP and location details.

![](../.gitbook/assets/8.png)![](../.gitbook/assets/9.png)<br>

3. If they match your proxy, it’s working.<br>

**Method 2: Speed & Anonymity Check**

Use a tool like:

* [https://iproyal.com/online-proxy-checker/](https://iproyal.com/online-proxy-checker/)
* [https://gologin.com/proxy-checker](https://gologin.com/proxy-checker)<br>

Paste in your proxy IP and port. Run the test to see latency, anonymity level, and more.

![](../.gitbook/assets/10.png)

![](../.gitbook/assets/11.png)

#### **6. Editing or Deleting a Proxy** <a href="#ip35kcl77kfd" id="ip35kcl77kfd"></a>

* Click the **Edit** icon (pencil) to change details.

![](../.gitbook/assets/12.png)

* Click the **Delete** icon to remove/delete the proxy.

![](../.gitbook/assets/13.png)

#### **7. Testing Proxies on Target Site** <a href="#ue0fjtp97sa1" id="ue0fjtp97sa1"></a>

* Before deploying your proxies, test them against your target site to ensure compatibility, speed, and success rates. This helps you identify which proxies perform best and avoid wasting time on blocked or slow IPs.

![](../.gitbook/assets/14.png)

#### **Tips & Troubleshooting** <a href="#id-56911ukbkmw6" id="id-56911ukbkmw6"></a>

* If websites don’t load after enabling a proxy, try:
  * Switching proxy types (HTTP vs SOCKS5)
  * Testing another proxy from your list
  * Ensuring the IP/port is active
* Avoid using multiple proxy extensions at once, as they may conflict.
* Always clear the browser cache when switching proxies for accuracy.<br>

# ⚙️ Setting up discord authentication

{% embed url="https://youtu.be/4wXkn4GG20E" %}

1. To set up discord authenticator, Follow the discord developer link mentioned here.  [https://discord.com/developers](https://discord.com/developers)

![](<../.gitbook/assets/Untitled design (7).png>)

2\. Click the new "Application"

![](<../.gitbook/assets/Untitled design (1) (9).png>)

3\. Name your application - We recommend using your company name and click "Create".

![](<../.gitbook/assets/Untitled design (3) 4.png>)

4\. Then upload your company logo.

![](<../.gitbook/assets/Untitled design (3) (3).png>)

5\. Left side of the Dashboard click the OAuth2.

![](<../.gitbook/assets/Untitled design (6) (1).png>)

6\. Here copy the Client ID.

![](<../.gitbook/assets/Untitled design (5) (2).png>)

7\. Here paste your Client ID.

![](<../.gitbook/assets/Untitled design (6).png>)



8\. Here again copy the Client Secret from discord.

![](<../.gitbook/assets/Untitled design (4) (3).png>)

9\. Here paste the Client Secret.

![](<../.gitbook/assets/Untitled design (8) (2).png>)



10\. Click URL from the site and paste in Discord Developer.

![](<../.gitbook/assets/Untitled design (9) (2).png>)



11\. Click Add Redirect, Paste the URL here.&#x20;

[https://auth-service-w34nvoxnwq-uc.a.run.app/api/v1/auth/discord/callback](https://auth-service-w34nvoxnwq-uc.a.run.app/api/v1/auth/discord/callback)

![](<../.gitbook/assets/Untitled design (3) (5).png>)

12. Once added, it will look like this. Then click on the **Add Another** button.

<figure><img src="../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

13. Then paste the below URL and click on the **Save Changes** button. Once you add both URLs, it should be like this.

[https://core-proxy-service-w34nvoxnwq-uc.a.run.app/auth/discord/callback](https://core-proxy-service-w34nvoxnwq-uc.a.run.app/auth/discord/callback)

<figure><img src="../.gitbook/assets/image (50).png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/image (51).png" alt=""><figcaption></figcaption></figure>

14. Choose this option, If you want members to automatically join your server.&#x20;

![](<../.gitbook/assets/Untitled design (2) (7).png>)

15. Copy your Server ID from Discord.

![](<../.gitbook/assets/Untitled design (1) (11).png>)

16. Click the Torch Lab Icon.

![](<../.gitbook/assets/Untitled design (12) (6).png>)

17. Copy your Server ID.

![](<../.gitbook/assets/Untitled design (13) (4).png>)

18. Paste the Server ID and save details.

![](<../.gitbook/assets/Untitled design (16).png>)

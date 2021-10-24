# nokoin

## Product Summary
Our product aims to reduce coin usage and foster the utilization of digital currency by providing opportunities for the customers to deposit their changes to cryptocurrency accounts after paying cash.

## Motivation & Inspiration
1. Due to the development of NFC and card-based payment, many people are already used to coinless and paperless payments at malls, department stores, cafes, etc. However, in some unfortunate situations when cash has to be used, receiving change is very inconvenient - even wallets these days do not have separate spots to keep the coins. We wanted to reduce this inconvenience that customers frequently face and complain about. 
2. According to CBS, “Americans are losing $62 million a year by tossing coins in the trash.” Also, two cents are needed to produce a penny, and 7 cents are used to make a nickel. The American government noticed these two problematic phenomena and decided to reduce the production of pennies starting from late 2022. In order to minimize the country’s economical damage, our group wanted to come up with an alternative solution to reduce coin usage.
3. COVID-19 pandemic raised hygiene issues for everyone, and the importance of minimizing in-person contact and social distancing has been underscored by the government and experts several times. However, when returning change to the customers, the contact between cashier and customer is unavoidable. Even if the customer uses self-checkout, the coins and bills which were touched by an uncountable number of people may cause serious health issues. By using nokoin, we would be able to minimize public health issues and possible virus infections, especially for children and the elderly. 

## Product Development
Even though we only had 36 hours to plan, implement, and publish the project, we wanted to be very organized to follow the steps of the Unified Process. Due to insufficient time and resources, we, unfortunately, decided to truncate each phase’s duration and the evaluation process.

**Phase I: Inception**
- After several discussions and brainstorming sessions, we decided to connect the world of cryptocurrency and the often-wasted coins.
- We narrowed down our target businesses like stores, POS companies, and cryptocurrency transaction platforms. 
- Since nokoin can increase customer satisfaction and retention by improving convenience, we expected the stores to be very interested.
- If the stores choose to use our product after positive customer feedback, the POS companies would be willing to implement nokoin into their software. The possible marketplace for POS companies could be improved by nokoin.
- Our product can increase the transaction and interaction between the customers and cryptocurrency companies by improving the accessibility to cryptocurrency. 
- We came up with several use cases and system diagrams in the shoe of customers trying to purchase stuff using cash and receiving coin change afterward.
- We researched cryptocurrency APIs that we can utilize for project implementation and concluded to import the Ethereum API (Web3). Also, for increased customer convenience and security, we decided to make use of QR codes by importing Dynamsoft API.

**Phase II: Elaboration**
Based on the user story we created, we implemented the requirements that were detected from the Inception phase. For quick and concise development, we also designed a System Diagram.

1. The POS shows the customer how much he or she needs to pay and payment options. After inserting cash into POS, the user will be provided with two choices: receiving coin and bill change and Ethereum. The functionalities for buttons were built using JavaScript, HTML, and CSS, and the User Interface for the POS was built using Adobe Creative Suite.
2. If the customer chooses the Ethereum option, the POS will try to scan the customer’s QR code. In the POS system, our application will be represented in Heroku and provide a scanner where the customers can pull up their QR codes. The Dynamsoft API will decode the QR code so that the system can verify whether the customer has a valid Metamask account, a digital currency wallet. 
3. Through creating an actual Metamask account, we tested whether our QR code scanner works. 
4. When the QR code validation is over, the Ethereum API (Web3) functions will work on transferring the purchased cryptocurrency into the customer’s digital wallet. Web3 will fetch the unique address of the customer from the Metamask and then transfer the digital currency. We fulfilled these requirements by modifying the Web3 API using python.
5. After implementing each functionality, we always made sure that digital currency transaction works by, again, actually creating accounts, mining a bit of Ethereum, and transferring those between accounts. 
6. To mitigate the risks and edge cases, we did not forget to implement the functions to pop an error when wrong QR codes are scanned. Also, for a better User Experience, we constructed functions for the ‘go back’ button. An architecture diagram was designed to visualize the interaction among the three big portions of our system.

**Phase III&IV: Construction and Transition**
After finishing fulfilling our requirements and constructing our application, we tested all of the use cases we came up with. Also, we brainstormed about rooms for improvement and asked for advice from the senior developers at various companies who were willing to help!

##Future improvements
1. We did not our product to just stop at transferring change to cryptocurrency; to provide better customer service, we wanted to give more options for transferring excessive change. Not only nokoin transfers change into cryptocurrency but also bank accounts. We thought of providing services that can build a data and budget transfer network so that the customers can directly send their changes to one of their bank accounts, such as Venmo, PayPal, or Bank of America. By doing so, many of our target companies will get a chance to widen their markets. Stores will be able to exponentially increase customer retention and satisfaction. POS companies will grab a chance to develop and implement software for direct change and traditional bank account transactions. Cryptocurrency companies will compete with the traditional banking services and also collaborate with the traditional banks for better customer services.
2. Also, the gas fee for cryptocurrency transactions should be marketed very carefully. Since we are handling with small amount of money, some customers might be very bothered and discouraged to use our product because of the gas fee. Our solution for this problem was to focus more on the amount of digital currency that was transferred, not the gas fee that was taken away. Also, we can assure that the companies - especially the cryptocurrency companies - advertise how valuable cryptocurrency is and how investable it is.
3. We wanted the customers to use our product safely, and this goal was one of the reasons why we chose to use QR codes for authentication. However, we recognize some unexpected issues and hacking attacks might happen. Currently, the security issues are out of our abilities due to a lack of time and resources. We would like to delve into this part very soon.

**Prerequisites for this project**
- Python3, web3
- Node.js
- Express

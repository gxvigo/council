# council



## Bluemix
- Sydney
- acc-dev

---

#### Secure Gateway

##### On your mac/windows
- download and install client for mac
    - gateway ID: xxxxxxx_prod_au-syd
    - security token: eyJ0xxxxxxs7hs8OUwrIuKxPfd0


- To run the client gateway on the mac.
  - open folder: application/ibm
  - run: secgw.command
  - console: http://localhost:9003/dashboard
  - add localhost:3306 in the Access Control List (where localhost:3306 is the URL of mySQL)

##### On Bluemix
Destinations on Secure Gateway on Bluemix (mySQL running on my mac):
- launch Secure Gateway client (from the Secure Gateway tile in your space)
- add (or view) Destination: localhost:3306
- at this ponit (if everything works fine) in the details of the destination there is a cloud endpoint: cap-au-sg-prd-05.integration.ibmcloud.com:15047 (to be used as mySQL destination from Bluemix app)

To manually add a Destination on Bluemix:
- add a destination: “mySQL on myMac”, “localhost”, “3306”, TCP
- click on the ‘gear’ to get the info to connect to mySQL on the mac:
    - beyond all the details you will find the address:port to use in your Bluemix application to connect to mySQL (or whatever is your datasource) on you mac (or whatever is your server)
        - cap-au-sg-prd-05.integration.ibmcloud.com:15047

---

#### API Connect Toolkit
- install toolkit (npm install -g apiconnect)
- create an api app (apic loopback)
- use the GUI without logging to Bluemix (export SKIP_LOGIN=true; apic edit)
- to refresh an app after changes (apic loopback:refresh)


##### Publish to blumix
Lately I found that a simple login from Publish function in API Designer (toolkit GUI) is not enough. To solve this:

###### From CLI (terminal in the mac/windows):
- $ apic login
  - Enter the API Connect server
  - ? Server: au.apiconnect.ibmcloud.com
  - ? Username: giovanni@nz.ibm.com
  - ? Password (typing will be hidden) ********
  - Generate a passcode from https://mccp.au-syd.bluemix.net/login/showpasscode.jsp
  - (Press the spacebar to automatically launch a browser)
  - ? Enter Bluemix one-time passcode: Si7Erj
  - Logged into au.apiconnect.ibmcloud.com successfully

###### From Toolkit Designer (http://127.0.0.1:9000/#/design/products/editor/council:1.0.0)
- Publish with usual creadentials
  - add new target (catalog + create app)
  - Publish to previously defined Target

When publish to an app, in the apic console (terminal) it’s possible to see the logs, the address of app target on Bluemix is shown: 

apiconnect-31722af8-dde4-4f00-a19e-1eba02898ac5.giovanninzibmcom-acc-dev.apic.au-syd.mybluemix.net
Is then easy to rebuild the full API path:
http://apiconnect-31722af8-dde4-4f00-a19e-1eba02898ac5.giovanninzibmcom-acc-dev.apic.au-syd.mybluemix.net/api/rates_instalment_due_dates


----
#### Developer Portal

- https://sb-giovanninzibmcom-acc-dev.developer.au.apiconnect.ibmcloud.com/user/login
- admin:<sameeAsPoT> (Password generated from the email received when creating Dev Portal)

- Dev. Organization: GiovanniAppDeveloper
- gxvigo@gmail.com:<sameeAsPoT>

- Application: accMobileApp
—- client id: 97ca5a3f-ba90-47b2-b797-5dfbabd1c61c
—- secret: N0fC7qN7jY2rQ1yS6jU5sO1vN7rR5xH5wG8rV3nI4tT7iC4iJ4

----
#### MySQL
Run on my workstation (mac) where the Secure Gateway client is installes as well
- localhost:3306
- root:password
- db: demo

Table used for loopback app:

CREATE TABLE `demo`.`property_rates_valuations` (
  `client_id` VARCHAR(10) NOT NULL COMMENT '',
  `address` VARCHAR(45) NULL COMMENT '',
  `assessment_number` INT NULL COMMENT '',
  `lastest_capital_value` DECIMAL(2) NULL COMMENT '',
  `latest_land_value` DECIMAL(2) NULL COMMENT '',
  `latest_imrovement_value` DECIMAL(2) NULL COMMENT '',
  `valuation_as_at_date` VARCHAR(20) NULL COMMENT '',
  `land_area` INT NULL COMMENT '',
  `certified_of_title_number` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`client_id`)  COMMENT '');

CREATE TABLE `demo`.`rates_instalment_due_dates` (
  `Instalment` INT NOT NULL COMMENT '',
  `payment_due_date` DATE NULL COMMENT '',
  PRIMARY KEY (`Instalment`)  COMMENT '');

----
#### Node test app for mySQL - node4mysql
This app just establish a connection to a mySQL instance. The connection uses the Secure Gateway destination defined earlier ( XXXX).
Code can be found on GIT: https://github.com/gxvigo/node4mysql

Create a node.js runtime in Bluemix and name it: node4mysql

To publish the app on Bluemix from your laptop (CF and Bluemix CLI must be installed)

 - cd /Users/giovanni/opt/workspaces/Bluemix/node4mysql (or whereever you cloned the git repo)
 - $ bluemix api https://api.au-syd.bluemix.net
 - $ bluemix login -u giovanni@nz.ibm.com -o giovanni@nz.ibm.com -s test
 - $ cf push node4mysql

To app logs:
 - on Bluemix AU - test space - node4mysql - Logs

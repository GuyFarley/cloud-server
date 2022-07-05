# LAB - Class 16 - AWS: Cloud Servers

Deploy a Node.js server to AWS EC2

## Author

Guy Farley

## Problem Domain

### Deploy a simple Node.js server to EC2, using Elastic Beanstalk

- Choose a server you’ve built previously
  - Option 1: A simple API or Web Server
  - Option 2: A socket.io event Hub
  - The server should not require a database
  - Check in your server to GitHub

### Task 1

- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

### Task 2

- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using eb deploy

## Links and Resources

Deployed using Elastic Beanstalk from the AWS Control Panel (GUI):
<http://gf401d47-env.eba-vvbtp3hs.us-west-2.elasticbeanstalk.com/>

Deployed using Elastic Beanstalk from the terminal using eb deploy:
<http://cloud-server.eba-pdgzt8js.us-west-2.elasticbeanstalk.com/>

## Setup

## How to initialize/run your application (where applicable)

This application can be run from either of the 2 links noted above

## Process Documentation

- Created new repo called `cloud-server`
- Used existing server code from my `server-deployment-practice` lab, since it was a simple server that required minimal code and did not require a database
- Created a new Elastic Beanstalk environment and manually deployed from the AWS Control Panel, by uploading a .zip file
- Created a new environment from my terminal, and deployed my app using `eb deploy`
- Confirmed both links ran my server successfully

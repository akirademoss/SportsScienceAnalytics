# SportsScienceAnalytics
This is a fullstack mini-side project to demo a lightweight sports science analytics application, it uses react + vite, react hooks, django, sql, and is easily deployable to AWS free tier EC2 instance.  This repo also includes general deployment instructions. Below is a demo.

![sportssciencedemo](https://github.com/akirademoss/SportsScienceAnalytics/assets/8731829/89e23419-8b77-46ef-913d-2df4a9c7d866)

The app is very simple and demonstrates a very basic sports science analytics app.  Currently the data analytics computes a score based on the average heartrate.  Data processing is done on the backend using Python's pandas and numpy libraries.

Link to sample data for testing: https://github.com/akirademoss/fitbit-heartrate-data
## Prerequisites
You will need to have node.js installed, additionally this was made with python3.7.  If you have a newer version and the project is not building you will need to install python3.7 on your machine.

## Backend Django Setup

#### Setting up the virtual environment
```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics$ cd backend
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/backend$ python3 -m venv .venv
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/backend$ source .venv/bin/activate
```

#### Installing requirements from requirements.txt and run the server
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/backend$ pip3 install -r ./requirements.txt
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/backend$ python3 manage.py runserver
```

## Frontend React Setup

#### Project uses React + Vite - To get frontend up and running use the following commands

```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics$ cd frontend
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/frontend$ npm install
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/SportsScienceAnalytics/frontend$ npm run dev
```

# When running on AWS EC2 instance use following commands

## EC2 instance 
when setting up choose EC2 free tier, Ubuntu newest version, you can create a custom security group and ssh key so you can ssh into the terminal.  Below are instructions for after you have SSHed into the terminal to test and make sure things are running.

## On Ubuntu 20.02+ will need Python 3.7 for this project install on ec2 instance

```
ubuntu@ip:~$ sudo apt install software-properties-common
ubuntu@ip:~$ sudo add-apt-repository ppa:deadsnakes/ppa
ubuntu@ip:~$ sudo apt update
ubuntu@ip:~$ sudo apt install python3.7
ubuntu@ip:~$ sudo apt-get install python3.7-venv
```

## Backend Django Setup

#### Setting up the virtual environment
```
ubuntu@ip:~/SportsScienceAnalytics$ cd backend
ubuntu@ip:~/SportsScienceAnalytics/backend$ python3.7 -m venv .venv
ubuntu@ip:~/SportsScienceAnalytics/backend$ source .venv/bin/activate
```

#### Installing requirements from requirements.txt and run the server
```
(.venv) ubuntu@ip:~/SportsScienceAnalytics/backend$ pip3 install -r ./requirements.txt
(.venv) ubuntu@ip:~/SportsScienceAnalytics/backend$ python3 manage.py runserver 0.0.0.0:8000
```

## Frontend React Setup

#### Project uses React + Vite - To get frontend up and running use the following commands

```
ubuntu@ip:~/SportsScienceAnalytics$ cd frontend
ubuntu@ip:~/SportsScienceAnalytics/frontend$ npm install
ubuntu@ip:~/SportsScienceAnalytics/frontend$ npm run dev -- --host
```

## Verify your inbound roles in your security group are configured properly - see picture below
Your security group acts as a virtual firewall for your EC2 instance - to test that your setup is working on your EC2 instance you need to configure your inbound rules properly and include the ports that your frontend and backend communicate on.  In this app our frontend is on port 5173 and our backend is on port 8000. I have masked my details for security but configure to your specific IP address.  Yours will populate when selected.

![SSA2](https://github.com/akirademoss/SportsScienceAnalytics/assets/8731829/cd8f5a66-2dbc-4a66-9a85-1b35893a0825)


## Verify things are running
to verify things are running copy and paste your public IP address into the browser url section and append :5173.  Once you have verified things are working you can stop the processes and proceed to the next step.

# Run frontend and backend processes in the background with systemd

## Create and run frontend service

#### Navigate to the systemd directory and create a new service file, myapp.service.
```
sudo vim /etc/systemd/system/myapp.service
```

#### Define the service settings. Add the following content in Vim, modifying as needed for your application:
```
[Unit]
Description=Node.js App
After=network.target multi-user.target


[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/SportsScienceAnalytics/frontend
ExecStart=/usr/bin/npm run dev
Restart=always
Environment=NODE_ENV=production
EnvironmentFile=/etc/app.env
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=myapp


[Install]
WantedBy=multi-user.target
```

#### Reload systemd and start your service.
```
sudo systemctl daemon-reload
sudo systemctl enable myapp.service
sudo systemctl start myapp.service
```

#### Verify that the service is running properly.
```
sudo systemctl status myapp.service
```

## Create and run backend service

#### Navigate to the systemd directory and create a new service file, mybackend.service.
```
sudo vim /etc/systemd/system/mybackend.service
```

#### Define the service settings. Add the following content in Vim, modifying as needed for your application:
```
[Unit]
Description=Django App
After=network.target multi-user.target


[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/SportsScienceAnalytics/backend
ExecStart=/home/ubuntu/SportsScienceAnalytics/backend/.venv/bin/python3 manage.py runserver 0.0.0.0:8000
Restart=always
Environment=PYTHON_ENV=production
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=mybackend


[Install]
WantedBy=multi-user.target

```

#### Reload systemd and start your service.
```
sudo systemctl daemon-reload
sudo systemctl enable mybackend.service
sudo systemctl start mybackend.service
```

#### Verify that the service is running properly.
```
sudo systemctl status mybackend.service
```

#### Note: also need to restart when make changes to the codebase eg:
```
sudo systemctl restart mybackend.service myapp.service
```

#### TODO: 
- [x] Upload screenshare gif demo to repo
- [x] Link repo with sample data
- [ ] Solve the SSL issue related to caddy and reverse proxy and routing to our domain with Route 53 add brief instructions on that 
- [ ] Get updates to Player Performance log showing without having to refresh browser
- [ ] Update to work well on mobile devices

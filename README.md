# SportsScienceAnalytics
this is a fullstack mini-side project to demo a sports science analytics application, it uses react + vite, react hooks, django, sql, and AWS

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

## Verify things are running
to verify things are running copy and paste your public IP address into the browser url section and append :5173.  Once you have verified things are working you can stop the processes and proceed to the next step.

## Run frontend and backend processes in the background with systemd

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

#### TODO - Reverse proxy + Route 53

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

## On Ubuntu 20.02+ will need Python 3.7 for this project install on ec2 instance

'''
ubuntu@ip:~$ sudo apt install software-properties-common
ubuntu@ip:~$ sudo add-apt-repository ppa:deadsnakes/ppa
ubuntu@ip:~$ sudo apt update
ubuntu@ip:~$ sudo apt install python3.7
ubuntu@ip:~$ sudo apt-get install python3.7-venv
'''

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

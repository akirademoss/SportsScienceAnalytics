# SportsScienceAnalytics
this is a fullstack mini-side project to demo a sports science analytics application, it uses react + vite, react hooks, django, sql, and AWS

## Backend Django Setup - Will Update with Project Specific Setup Steps Soon This is Just "Getting Started" Steps to setup a Django backend

#### Setting up the virtual environment
```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ python3 -m venv .venv
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ source .venv/bin/activate
```

#### Installing requirements from requirements.txt and run the server
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ pip install -r ./requirements.txt
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ ls
manage.py  server
```

#### Here we will run the actual server
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ python3 manage.py runserver
```

## Frontend React Setup

#### Project uses React + Vite - To get frontend up and running use the following commands

```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App$ cd frontend
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/frontend$ npm install
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/frontend$ npm run dev
```

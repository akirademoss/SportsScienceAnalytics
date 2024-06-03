# SportsScienceAnalytics
this is a fullstack mini-side project to demo a sports science analytics application, it uses react + vite, react hooks, django, sql, and AWS

## Backend Django Setup - Will Update with Project Specific Setup Steps Soon This is Just "Getting Started" Steps

#### Setting up the virtual environment
```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ python3 -m venv .venv
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ source .venv/bin/activate
```

#### Installing the Django framework
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ python -m pip install django
```

#### Utilizing Commands
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ django-admin


Type 'django-admin help <subcommand>' for help on a specific subcommand.


Available subcommands:


[django]
   check
   compilemessages
   createcachetable
   dbshell
   diffsettings
   dumpdata
   flush
   inspectdb
   loaddata
   makemessages
   makemigrations
   migrate
   runserver
   sendtestemail
   shell
   showmigrations
   sqlflush
   sqlmigrate
   sqlsequencereset
   squashmigrations
   startapp
   startproject
   test
   testserver

```

#### Create a Django project directory structure for the given project name in the current directory or the given destination
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ django-admin startproject mysite .
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ ls
manage.py  mysite
```

#### Here we will run the actual server
```
(.venv) mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/backend$ python3 manage.py runserver
```

## Frontend React Setup

#### Create using Vite.  Here I use a specific version based off a tutorial but if you want the latest use vite@latest instead of the specific version
```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App$ npm create vite@4.1.0
Need to install the following packages:
 create-vite@4.1.0
Ok to proceed? (y)
✔ Project name: …  frontend
✔ Select a framework: › React
✔ Select a variant: › JavaScript


Scaffolding project in /home/mclovin/Desktop/Sports Analytics App/frontend...


Done. Now run:


 cd frontend
 npm install
 npm run dev

```

#### Install and run the frontend
```
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App$ cd frontend
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/frontend$ npm install
mclovin@mclovin-Z97MX-Gaming-5:~/Desktop/Sports Analytics App/frontend$ npm run dev
```

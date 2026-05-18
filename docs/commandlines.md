# Command lines in *Web Dev with an AI Sidekick*

- [Command lines in *Web Dev with an AI Sidekick*](#command-lines-in-web-dev-with-an-ai-sidekick)
  - [Chapter 1 Introduction to Web Development with an AI Sidekick](#chapter-1-introduction-to-web-development-with-an-ai-sidekick)
    - [Installing other extensions](#installing-other-extensions)
  - [Chapter 6 TypeScript – Safer JavaScript](#chapter-6-typescript--safer-javascript)
    - [Setting up TypeScript](#setting-up-typescript)
    - [Installing the TypeScript compiler](#installing-the-typescript-compiler)
    - [Your first TypeScript project](#your-first-typescript-project)
    - [Introducing tsconfig.json](#introducing-tsconfigjson)
  - [Chapter 7 SQL – Managing Data](#chapter-7-sql--managing-data)
    - [Setting up SQLite for macOS and Linux](#setting-up-sqlite-for-macos-and-linux)
    - [Creating a Media sample database for SQLite](#creating-a-media-sample-database-for-sqlite)
    - [SQLite command-line tool](#sqlite-command-line-tool)
  - [Chapter 8 Python – Programming on the Backend](#chapter-8-python--programming-on-the-backend)
    - [Installing Python](#installing-python)
    - [Installing packages](#installing-packages)
  - [Chapter 9 Django – Web Development on the Backend](#chapter-9-django--web-development-on-the-backend)
    - [Installing Django](#installing-django)
    - [Creating your first app and model](#creating-your-first-app-and-model)
    - [Applying migrations](#applying-migrations)
    - [Managing data with the Django shell](#managing-data-with-the-django-shell)
    - [Logging into the admin site as a superuser](#logging-into-the-admin-site-as-a-superuser)
  - [Chapter 10](#chapter-10)
    - [Creating shortcuts with aliases](#creating-shortcuts-with-aliases)
    - [Temporary vs permanent aliases](#temporary-vs-permanent-aliases)
    - [Setting up Bash on Windows](#setting-up-bash-on-windows)
    - [Update packages inside Linux](#update-packages-inside-linux)
    - [Confirm Bash is running](#confirm-bash-is-running)
    - [Create a practice folder for the chapter](#create-a-practice-folder-for-the-chapter)
    - [Creating things](#creating-things)
    - [Working with web resources](#working-with-web-resources)
    - [Writing a simple script](#writing-a-simple-script)
  - [Chapter 11 Setting Up Your Project Environment](#chapter-11-setting-up-your-project-environment)
    - [Setting up a basic TallyApp project](#setting-up-a-basic-tallyapp-project)
    - [Build and run the Docker system](#build-and-run-the-docker-system)
    - [Viewing logs to debug container issues](#viewing-logs-to-debug-container-issues)
    - [Working with pull requests and code review](#working-with-pull-requests-and-code-review)
  - [Chapter 12 Unit, Integration, and End-to-End Testing](#chapter-12-unit-integration-and-end-to-end-testing)
    - [Python unit testing basics](#python-unit-testing-basics)
    - [Installing Playwright](#installing-playwright)
    - [Debugging failures: headed mode, screenshots, and traces](#debugging-failures-headed-mode-screenshots-and-traces)
    - [Fixtures, factories, and why factories usually win](#fixtures-factories-and-why-factories-usually-win)
  - [Chapter 14 Adding Project Features Using Spec-Driven Development](#chapter-14-adding-project-features-using-spec-driven-development)
    - [Install the Specify CLI](#install-the-specify-cli)
    - [Plan and implement the URL shortener feature using Specify and Codex](#plan-and-implement-the-url-shortener-feature-using-specify-and-codex)
  - [Chapter 15 Deploying to Public Servers](#chapter-15-deploying-to-public-servers)
    - [Logging, monitoring, and backups](#logging-monitoring-and-backups)
    - [Use a ready-made package to track logins](#use-a-ready-made-package-to-track-logins)
    - [Deploying step-by-step](#deploying-step-by-step)
    - [Initial remote server set up](#initial-remote-server-set-up)
    - [Backing up your SQLite database](#backing-up-your-sqlite-database)

## Chapter 1 Introduction to Web Development with an AI Sidekick

### Installing other extensions

To install the Live Preview extension, enter the following in the command prompt:
```shell
code --install-extension ms-vscode.live-server
```

## Chapter 6 TypeScript – Safer JavaScript

### Setting up TypeScript

To confirm installation of Node.js and Node Package Manager on any platform, open a terminal or command prompt and run:
```shell
node --version
```

```shell
npm --version
```

### Installing the TypeScript compiler

TypeScript is installed via npm. You can install it globally so the tsc command is available everywhere:
```shell
npm install -g typescript
```

Verify the installation:
```shell
tsc --version
```

### Your first TypeScript project

Compile the TypeScript file:
```shell
tsc hello.ts
```

Run a JavaScript file with Node:
```shell
node hello.js
```

### Introducing tsconfig.json

Generate a starter config:
```shell
tsc --init
```

## Chapter 7 SQL – Managing Data

### Setting up SQLite for macOS and Linux

On Linux, you can get set up with SQLite using the following command:
```shell
sudo apt-get install sqlite3
```

### Creating a Media sample database for SQLite

Execute the SQL script using SQLite to create a `Media.db` database file:
```shell
sqlite3 Media.db -init Media.sql
```

### SQLite command-line tool

Typical usage looks like the following command:
```shell
sqlite3 media.db
```

## Chapter 8 Python – Programming on the Backend

### Installing Python

Checking Python:
```shell
python --version
```

If that does not work, try explicitly running Python 3:
```shell
python3 --version
```

Run a Python script:
```shell
python hello.py
```

If that does not work, use:
```shell
python3 hello.py
```

### Installing packages

Installing a package (like `requests`):
```shell
pip install requests
```

Installing a package's specific version:
```shell
pip install requests==2.31.0
```

Installing a list of packages:
```shell
pip install -r requirements.txt
```

Creating a virtual environment named `.venv`:
```shell
python -m venv .venv
```

Activating an environment is different depending on your OS. On Windows:
```shell
.venv\Scripts\activate
```
On macOS and Linux:
```shell
source .venv/bin/activate
```

## Chapter 9 Django – Web Development on the Backend

### Installing Django

Install Django using `pip`:
```shell
pip install djang
```

Create a Django project and name it `scribble`:
```shell
django-admin startproject scribble
```

Run the Django development server:
```shell
python manage.py runserver
```

### Creating your first app and model

Create an app feature named `blog`:
```shell
python manage.py startapp blog
```

### Applying migrations

Create migration files that describe the schema change:
```shell
python manage.py makemigrations
```

Apply migrations to the database:
```shell
python manage.py migrate
```

### Managing data with the Django shell

Open the Django shell:
```shell
python manage.py shell
```

### Logging into the admin site as a superuser

Create a superuser:
```shell
python manage.py createsuperuser
```

## Chapter 10

### Creating shortcuts with aliases

Defining an alias named `serve` to start the Django development web server:
```shell
alias serve="python manage.py runserver"
```

Now you can start the development server by typing the alias:
```shell
serve
```

Alias examples:
```shell
alias ll="ls -la"
alias migrate="python manage.py migrate"
alias test="python manage.py test"
```

### Temporary vs permanent aliases

Reload your Bash shell configuration file:
```shell
source ~/.bashrc
```

### Setting up Bash on Windows

Install WSL from an elevated terminal:
```shell
wsl --install
```

Check what WSL OSes you have installed:
```
wsl -l -v
```

### Update packages inside Linux

Run:
```shell
sudo apt update
sudo apt upgrade -y
```

### Confirm Bash is running
In the WSL terminal, run:
```shell
echo "$SHELL"
```

In the WSL terminal, run:
```shell
bash --version
```

### Create a practice folder for the chapter

Run:
```shell
mkdir -p ~/bash-chapter
cd ~/bash-chapter
pwd
```

Run:
```shell
ls -la
```

Leave Bash:
```shell
exit
```

### Creating things

Create nested directories in one step using `-p`:
```shell
mkdir -p app/static/css
```

Create an empty file if it does not already exist:
```shell
touch app.py
```

To copy a directory and its contents, use the -r (recursive) option:
```shell
cp -r templates templates_backup
```

### Working with web resources

`curl` is used to make HTTP requests:
```
curl https://example.com
```

To save the response to a file, use the `-o` option:
```shell
curl -o index.html https://example.com
```

You can also send data, for example when working with APIs:
```shell
curl -X POST -d "name=Mark" https://example.com/api
```

`wget` is designed for downloading files from the internet and saving files directly to disk:
```shell
wget https://example.com/file.zip
```

To save it with a different name, use `-O`:
```shell
wget -O archive.zip https://example.com/file.zip
```

### Writing a simple script

Create a new file called `run_dev.sh`:
```shell
touch run_dev.sh
```

Before you can run the script, you need to make it executable:
```shell
chmod +x run_dev.sh
```

Now you can run it like this:
```shell
./run_dev.sh
```

## Chapter 11 Setting Up Your Project Environment

### Setting up a basic TallyApp project

Create a `.venv` folder containing a private Python installation for this project:
```shell
python -m venv .venv
```

Activate the virtual environment:
```shell
 .venv\Scripts\activate
```

Install Django using `pip`:
```shell
pip install django
```

Verify the installation:
```shell
django-admin --version
```

Create a Django project and name it tallyapp:
```shell
django-admin startproject tallyapp
```

Change to the tallyapp project directory:
```shell
cd tallyapp
```

Apply migrations to the local SQLite database:
```shell
python manage.py migrate
```

Create an administrator account and then follow the prompts to set a username, email address, and password:
```shell
python manage.py createsuperuser
```

Run the Django development server:
```shell
python manage.py runserver
```

### Build and run the Docker system

Build images:
```shell
docker compose build
```

Start containers:
```shell
docker compose up
```

Run migrations:
```shell
docker compose exec web python manage.py migrate
```

Create an admin user inside the web container:
```shell
docker compose exec web python manage.py createsuperuser
```

Stop the containers:
```shell
docker compose down
```

### Viewing logs to debug container issues

View logs using:
```shell
docker compose logs
```

View logs in one named container like `web`:
```shell
docker compose logs web
```

### Working with pull requests and code review

Create a feature branch:
```shell
git checkout -b feature/home-page
```

Make changes and commit them:
```shell
git add .
git commit -m "Add home page view and template"
```

Push the branch to GitHub:
```shell
git push origin feature/home-page
```

## Chapter 12 Unit, Integration, and End-to-End Testing

### Python unit testing basics

Run tests with:
```shell
python -m unittest
```

In Django projects, you usually run:
```shell
python manage.py test
```

### Installing Playwright

Typical setup commands (run in your virtual environment):
```shell
python -m pip install playwright pytest
```

```shell
python -m playwright install
```

```shell
python -m pip install pytest-playwright
```

### Debugging failures: headed mode, screenshots, and traces

Run tests in headed mode (visible browser) while developing or debugging tests:
```shell
pytest -s e2e --headed
```

You can also slow down interactions to make them easier to follow:
```shell
pytest -s e2e --headed --slowmo 200
```

### Fixtures, factories, and why factories usually win

For example:
```shell
python manage.py loaddata initial_data
```

## Chapter 14 Adding Project Features Using Spec-Driven Development

### Install the Specify CLI

Install the GitHub SpecKit Specify CLI with `uv`:
```shell
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

Confirm that the Specify CLI and its dependencies are available:
```shell
specify check
```

### Plan and implement the URL shortener feature using Specify and Codex

Initialize Spec Kit in the current folder:
```shell
specify init . --ai codex
```

Set an environment variable for Codex configuration for this project:
```shell
setx CODEX_HOME "C:\web-dev-ai\TallyProject\.codex"
```

Start Codex with the latest GPT model, for example, 5.5 in April 2026:
```shell
codex --model gpt-5.5
```

## Chapter 15 Deploying to Public Servers

### Logging, monitoring, and backups

To check the server logs, use the following Bash/shell commands:
```shell
sudo journalctl -u gunicorn -f
sudo tail -f /var/log/nginx/error.log
```

### Use a ready-made package to track logins

Install a Django middleware package named Axes:
```shell
pip install django-axes
```

### Deploying step-by-step

Connect to your remote server using the private SSH key file:
```shell
ssh -i tallyapp-sshkey root@167.99.52.197
```

### Initial remote server set up

Update packages and be patient for a few minutes while this happens:
```shell
apt update && apt upgrade -y
```

Add a user named `tallyapp`:
```shell
adduser tallyapp
```

Give yourself admin rights:
```shell
usermod -aG sudo tallyapp
```

Switch to your account:
```shell
su - tallyapp
```

Allow SSH through the firewall:
```shell
sudo ufw allow OpenSSH
```

Enable firewall:
```shell
sudo ufw enable
```

Install system dependencies (Python pip, virtual environment support, Sqlite, Nginx, and Git):
```shell
sudo apt install -y python3-pip python3-venv nginx git sqlite3
```

Clone your project from its public GitHub repository:
```shell
git clone https://github.com/yourusername/tallyapp.git
```

Change to the app folder:
```shell
cd tallyapp
```

Create a virtual environment:
```shell 
python3 -m venv .venv
```

Activate the virtual environment:
```shell
source .venv/bin/activate
```

Install Python dependencies:
```shell
pip install -r requirements.txt
```

Install Gunicorn:
```shell
pip install gunicorn
```

Create a .env file:
```shell
nano .env
```

Apply migrations (this will create the SQLite database file `db.sqlite3`):
```shell
python manage.py migrate
```
Collect static files:
```shell
python manage.py collectstatic
```

Create a superuser:
```shell
python manage.py createsuperuser
```

Test Gunicorn:
```shell
gunicorn --bind 0.0.0.0:8000 tallyapp.wsgi:application
```

Configure Gunicorn as a service by creating a configuration file:
```shell
sudo nano /etc/systemd/system/gunicorn.service
```

Start and enable Gunicorn:
```shell
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
```

Configure Nginx:
```shell
sudo nano /etc/nginx/sites-available/tallyapp
```

Enable Nginx:
```shell
sudo ln -s /etc/nginx/sites-available/tallyapp /etc/nginx/sitesenabled
sudo nginx -t
sudo systemctl restart nginx
```

Configure firewall for web traffic:
```shell
sudo ufw allow 'Nginx Full'
```

Enable HTTPS:
```shell
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your_domain
```

### Backing up your SQLite database

Back up the database file:
```shell
sqlite3 db.sqlite3 ".backup 'db-backup.sqlite3'"
```


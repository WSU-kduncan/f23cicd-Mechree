# CEG3120 - Project 4 Repo
- This is a repository for Michael McCain's Project 4 milestones

# Project Overview
- The purpose of this project to is to become familair with creating and utilizing containers using the software Docker Desktop.

# Docker Setup and Usage Guide on Windows Subsystem for Linux 2 (WSL2)

## Installing Docker and Dependencies on WSL2

**Install Docker on WSL Linux Distribution**:
	- Download and install the latest version of Docker Desktop for Windows.

	- Follow the usual installation instructions to install Docker Desktop. Depending on which version of Windows you are using, Docker Desktop may prompt you to turn on WSL 2 during installation. Read the information displayed on the screen and turn on the WSL 2 feature to continue.

	- Start Docker Desktop from the Windows Start menu.

	- Navigate to Settings.

	- From the General tab, select Use WSL 2-based engine...

	- If you have installed Docker Desktop on a system that supports WSL 2, this option is turned on by default.
	
	- Select Apply & Restart.
	
Guide: [Docker WSL Install](https://docs.docker.com/desktop/wsl/)

## Building a Docker Image from a Dockerfile

1. **Create a Dockerfile**:
    - Create a file named `Dockerfile` in your project directory.
    - Define your environment in the Dockerfile (e.g., `FROM python:3.8`, `COPY . /app`).
	![Dockerfile](Dockerfile.png "Example Docker File")

2. **Build the Docker Image**:
    - Navigate to your project directory in the Linux distribution.
    - Run: `docker build -t container-name .`

## Running a Docker Container

1. **Run the Docker Container**:
    - Run the container: `docker run -dit --name desired-name -p 80:80 container-name`

## Viewing the Project Running in the Container

1. **Access the Application**:
    - Open a web browser and go to `http://localhost:80` (or the respective IP and port your app is running on).
	- curl localhost

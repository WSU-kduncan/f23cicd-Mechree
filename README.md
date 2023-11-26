# CEG3120 - Project 4 Repo
- This is a repository for Michael McCain's Project 4 milestones

Docker Repo: [Mechree's Docker Repository](https://hub.docker.com/repository/docker/mechree/ceg3120-images/general "Docker Repository Link")

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

# Milestone 2: Git Secrets and Workflow, Dockerhub Repo and Credentials

## Guide to Creating a Public Repository on DockerHub

### Prerequisites

1. A DockerHub Account
2. Docker Installed on your device.

### Step 1: Log In to DockerHub

1. Go to [DockerHub](https://hub.docker.com/).
2. Click on **Log in** in the top right corner.
3. Enter your Docker ID and password, and click **Sign In**.

### Step 2: Create a New Repository

1. Once logged in, click on **Create Repository** on the right side of the dashboard.
2. Choose a name for your repository. This name must be unique on DockerHub.
3. Add a short description for your repository.
4. Select desired visibility **Private** or **Public**
5. Click **Create**.

### Step 3: Push an Image to Your Repository

1. Open your terminal or command prompt.
2. Log in to DockerHub using the command: `docker login`.
3. Tag your Docker image with your DockerHub username and repository name:  
   `docker tag my-image username/repository:tag`
4. Push the image to DockerHub:  
   `docker push username/repository:tag`

### Step 4: Verify the Repository

1. Go back to your DockerHub account.
2. Click on **Repositories** to see your newly created repository.
3. Click on the repository name to view the details and ensure your image is listed there.


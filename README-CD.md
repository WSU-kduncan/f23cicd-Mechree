# CEG3120 - Project 5 Repo
- This is a repository for Michael McCain's Project 5 milestones

Docker Repo: [Mechree's Docker Repository](https://hub.docker.com/repository/docker/mechree/ceg3120-images/general "Docker Repository Link")

# Project Overview
- The purpose of this project to is to become familair with creating and utilizing containers using the software Docker Desktop on the command line, implementing and practice versioning, the use of webhooks, and AWS.

## GitHub Tags
- to push a tag use the command in your repo `git push origin <tag>`
- to generate a tag on the current branch use `git tag <tagname>`. To do the same with an annotation use `git tag -a <tagname> -m "Message"`

**_NOTE_** You must must push your tags after creating them on your local version of the repo. 

## Workflow Process/Behavior
- On push/pull to main GitHub branch or version change
	* Login to DockerHub using defined username/password GitHub Secrets
	* Extract tags from the repository
	* build and push the image to DockerHub with extracted tags and labels


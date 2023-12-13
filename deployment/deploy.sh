#! /bin/bash
## Stop/ remove container
docker kill hiking
docker remove hiking

##once dead and removed, the image it references can be removed
docker image rm mechree/ceg3120-images:hiking

## Docker Pull Imagename
docker pull -a mechree/ceg3120-images

## run container
docker run -d -p 80:80 --name hiking --restart unless-stopped mechree/ceg3120-images

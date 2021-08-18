# Set up and test Docker on free site

## First is to set up the backend SQL database as docker image.
1. In VS Code open the backend folder. Follow the steps under header "Add Docker files to the project" of website https://code.visualstudio.com/docs/containers/quickstart-node
2. Create the docker image in terminal using command >docker build -t {yourdockername}/backend .    (take note must include the .)
3. Push the docker image to docker hub in Docker Desktop, or using command terminal (https://docs.docker.com/get-started/04_sharing_app/).
4. Login to your Docker hub account and confirm that the new backend image is in your repository.
5. Run the image on a new instance by opening https://labs.play-with-docker.com/ on same browser as your docker hub login.
6. Click on Start -> Add New Instance. You will see a terminal window on the page. To load the image as an instance, enter at command prompt $ docker run -dp 3000:3000 {yourdockername}/backend
7. In the same page near the top, you will see a button "OPEN PORT". Besides this button is a hyperlink "3000". Click on this 3000 hyperlink.
8. A new broswer tab will open up, which is the server running an instance of the backend image. Copy this new tab's address and plug it into the frontend javascript code. 

## Automating Github Actions with Docker
1.  Link up your Docker Hub account with Github.
2.  Follow the steps in https://docs.docker.com/ci-cd/github-actions/.
3.  Amend the yml

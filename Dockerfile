# Define the environment
FROM httpd:2.4

# Copy website files into the container
COPY website/ /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80

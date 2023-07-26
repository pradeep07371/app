FROM 192.168.0.10:5000/httpd
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80

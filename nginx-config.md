# Host Nginx Configuration Guide

Since you're using the host's Nginx installation, here's the recommended configuration for your `/etc/nginx/sites-available/axtech.app.conf`:

```nginx
server {
    listen 80;
    server_name axtech.app www.axtech.app;
    
    # Redirect HTTP to HTTPS
    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name axtech.app www.axtech.app;
    
    # SSL configuration
    ssl_certificate /etc/ssl/certs/axtech.app.crt;
    ssl_certificate_key /etc/ssl/private/axtech.app.key;
    
    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_session_timeout 10m;
    ssl_session_cache shared:SSL:10m;
    ssl_session_tickets off;
    ssl_stapling on;
    ssl_stapling_verify on;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    
    # Proxy to Next.js app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Static files caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        proxy_pass http://localhost:3000;
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
    
    # Error pages
    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;
}
```

## Deployment Steps:

1. Create the Nginx configuration file:
   ```bash
   sudo nano /etc/nginx/sites-available/axtech.app.conf
   ```

2. Enable the site by creating a symbolic link:
   ```bash
   sudo ln -s /etc/nginx/sites-available/axtech.app.conf /etc/nginx/sites-enabled/
   ```

3. Test Nginx configuration:
   ```bash
   sudo nginx -t
   ```

4. Reload Nginx:
   ```bash
   sudo systemctl reload nginx
   ```

5. Deploy your Docker container:
   ```bash
   cd /home/horphi/Dev_Src/SrcRepo/Axtech/axtech
   docker-compose up -d
   ```

Remember to set up SSL certificates on your host machine and update the paths in the Nginx configuration accordingly.

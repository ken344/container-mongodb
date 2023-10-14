# container-mongodb
## preparation
- Rename "sample.env" to ".env".
- Change the contents of the ".env" file as desired

## running
- Run the Docker-compose command
- 'docker-compose up'

## confirmation
- Access 'http://localhost:8081/'
- If asked for a password, enter "admin:pass"


## memo
- Files under "docker-entrypoint-initdb.d" are executed in the order of their file names.

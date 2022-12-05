#CREAR CONTENEDOR
docker run -d --name mary -e MYSQL_ROOT_PASSWORD=mariadb -p 3307:3306  -d mariadb:latest

admin> db.getUsers()
{
  users: [
    {
      _id: 'admin.root',
      userId: new UUID("095fbdc3-7459-43fe-819b-fb15220f3947"),
      user: 'root',
      db: 'admin',
      roles: [ { role: 'root', db: 'admin' } ],
      mechanisms: [ 'SCRAM-SHA-1', 'SCRAM-SHA-256' ]
    }
  ],
  ok: 1
}
admin> db.createUser(
...   {
...     user: "pabloDev",
...     pwd: "17920310",
...     roles: [
...       { role: "userAdminAnyDatabase", db: "admin" },
...       { role: "readWrite", db: "school"},
...       { role: "readWrite", db: "quotes" },
...     ],
...   },
... );
{ ok: 1 }
admin> exit
root@7250d69fd287:/# mongosh --username "pabki" --password --host localhost --port 27017 --authenticationMechanism SCRAM-SHA-256
.dockerenv                  docker-entrypoint-initdb.d/ lib32/                      opt/                        srv/
bin/                        etc/                        lib64/                      proc/                       sys/
boot/                       home/                       libx32/                     root/                       tmp/
data/                       js-yaml.js                  media/                      run/                        usr/
dev/                        lib/                        mnt/                        sbin/                       var/
root@7250d69fd287:/# mongosh --username "pabloDev" --password --host localhost --port 27017 --authenticationMechanism SCRAM-SHA-256
Enter password: ********
Current Mongosh Log ID: 63694222a2dd386fe077abcc
Connecting to:          mongodb://<credentials>@localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&authMechanism=SCRAM-SHA-256&appName=mongosh+1.6.0
Using MongoDB:          6.0.2
Using Mongosh:          1.6.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

test>

db.createCollection("quote")

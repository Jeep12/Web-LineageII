# Web-LineageII
<h5>Autenticacion</h5>


<p>Authentication has 2 parts.
the first is with firebase autehtication and realtime.
the second is in mysql, the accounts to log in to the game.</p>
command: npm install in directory LineasgeII-Web
<hr>
<h1>Run Api</h1>
configure Mysql database connection in api/connection.js , the game database.
<br>
<p style='color:green'>parameters:</p>
<ul>
    <li>host: "localhost",</li>
   <li> user: "root",</li>
    <li>password: "",</li>
    <li>port:3306,</li>
   <li> database:"l2jmobiusclassic"</li>
    </ul>
is a example

run sv api in directory api with command npm run dev


command =  npm run dev

<h1>Run Angular</h1>
run sv angular in directory with command ng serve --host 0.0.0.0 or ng serve

command = ng serve --host 0.0.0.0 || ng serve

<html>
<head>
            <script src="jquery-3.2.1.min.js"></script>
            <script src="angular.js">
            </script>
            <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.16/angular.js"></script> -->

<script src="angular-route.js"></script>
<script src="index.js"></script>
            <script src="bootstrap.min.js"></script>
            <link rel="stylesheet" href="bootstrap.min.css"></link>
    </head>
<body ng-app="myApp">
	<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#main"></a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="#main">Main</a></li>
      <li><a href="#add">Add</a></li>
      <li><a href="#edit">Edit</a></li>
    </ul>
  	</div>
  </nav>
  <div ng-view></div>
   
</body>
</html>

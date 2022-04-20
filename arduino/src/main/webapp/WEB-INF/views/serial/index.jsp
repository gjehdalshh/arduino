<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello</title>
	<link href='http://fonts.googleapis.com/css?family=Lato:100' rel='stylesheet' type='text/css'>
	<style>
		body {
			background-color: hsl(0, 60%, 65%);
			transition: background-color 1s;
		}

		h1 {
			font-family: 'Lato', sans-serif;
			font-size: 120px;
			font-weight: 100;
			color: white;
			text-align: center;
			margin: 60px;
		}

		h1:before{
			content: attr(class) ":";
			font-size: 22px;
			position: relative;
			top: -69px;
			left: 0;
			text-transform: uppercase;
		}
</style>
</head>

<body>
	<h1 class="data">${applicationScope.data}ºC</h1>
	<script>
	
	setInterval(function(){location.href="/serial"}, 1000);
	
	</script>
</body>

</html>
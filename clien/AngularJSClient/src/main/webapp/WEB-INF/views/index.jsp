<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	    <base href="/">
	    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	    <link href="<c:url value='/static/lib/bootstrap/css/bootstrap.css' />" rel="stylesheet"></link>
	    <link href="<c:url value='/static/css/index.css' />" rel="stylesheet"></link>
	     
	    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
	    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
	    
		<!-- <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
		<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> -->
		<!------ Include the above in your HEAD tag ---------->
		
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Teko:400,700" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
	     
	     
</head>


<body>

<div class="container" ui-view=""></div>

	<script data-main="<c:url value='/static/app/main' />" src="<c:url value='/static/lib/requirejs/require.js' />"></script>

</body>
</html>

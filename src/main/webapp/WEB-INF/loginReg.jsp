<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login and Registration</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>

	<div class="container p-5">
		<div class="text-center">
			<h1>Welcome!</h1>
			<p>join our growing community.</p>
			<p style="color: blue"><c:out value="${logout}"/></p>
		</div>
		<div class="d-flex justify-content-center gap-5">
		<form:form action="/register" method="post" modelAttribute="newUser">
			<h2 class="text-center">Register</h2>
			<div class="border border-1 p-2">
				<form:label path="userName">Username</form:label>
				<form:input path="userName" class="form-control"/>
				<form:errors path="userName" class="text-danger"/>	
			</div>
			<div class="border border-1 p-2">
				<form:label path="email">Email</form:label>
				<form:input path="email" class="form-control"/>
				<form:errors path="email" class="text-danger"/>	
			</div>
			<div class="border border-1 p-2">
				<form:label path="password">Password</form:label>
				<form:input path="password" class="form-control" type="password"/>
				<form:errors path="password" class="text-danger"/>	
			</div>
			<div class="border border-1 p-2">
				<form:label path="confirm">Confirm Password</form:label>
				<form:input path="confirm" class="form-control" type="password"/>
				<form:errors path="confirm" class="text-danger"/>	
			</div> 
			<div class="text-center">
				<input type="submit" class="btn btn-primary" value="Register"/>
			</div>
		</form:form>
		
		
		
		<form:form action="/login" method="post" modelAttribute="newLogin">
			<h2 class="text-center">Login</h2>
			<div class="border border-1 p-2">
				<form:label path="email">Email</form:label>
				<form:input path="email" class="form-control"/>
				<form:errors path="email" class="text-danger"/>	
			</div>
			<div class="border border-1 p-2">
				<form:label path="password">Password</form:label>
				<form:input path="password" class="form-control" type="password"/>
				<form:errors path="password" class="text-danger"/>	
			</div>
			<div class="text-center">
				<input type="submit" class="btn btn-warning" value="Login"/>
			</div>
			</form:form>
		</div>
	</div>
</body>
</html>
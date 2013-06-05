<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Application Title</title>
<jsp:include page="/style/templates/styles.jsp"></jsp:include>
</head>
<body>

<jsp:include page="/style/templates/header.jsp"></jsp:include>

<div id="explanation">
<h3><span>Explanation</span></h3>
<p class="p1"><span>Paragraph 1.</span></p>
<ul>
	<li>One</li>
	<li>Two</li>
</ul>
</div>

<div id="participation">
<h3><span>Participation</span></h3>
<table width="100%" border="1">
	<tr>
		<th scope="col" colspan="2">Resources</th>
	</tr>
	<tr>
		<td><a href=".">Resource 1</a></td>
		<td>resource 1 about.</td>
	</tr>
	<tr>
		<td><a href=".">Resource 2</a></td>
		<td>resource 2 about.</td>
	</tr>
	<tr>
		<td><a href=".">Resource 3</a></td>
		<td>resource 3 about.</td>
	</tr>
</table>
</div>

<jsp:include page="/style/templates/footer.jsp"></jsp:include>

</body>
</html>
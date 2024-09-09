<%@ page contentType="text/html;charset=utf-8"%>
<%	request.setCharacterEncoding("utf-8"); %>

<html>
<% 
String dan =request.getParameter("dan");

%>


<body>

<h3>선택한 단 : <%= dan %> 단</h3><br>
<%
for(int i =1; i<10; i++){
	out.println(dan+ "*" + i +"=" + Integer.parseInt(dan) * i+"<br>" );
}
%>
</body>


</html>




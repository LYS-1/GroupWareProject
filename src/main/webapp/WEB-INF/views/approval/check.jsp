<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
<body>

<div id ="dd">
</div>
<form action="./approval" method="post" id="fm">
	<input type="hidden" name="fileName" value="${file}">
	<input type="hidden" name="ddd" id="ddd">
	<input type="hidden" name="approval" id="approval">
	<input type="hidden" name="id" value="${id}">
	<button type="button"  value="1" class="btn">승인</button>
	<button type="button"  value="0" class="btn">거절</button>
</form>


<script type="text/javascript">
  $("#dd").load("/file/approval/${file}")
 </script> 
 <script type="text/javascript" src="/js/approvalApproval.js">	
 </script>
</body>
</html>
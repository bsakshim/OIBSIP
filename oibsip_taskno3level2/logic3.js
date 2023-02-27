<!DOCTYPE html>
<!-- Created By  Sakshi Bhosale -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App JavaScript |  SakshiBhosale</title>
    <link rel="stylesheet" href="style3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
</head>
<body>
  <div class="wrapper">
    <header>Todo App</header>
    <div class="inputField">
      <input type="text" placeholder="Enter Task">
      <button><i class="fas fa-plus"></i></button>
    </div>
    <ul class="todoList">
      <!-- data are comes from local storage -->
    </ul>
    <div class="footer">
      <span>You have <span class="pendingTasks"></span> pending tasks</span>
      <button>Clear All</button>
    </div>
  </div>
 
  <footer class="footer">
      <p>Created by  Sakshi Bhosale</p>
  </footer>
  <script src="logic3.js"></script>

</body>
</html>

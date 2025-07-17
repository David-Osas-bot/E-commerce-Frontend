<?php
    require("AdminLog.php");

?>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="AdminLogin.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.3-web/css/all.css">
    <title>Admin Login Page</title>

    <script>
        function show1()
        {
        var a = document.querySelector(".input-password")
        var b = document.querySelector("#eye")
        var c = document.querySelector("#eyeslash")

        if(a.type == "password")
    {
        a.type = "text"
        b.style.display = "block"
        c.style.display = "none"
    }
    else
    {
        a.type ="password"
        b.style.display = "none"
        c.style.display = "block"
    }
        }


    </script>
    
</head>
<body style="margin: 0; padding: 0;">
        <div class="form-div">

            <form action="" method="POST">
                
                <table style="border: none;" cellspacing="30px" cellpadding="10px">
                    <tr>
                        <td>
                            <label for="username">Username: </label>
                        </td>

                        <td>
                            <input type="text" name="username" required placeholder="Enter your Username"/>
                        </td>
                    </tr>

                    <tr>
                        <td>

                            <label for="password">Password: </label>

                        </td>

                        <td>
                            <div id="pswrd-div">
                                <div>
                                    <input type="password" name="password" class="input-password" placeholder="Enter your password" />
                                </div>

                                <div id="eye-open">
                                    <span id="eye" class="fa fa-eye" onclick="show1()"></span>
                                </div>

                                <div id="eye-close">
                                    <span id="eyeslash" class="fa fa-eye-slash"  onclick="show1()"></span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <div>
                        <input type="submit" name="submit" value="Done" class="done">
                    
                </div>

            </form>

        </div>
       
</body>
</html>
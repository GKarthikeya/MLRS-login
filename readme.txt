<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <style>
        body {
            background-color: #ffffff;
        }

        .login-container {
            max-width: 400px;
            margin: auto;
            padding: 20px;
            background-color: #E1E8ED;
            border-radius: 10px;
            box-shadow: 10px 10px 10px rgba(111, 104, 104, 0.1);
            margin-top: 100px;
        }

        .login-container h1 {
            color: black;
        }

        .login-container hr {
            border-top: 2px solid #0e0f0f;
        }

        .login-container input,
        .login-container button {
            margin-bottom: 15px;
        }

        .login-container button {
            background-color: #0e0f0f;
            color: #ffffff;
            transition: background-color 0.3s ease;
        }

        .login-container button:hover {
            background-color: #1a1b1b;
        }
    </style>
</head>
<body>
    <form class="row g-3">
        <div class="col-md-6">
            <h1 class="text-center">Login Form</h1>
            <hr/>
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4">
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4">
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">State</label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">Zip</label>
          <input type="text" class="form-control" id="inputZip">
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>

    <script>
        const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(text => {
                document.getElementById('response').innerHTML = text;
            });
        });
    </script>

    <script src="Login.js"></script>
</body>
</html>

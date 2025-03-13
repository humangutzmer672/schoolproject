<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Random JS Code</title>
</head>
<body>
    <script>
        const generateRandomNumber = (max) => {
            return Math.floor(Math.random() * max);
        }

        const numbers = [];
        for (let i = 0; i < 10; i++) {
            numbers.push(generateRandomNumber(10));
        }

        console.log(numbers);
    </script>
</body>
</html>

<?php
$allowedOrigins = [
    "https://horizonlineuae.com",
    "https://www.horizonlineuae.com"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

// ---- Validate required fields ----
$name        = trim($data['name']        ?? '');
$email       = trim($data['email']       ?? '');
$countryCode = trim($data['countryCode'] ?? '');
$phone       = trim($data['phone']       ?? '');
$city        = trim($data['city']        ?? '');
$message     = trim($data['message']     ?? '');

$errors = [];

if ($name === '')                                                 $errors[] = "Name is required";
if ($countryCode === '' || $phone === '')                         $errors[] = "Phone number is required";
elseif (!preg_match('/^\d{10}$/', $phone))                        $errors[] = "Phone number must be exactly 10 digits";
if (!in_array($countryCode, ['+971', '+91']))                     $errors[] = "Invalid country code";
if ($city === '')                                                 $errors[] = "City is required";
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Invalid email format";

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["success" => false, "errors" => $errors]);
    exit();
}

$fullPhone = $countryCode . " " . $phone;

// ---- Build email ----
$to      = "enquiry@horizonlineuae.com";
$bcc     = "brandbanalo16@gmail.com";
$subject = "New Enquiry from Website - $name";

$body = "
<h2>New Website Enquiry</h2>
<table cellpadding='6' style='border-collapse:collapse;'>
  <tr><td><b>Name</b></td><td>"    . htmlspecialchars($name)                                                        . "</td></tr>
  <tr><td><b>Email</b></td><td>"   . ($email !== '' ? htmlspecialchars($email) : 'Not provided')                    . "</td></tr>
  <tr><td><b>Phone</b></td><td>"   . htmlspecialchars($fullPhone)                                                   . "</td></tr>
  <tr><td><b>City</b></td><td>"    . htmlspecialchars($city)                                                        . "</td></tr>
  <tr><td><b>Message</b></td><td>" . ($message !== '' ? nl2br(htmlspecialchars($message)) : 'Not provided')        . "</td></tr>
</table>
";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: Horizon Line UAE Website <no-reply@horizonlineuae.com>\r\n";
$headers .= "Reply-To: " . ($email !== '' ? $email : "no-reply@horizonlineuae.com") . "\r\n";
$headers .= "Bcc: $bcc\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Enquiry sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Mail server error"]);
}
?>
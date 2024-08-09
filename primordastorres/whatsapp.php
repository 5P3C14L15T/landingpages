<?php

if (isset($_REQUEST)) {
    $data = $_REQUEST;

    // var_dump($data);

    $name       = $data['name'];
    $email      = $data['email'];
    $whatsapp   = $data['whatsapp'];




    $texto = "";
    $texto .= "*Tenho Interesse na Casa do Primor das Torres*" . "%0A";
    $texto .= "*Dados do Interessado:* " . "%0A";
    $texto .= "-------------------------------------%0A%0A";
    $texto .= "```Nome: " . $name . "```%0A";
    $texto .= "```Email: " . $email . "```%0A";
    $texto .= "```WhatsApp: " . $whatsapp . "```%0A";

    // $texto .= "```Restrição: " . $restricao . "```%0A";

    $url = "https://api.whatsapp.com/send?phone=556596335509&text=$texto";
    echo $url;

    header("Location: {$url}");
} else {
    header("Location: index.php");
}

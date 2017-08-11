<?php
if (!isset($_COOKIE['SHOW_MODAL'])){?>
  <script src="/local/dist/js/main.js"></script>
  <?
  setCookie('SHOW_MODAL', 'Y', time() + 86400, '/'); // Установим куку SHOW_MODAL значение Y на сутки для всех страниц сайта.
}
?>
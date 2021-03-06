<!DOCTYPE html>
<html>
<head>
    <?php
    /** @var \Pimcore\Templating\PhpEngine $view */
    $redirect = $view->router()->path('pimcore_admin_login', [
        'deeplink' => 'true'
    ]);
    ?>

    <script src="/bundles/pimcoreadmin/js/pimcore/common.js"></script>
    <script src="/bundles/pimcoreadmin/js/pimcore/functions.js"></script>
    <script src="/bundles/pimcoreadmin/js/pimcore/helpers.js"></script>
    <script>
        <?php if ($this->tab) { ?>
            pimcore.helpers.clearOpenTab();
            pimcore.helpers.rememberOpenTab("<?= $this->tab ?>", true);
        <?php } ?>
        window.location.href = "<?= $redirect ?>";
    </script>
</head>
<body>
</body>
</html>

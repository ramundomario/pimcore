/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 * @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 * @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

pimcore.registerNS("pimcore.gridexport.csv");
pimcore.gridexport.csv = Class.create(pimcore.gridexport.abstract, {
    name: "csv",
    text: t("export_csv"),
    warningText: t('csv_object_export_warning'),
    downloadUrl: "/admin/object-helper/download-csv-file",
    getExportSettingsContainer: function () {
        return new Ext.form.FieldSet({
            title: t('csv_settings'),
            items: [
                new Ext.form.TextField({
                    fieldLabel: t('delimiter'),
                    name: 'delimiter',
                    maxLength: 1,
                    labelWidth: 200,
                    value: ';'
                })
            ]
        });
    }
});

pimcore.globalmanager.get("pimcore.gridexport").push(new pimcore.gridexport.csv())
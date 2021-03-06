/*
 * This file is part of the Symfony Webpack Encore package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

const EntryFilesManifestPlugin = require('../webpack/entry-files-manifest-plugin');
const PluginPriorities = require('./plugin-priorities');
const path = require('path');
const sharedEntryTmpName = require('../utils/sharedEntryTmpName');
const copyEntryTmpName = require('../utils/copyEntryTmpName');
const manifestKeyPrefixHelper = require('../utils/manifest-key-prefix-helper');

/**
 * @param {Array} plugins
 * @param {WebpackConfig} webpackConfig
 * @return {void}
 */
module.exports = function(plugins, webpackConfig) {

    plugins.push({
        plugin: new EntryFilesManifestPlugin(
            path.join(webpackConfig.outputPath, 'entrypoints.json'),
            manifestKeyPrefixHelper(webpackConfig),
            [sharedEntryTmpName, copyEntryTmpName],
            webpackConfig.styleEntries
        ),
        priority: PluginPriorities.EntryFilesManifestPlugin
    });
};

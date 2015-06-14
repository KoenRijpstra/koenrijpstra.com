module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/koenrijpstra.com',
            deployTo: '~/apps/main',
            repositoryUrl: 'https://github.com/KoenRijpstra/koenrijpstra.com.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del'],
            keepReleases: 2,
            shallowClone: true
        },
        production: {
            servers: 'serverpilot@koenrijpstra.com'
        }
    });

    // Serverpilot configuration support - Symlink current <- public
    shipit.on('published', function () {
        shipit.remote('cd ' + shipit.config.deployTo + ' && ln -nfs current public')
    });
};
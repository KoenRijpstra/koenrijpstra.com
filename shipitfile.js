module.exports = function (shipit) {
    require('shipit-deploy')(shipit);

    shipit.initConfig({
        default: {
            workspace: '/tmp/koenrijpstra.com',
            deployTo: '~/apps/main',
            repositoryUrl: 'https://github.com/KoenRijpstra/koenrijpstra.com.git',
            ignores: ['.git', 'node_modules', '.idea'],
            rsync: ['--del'],
            keepReleases: 2,
            shallowClone: true
        },
        production: {
            servers: 'serverpilot@koenrijpstra.com'
        }
    });
};
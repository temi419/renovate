module.exports = {
    username: "temi-reno",
    gitAuthor: "Self-hosted Renovate Bot <339479+temi-reno@users.noreply.github.com>",
    platform: 'github',
    onboarding: true, // disables the creation of renovate.json in each repository
    dependencyDashboard: true,
    labels: ["renovatebot"],
    requiredStatusChecks: null,
    packageRules: [
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['minor', 'patch', 'pin'],
            automerge: true,
            recreateClosed: true
        },
        {
            matchManagers: ['terraform'],
            matchUpdateTypes: ['major'],
            automerge: false,
            recreateClosed: true
        },
    ],
    enabledManagers: ["terraform"],
    lockFileMaintenance: {
        enabled: true,
        automerge: true
    },
    updateLockFiles: true,

    repositories: ['temi419/test-script'],
};

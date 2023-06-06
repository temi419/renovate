module.exports = {
  username: "Temi-reno",
  gitAuthor: "Temi-reno <339479+temi-reno@users.noreply.github.com>",
  platform: 'github',
  onboarding: true,
  dependencyDashboard: true,
  labels: ["renovatebot"],
  requiredStatusChecks: null,
  automerge: true, // Auto merge without reviewing
  automergeType: "pr", // Allows renovate to auto merge without PR reviews
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
  repositories: ['temidevops1/test-script','temidevops1/documentation-repo'],
};

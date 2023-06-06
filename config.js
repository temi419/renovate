module.exports = {
  username: "Temi-reno",
  gitAuthor: "Temi-reno <339479+temi-reno@users.noreply.github.com>",
  platform: 'github',
  onboarding: true,
  dependencyDashboard: true,
  labels: ["renovatebot"],
  requiredStatusChecks: null,
  automerge: true,
  automergeType: "pr",
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
name: 'Auto approve and merge PRs by dependabot'

on:
  pull_request:

jobs:
  autoapprove:
    name: 'Auto Approve a PR by dependabot'
    runs-on: 'ubuntu-latest'
    steps:
      - name: 'Auto approve'
        uses: 'hmarr/auto-approve-action@v2.0.0'
        if: "github.actor == 'dependabot[bot]' || github.actor == 'dependabot-preview[bot]'"
        with:
          github-token: '${{ secrets.GITHUB_ACTIONS_TOKEN }}'

  automerge:
    name: 'Auto merge after successful checks'
    needs: 'autoapprove'


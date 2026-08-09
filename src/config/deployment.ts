interface DeploymentEnvironment {
  githubActions?: boolean;
  githubRepository?: string;
}

export function getGitHubPagesDeployment({
  githubActions = false,
  githubRepository = "",
}: DeploymentEnvironment = {}) {
  const [owner = "", repository = ""] = githubRepository.split("/");
  const isUserOrOrganizationSite =
    repository.toLowerCase() === `${owner.toLowerCase()}.github.io`;

  return {
    base:
      githubActions && repository && !isUserOrOrganizationSite
        ? `/${repository}`
        : "/",
    site: owner ? `https://${owner}.github.io` : undefined,
  };
}

'use strict';

const RBAC_ACTIONS = [
  {
    section: "plugins",
    displayName: "View and access the plugin",
    uid: "use",
    pluginName: "github-projects"
  },
  {
    section: "plugins",
    subCategory: "Repositories",
    displayName: "Read github repos",
    uid: "repos.read",
    pluginName: "github-projects"
  },
  {
    section: "plugins",
    subCategory: "Projects",
    displayName: "Read projects entities",
    uid: "projects.read",
    pluginName: "github-projects"
  },
  {
    section: "plugins",
    subCategory: "Projects",
    displayName: "Create projects entities",
    uid: "projects.create",
    pluginName: "github-projects"
  },
  {
    section: "plugins",
    subCategory: "Projects",
    displayName: "Delete projects entities",
    uid: "projects.delete",
    pluginName: "github-projects"
  },
]

module.exports = async ({ strapi }) => {
  await strapi.admin.services.permission.actionProvider.registerMany(
    RBAC_ACTIONS
  );
};

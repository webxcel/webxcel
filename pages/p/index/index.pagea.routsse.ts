export default (pageContext: any) => {
  const { url } = pageContext;
  // Parse the URL
  const urlParts = url.slice(1).split("/");

  // Only URLs that start with `/user/*`
  if (urlParts[0] !== "w") {
    return false;
  }

  // Only URLs that start with `/user/:workspaceId/*`
  const workspaceId = urlParts[1];
  if (!workspaceId) {
    return false;
  }

  // Only URLs:
  // `/user/:workspaceId/settings`
  // `/user/:workspaceId/password-change`
  // `/user/:workspaceId/profile`
  const selectedView = urlParts[2];
  if (!["settings", "password-change", "profile"].includes(selectedView)) {
    return false;
  }

  return {
    // We add retrieved information to `pageContext.routeParams`
    routeParams: {
      workspaceId,
      selectedView,
    },
    precedence: 10,
  };
};

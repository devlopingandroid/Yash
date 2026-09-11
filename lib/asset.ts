/**
 * Resolves static asset paths with the appropriate basePath for GitHub Pages (/Yash)
 * while preserving root paths for Vercel and local development.
 */
export function getAssetPath(path: string | undefined): string {
  if (!path) return "";

  // Preserve external URLs, data URIs, and anchors
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("//") ||
    path.startsWith("data:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return path;

  // Prevent double-prepending if the path already starts with basePath
  if (path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

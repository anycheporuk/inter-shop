export const getCookieValue = (name: string, request: Request): string | undefined => {
	return request.headers.get("Cookie")?.split(";").find((c) => c.trim().startsWith(`${name}=`))?.split("=")[1] || undefined;
};

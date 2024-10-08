import type { MetadataRoute } from "next";

import { headers } from "next/headers";

export default function sitemap(): MetadataRoute.Sitemap {
	const domain = headers().get("host");

	return [
		{
			url: `https://${domain}`,
			lastModified: new Date(),
		},
	];
}

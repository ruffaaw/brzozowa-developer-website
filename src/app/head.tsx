export const metadata = {
  title: "Domy przy Brzozowej",
  description: "Zakrzów ul.Brzozowa 32-003 Niepołomice",
  image: "/logo.png",
};

export default function Head() {
  return (
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href={metadata.image} />
    </head>
  );
}

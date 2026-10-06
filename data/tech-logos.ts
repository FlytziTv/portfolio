// Logos des technologies (public/images), retrouvés à partir du début du nom affiché
const logos: [prefix: string, src: string][] = [
  ["typescript", "/images/skills/typescript.svg"],
  ["javascript", "/images/skills/javascript.svg"],
  ["php", "/images/skills/php.svg"],
  ["html", "/images/skills/html.svg"],
  ["css", "/images/skills/css.svg"],
  ["lua", "/images/skills/lua.svg"],
  ["angular", "/images/skills/angular.svg"],
  ["react", "/images/skills/react.svg"],
  ["next.js", "/images/skills/nextjs.svg"],
  ["vue", "/images/skills/vue.svg"],
  ["tailwind", "/images/skills/tailwindcss.svg"],
  ["node.js", "/images/skills/nodejs.svg"],
  ["symfony", "/images/skills/symfony.svg"],
  ["mysql", "/images/skills/mysql.svg"],
  ["mariadb", "/images/skills/mysql.svg"],
  ["debian", "/images/skills/debian.svg"],
  ["apache", "/images/skills/apache.svg"],
  ["vmware", "/images/logiciel/vmware.svg"],
  ["virtualbox", "/images/logiciel/Virtualbox.svg"],
  ["git", "/images/logiciel/git.svg"],
  ["vs code", "/images/logiciel/vscode.svg"],
  ["figma", "/images/logiciel/figma.svg"],
  ["mobaxterm", "/images/logiciel/mobaxterm.svg"],
  ["solidworks", "/images/logiciel/solidworks.svg"],
  ["autocad", "/images/logiciel/autocad.svg"],
  ["fusion", "/images/logiciel/fusion360.svg"],
  ["blender", "/images/logiciel/blender.svg"],
];

export const techLogo = (name: string) => {
  const key = name.toLowerCase();
  return logos.find(([prefix]) => key.startsWith(prefix))?.[1];
};

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-semibold">{t("hey")}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{t("portfolio")}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("check")}{" "}
        <a
          href="https://github.com/flytzitv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {t("github")}
        </a>{" "}
        {t("end")}.
      </p>
    </div>
  );
}

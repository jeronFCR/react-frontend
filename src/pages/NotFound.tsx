import { useEffect, useState } from "react";
import { TentTree } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const [secondsLeft, setSecondsLeft] = useState(5);
  const navigate = useNavigate();
  const [t] = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="grid grid-cols-1 place-items-center gap-8 text-center text-gray-500">
      <TentTree size={100} />
      <p className="text-3xl">{t("not-found.error-message")}</p>
      <p>{t("not-found.redirection-message", { secondsLeft })}</p>
    </div>
  );
}
